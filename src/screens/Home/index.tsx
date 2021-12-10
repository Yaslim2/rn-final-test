import React, { useCallback, useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList } from "react-native";
import { RootBetStackNavigator } from "@routes/App/types";
import { Ionicons } from "@expo/vector-icons";
import { primaryGrey } from "@shared/themes";
import { logout } from "@store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  MainButton,
  FilterButton,
  RecentGameItem,
  Loading,
  EmptyRecentGames,
} from "@components/index";
import {
  resetBet,
  selectFilterGame,
  asyncGetBets,
} from "@store/slices/betSlice";
import { RootState } from "@store/types";
import { handleErrors } from "@shared/helpers";
import {
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
    try {
      setIsLoading(true);
      await AsyncStorage.removeItem("@token");
      setIsLoading(false);
      dispatch(logout());
    } catch (e: any) {
      handleErrors("Error", e.message, true);
    }
  };

  const handleGetBets = useCallback(async () => {
    try {
      setIsLoading(true);
      await dispatch(asyncGetBets(token, gamesSelected));
    } catch (e: any) {
      handleErrors("Bet error", e.message, true);
    }
    setIsLoading(false);
  }, [gamesSelected, token]);

  const handleResetBet = useCallback(async () => {
    dispatch(resetBet());
  }, []);

  useEffect(() => {
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
    const resetListener = props.navigation.addListener("focus", handleResetBet);
    const betListener = props.navigation.addListener("focus", handleGetBets);
    return () => {
      setIsLoading(false);
      props.navigation.removeListener("focus", resetListener);
      props.navigation.removeListener("focus", betListener);
    };
  }, [handleGetBets, handleResetBet]);

  useEffect(() => {
    handleGetBets();
  }, [gamesSelected, handleGetBets]);

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
          const isSelected = gamesSelected.find(
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
          bets.length > 0 ? (
            <FlatList
              data={bets}
              removeClippedSubviews
              refreshing={isLoading}
              onRefresh={handleGetBets}
              renderItem={(item) => <RecentGameItem item={item.item} />}
            />
          ) : (
            <EmptyRecentGames />
          )
        ) : (
          <Loading />
        )}
      </ListContainer>
    </HomeContainer>
  );
};

export default Home;
