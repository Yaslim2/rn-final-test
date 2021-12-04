import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { View } from "react-native";
import { RootBetStackNavigator } from "../../routes/App";
import { Ionicons } from "@expo/vector-icons";
import { primaryGrey } from "../../shared/themes";
import { logout } from "../../store/slices/authSlice";
import { useDispatch } from "react-redux";

const Home = (props: NativeStackScreenProps<RootBetStackNavigator, "Home">) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
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
      title: "Recents games",
    });
  }, []);

  return <View />;
};

export default Home;
