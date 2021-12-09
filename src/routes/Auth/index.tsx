import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  SignIn,
  SignUp,
  ResetPassword,
  Default,
  ChangePassword,
} from "@screens/index";

const AuthStack = createNativeStackNavigator();

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
      <AuthStack.Screen component={ChangePassword} name="ChangePassword" />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
