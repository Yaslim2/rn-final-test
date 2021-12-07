import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { View } from "react-native";
import { RootBetStackNavigator } from "../../routes/App";
import { Ionicons } from "@expo/vector-icons";
import { primaryGrey } from "../../shared/themes";
import { logout } from "../../store/slices/authSlice";
import { useDispatch } from "react-redux";

import AsyncStorage from "@react-native-async-storage/async-storage";
import MainButton from "../../components/MainButton";

const Home = (props: NativeStackScreenProps<RootBetStackNavigator, "Home">) => {
  const dispatch = useDispatch();

  const handleNewBet = () => {
    props.navigation.navigate("NewBet");
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("@token");
    dispatch(logout());
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
  }, []);

  return (
    <View>
      <MainButton onPress={handleNewBet}>New bet</MainButton>
    </View>
  );
};

export default Home;
