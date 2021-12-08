import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootBetStackNavigator } from "../../routes/App";
import { RootState } from "../../store";
import { Ionicons } from "@expo/vector-icons";
import { primaryGrey } from "../../shared/themes";
import ScrollContainer from "../../components/ScrollContainer";
import GamePicker from "../../components/GamePicker";
import {
  Container,
  NewBetContainer,
  GameTypeText,
  NewBetText,
  NewBetArea,
  ChooseAGameText,
  PickerArea,
  FillYourBetText,
  DescriptionText,
  BallsArea,
  ActionButtonArea,
} from "./styles";

import Ball from "../../components/Ball";
import { generateArray, handleErrors } from "../../shared/helpers";
import {
  asyncGetGames,
  clearGame,
  completeGame,
  selectBall,
} from "../../store/slices/gameSlice";
import { ActivityIndicator } from "react-native";
import BetActionButton from "../../components/BetActionButton";
import { addToCart } from "../../store/slices/cartSlice";

const NewBet = (
  props: NativeStackScreenProps<RootBetStackNavigator, "NewBet">
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleGoToCart = () => {
    props.navigation.navigate("Cart");
  };

  const loadGames = useCallback(async () => {
    try {
      setIsLoading(true);
      await dispatch(asyncGetGames());
      setIsLoading(false);
    } catch (e: any) {
      handleErrors("Error", e.message, true);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      title: "New bet",
      headerRight: () => {
        return (
          <Ionicons
            onPress={handleGoToCart}
            name="cart-outline"
            size={26}
            color={primaryGrey}
          />
        );
      },
    });
    loadGames();
  }, []);

  const selectedGame = useSelector(
    (state: RootState) => state.game.selectedGame
  );

  const selectedBalls = useSelector(
    (state: RootState) => state.game.ballsSelected
  );

  const handleSelectBall = (ball: number) => {
    try {
      dispatch(selectBall({ ball }));
    } catch (e: any) {
      handleErrors("Game error", e.message, true);
    }
  };

  const handleCompleteGame = () => {
    try {
      dispatch(completeGame());
    } catch (e: any) {
      handleErrors("Game error", e.message, true);
    }
  };

  const handleClearGame = () => {
    dispatch(clearGame());
  };

  const handleAddToCart = () => {
    const ballsToBeAdded = selectedGame!.max_number - selectedBalls.length;

    if (ballsToBeAdded !== 0) {
      handleErrors(
        "Game error",
        `There is ${ballsToBeAdded} number${
          ballsToBeAdded === 1 ? "" : "s"
        } left to complete your game!`,
        true
      );
      return;
    }

    const selectedBallsNumber = selectedBalls.map((ball) => Number(ball));
    selectedBallsNumber.sort((a: number, b: number) => a - b);

    const item = {
      id: new Date().getTime().toString(),
      gameId: selectedGame!.id,
      color: selectedGame!.color,
      numbers: selectedBallsNumber,
      price: selectedGame!.price,
      type: selectedGame!.type,
    };

    dispatch(
      addToCart({
        item,
      })
    );
    dispatch(clearGame());
  };

  const balls = generateArray(selectedGame!.range);

  if (isLoading) {
    return (
      <Container>
        <ActivityIndicator size="large" color={primaryGrey} />
      </Container>
    );
  }
  return (
    <ScrollContainer>
      <NewBetContainer>
        <NewBetArea>
          <NewBetText>NEW BET FOR </NewBetText>
          <GameTypeText>{selectedGame?.type.toUpperCase()}</GameTypeText>
        </NewBetArea>
        <ChooseAGameText>Choose a game</ChooseAGameText>
        <PickerArea>
          <GamePicker />
        </PickerArea>
        <FillYourBetText>Fill your bet</FillYourBetText>
        <DescriptionText>{selectedGame?.description}</DescriptionText>

        <BallsArea>
          {balls.map((item, index) => {
            return (
              <Ball
                color={selectedGame?.color}
                onSelect={handleSelectBall}
                key={index}
                number={item <= 9 ? "0" + item : item}
              />
            );
          })}
        </BallsArea>
        <ActionButtonArea>
          <BetActionButton onPress={handleCompleteGame}>
            Complete game
          </BetActionButton>
          <BetActionButton onPress={handleClearGame}>
            Clear game
          </BetActionButton>
          <BetActionButton onPress={handleAddToCart} isAddToCart>
            Add to cart
          </BetActionButton>
        </ActionButtonArea>
      </NewBetContainer>
    </ScrollContainer>
  );
};

export default NewBet;
