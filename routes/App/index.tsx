import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Account, Cart, Home, NewBet } from "../../screens";
import {
  primaryGrey,
  PoppinsBold,
  secondaryGrey,
  PoppinsItalicRegular,
} from "../../shared/themes";
import { Ionicons } from "@expo/vector-icons";
import { drawerBgColor, bgDefaultColor } from "../../shared/themes";

export type RootBetStackNavigator = {
  Home: undefined;
  NewBet: undefined;
  Cart: undefined;
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
          backgroundColor: bgDefaultColor,
        },
        headerShown: false,
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
            title: "Recent games",
          };
        }}
      />
      <BetStack.Screen component={NewBet} name="NewBet" />
      <BetStack.Screen component={Cart} name="Cart" />
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
          backgroundColor: bgDefaultColor,
        },
        headerShown: false,
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
            title: "Update account",
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
        drawerContentStyle: { backgroundColor: drawerBgColor },
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
