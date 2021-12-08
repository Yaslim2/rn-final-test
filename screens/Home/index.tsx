import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { RootBetStackNavigator } from "../../routes/App";
import { Ionicons } from "@expo/vector-icons";
import { primaryGrey } from "../../shared/themes";
import { logout } from "../../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

import AsyncStorage from "@react-native-async-storage/async-storage";
import MainButton from "../../components/MainButton";
import { asyncGetBets } from "../../store/slices/betSlice";
import { RootState } from "../../store";

const Home = (props: NativeStackScreenProps<RootBetStackNavigator, "Home">) => {
  const token = useSelector((state: RootState) => state.auth.user!.token);
  const bets = useSelector((state: RootState) => state.bet.games);
  const dispatch = useDispatch();

  const handleNewBet = () => {
    props.navigation.navigate("NewBet");
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("@token");
    dispatch(logout());
  };

  const handleGetBets = async () => {
    await dispatch(asyncGetBets(token));
  };

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
    props.navigation.addListener("focus", handleGetBets);
  }, []);

  const betsArray = bets.map((bet) => (
    <Text key={bet.id}>{bet.choosen_numbers}</Text>
  ));

  return (
    <View>
      <MainButton onPress={handleNewBet}>New bet</MainButton>
      {betsArray}
    </View>
  );
};

export default Home;
