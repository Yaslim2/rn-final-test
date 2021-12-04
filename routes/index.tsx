import React from "react";
import AuthNavigator from "./Auth";
import AppNavigator from "./App";

import { useSelector } from "react-redux";
import { RootState } from "../store";

const Routes: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.user?.token);

  return token ? <AppNavigator /> : <AuthNavigator />;
};

export default Routes;
