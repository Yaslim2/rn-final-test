import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Account, Home, NewBet } from "../../screens";
import {
  primaryGrey,
  PoppinsBold,
  secondaryGrey,
  PoppinsItalicRegular,
} from "../../shared/themes";
import { Ionicons } from "@expo/vector-icons";

export type RootBetStackNavigator = {
  Home: undefined;
  NewBet: undefined;
};

export type RootAppDrawerNavigator = {
  Bets: undefined;
  Account: undefined;
};

export type RootAccountStackNavigator = {
  AccountScreen: undefined;
};

const AppDrawer = createDrawerNavigator();

const BetStack = createNativeStackNavigator();

const BetNavigator = () => {
  return (
    <BetStack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: PoppinsItalicRegular,
          color: primaryGrey,
          fontSize: 20,
        },
        headerStyle: {
          backgroundColor: "#f7f7f7",
        },
      }}
    >
      <BetStack.Screen
        component={Home}
        name="Home"
        options={({ navigation }) => {
          return {
            headerLeft: () => {
              return (
                <Ionicons
                  name="md-menu"
                  size={26}
                  color={secondaryGrey}
                  style={{ marginRight: 20 }}
                  onPress={() => navigation.toggleDrawer()}
                />
              );
            },
          };
        }}
      />
      <BetStack.Screen component={NewBet} name="New Bet" />
    </BetStack.Navigator>
  );
};

const AccountStack = createNativeStackNavigator();

const AccountNavigator = () => {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: PoppinsItalicRegular,
          color: primaryGrey,
          fontSize: 20,
        },
        headerStyle: {
          backgroundColor: "#f7f7f7",
        },
      }}
    >
      <AccountStack.Screen
        component={Account}
        name="AccountScreen"
        options={({ navigation }) => {
          return {
            headerLeft: () => {
              return (
                <Ionicons
                  name="md-menu"
                  size={26}
                  color={secondaryGrey}
                  style={{ marginRight: 20 }}
                  onPress={() => navigation.toggleDrawer()}
                />
              );
            },
          };
        }}
      />
    </AccountStack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <AppDrawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: primaryGrey,
        drawerLabelStyle: { fontFamily: PoppinsBold },
        drawerContentStyle: { backgroundColor: "#fdd8d8" },
      }}
    >
      <AppDrawer.Screen
        component={BetNavigator}
        name="Bets"
        options={{
          drawerIcon: (drawerConfig) => {
            return (
              <Ionicons
                name="game-controller-outline"
                size={26}
                color={drawerConfig.color}
              />
            );
          },
        }}
      />
      <AppDrawer.Screen
        component={AccountNavigator}
        name="Account"
        options={{
          drawerIcon: (drawerConfig) => {
            return (
              <Ionicons
                name="person-circle-outline"
                size={26}
                color={drawerConfig.color}
              />
            );
          },
        }}
      />
    </AppDrawer.Navigator>
  );
};

export default AppNavigator;
