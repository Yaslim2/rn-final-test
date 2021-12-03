import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Account, Home, NewBet } from "../../screens";

const AppDrawer = createDrawerNavigator();

const BetStack = createNativeStackNavigator();

const BetNavigator = () => {
  return (
    <BetStack.Navigator>
      <BetStack.Screen component={Home} name="Home" />
      <BetStack.Screen component={NewBet} name="New Bet" />
    </BetStack.Navigator>
  );
};

const AccountStack = createNativeStackNavigator();

const AccountNavigator = () => {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen component={Account} name="Account" />
    </AccountStack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <AppDrawer.Navigator>
      <AppDrawer.Screen component={BetNavigator} name="BetNavigator" />
      <AppDrawer.Screen component={AccountNavigator} name="AccountNavigator" />
    </AppDrawer.Navigator>
  );
};

export default AppNavigator;
