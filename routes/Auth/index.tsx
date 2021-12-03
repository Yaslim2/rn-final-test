import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn, SignUp, ResetPassword, Default } from "../../screens";

const AuthStack = createNativeStackNavigator();

export type RootAuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ResetPassword: undefined;
  Default: undefined;
};

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen component={Default} name="Default" />
      <AuthStack.Screen component={SignIn} name="SignIn" />
      <AuthStack.Screen component={SignUp} name="SignUp" />
      <AuthStack.Screen component={ResetPassword} name="ResetPassword" />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;