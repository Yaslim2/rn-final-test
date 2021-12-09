import React, { useCallback, useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ActivityIndicator, FlatList } from "react-native";
import { RootBetStackNavigator } from "@routes/App/types";
import { Ionicons } from "@expo/vector-icons";
import { primaryGrey } from "@shared/themes";
import { logout } from "@store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MainButton, FilterButton, RecentGameItem } from "@components/index";
import { asyncGetBets, selectFilterGame } from "@store/slices/betSlice";
import { RootState } from "@store/types";
import { handleErrors } from "@shared/helpers";
import {
  Centered,
  RecentGamesText,
  HomeContainer,
  FilterButtonsArea,
  MainButtonHomeArea,
  ListContainer,
} from "./styles";

const Home = (props: NativeStackScreenProps<RootBetStackNavigator, "Home">) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const token = useSelector((state: RootState) => state.auth.user!.token);
  const bets = useSelector((state: RootState) => state.bet.games);
  const gamesSelected = useSelector(
    (state: RootState) => state.bet.gameSelected
  );
  const dispatch = useDispatch();

  const handleNewBet = () => {
    props.navigation.navigate("NewBet");
  };

  const handleLogout = async () => {
    setIsLoading(true);
    await AsyncStorage.removeItem("@token");
    setIsLoading(false);
    dispatch(logout());
  };

  const handleGetBets = useCallback(async () => {
    try {
      setIsLoading(true);
      await dispatch(asyncGetBets(token, gamesSelected));
      setIsLoading(false);
    } catch (e: any) {
      setIsLoading(false);
      handleErrors("Bet error", e.message, true);
    }
  }, [gamesSelected, token]);

  useEffect(() => {
    handleGetBets();
    props.navigation.setOptions({
      headerRight: () => {
        return (
          <Ionicons
            name="exit-outline"
            size={26}
            color={primaryGrey}
            onPress={handleLogout}
          />
        );
      },
      headerShown: true,
    });
    return () => {
      setIsLoading(false);
    };
  }, [handleGetBets]);

  useEffect(() => {
    handleGetBets();
  }, [gamesSelected, handleGetBets]);

  const selectedGames = useSelector(
    (state: RootState) => state.bet.gameSelected
  );
  const avaiableGames = useSelector(
    (state: RootState) => state.game.avaiableGames
  );

  const onFilter = (item: string) => {
    dispatch(selectFilterGame({ game: item }));
  };

  return (
    <HomeContainer>
      <RecentGamesText>Recent games</RecentGamesText>
      <FilterButtonsArea>
        {avaiableGames.map((game) => {
          const isSelected = selectedGames.find(
            (gameSelected) => gameSelected === game.type
          );
          return (
            <FilterButton
              key={game.type}
              isActive={!!isSelected}
              onPress={onFilter.bind(this, game.type)}
              color={game.color}
            >
              {game.type}
            </FilterButton>
          );
        })}
      </FilterButtonsArea>
      <MainButtonHomeArea>
        <MainButton onPress={handleNewBet}>New bet</MainButton>
      </MainButtonHomeArea>

      <ListContainer style={{ elevation: 1 }}>
        {!isLoading ? (
          <FlatList
            data={bets}
            removeClippedSubviews
            refreshing={isLoading}
            onRefresh={handleGetBets}
            renderItem={(item) => <RecentGameItem item={item.item} />}
          />
        ) : (
          <Centered>
            <ActivityIndicator size="large" color={primaryGrey} />
          </Centered>
        )}
      </ListContainer>
    </HomeContainer>
  );
};

export default Home;
