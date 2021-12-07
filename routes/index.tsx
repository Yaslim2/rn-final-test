import React, { useCallback, useEffect, useState } from "react";
import AuthNavigator from "./Auth";
import AppNavigator from "./App";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootState } from "../store";
import { asyncGetGames } from "../store/slices/gameSlice";
import { handleErrors } from "../shared/helpers";
import { asyncGetUser } from "../store/slices/authSlice";
import { ActivityIndicator } from "react-native";
import { primaryGrey } from "../shared/themes";
import { Container } from "./styles";

const Routes: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch();

  const loadGames = useCallback(async () => {
    try {
      setIsLoading(true);
      await dispatch(asyncGetGames());
      setIsLoading(false);
    } catch (e: any) {
      setIsLoading(false);
      handleErrors("Error", e.message, true);
    }
  }, []);

  const loadToken = useCallback(async () => {
    try {
      setIsLoading(true);
      const token = await AsyncStorage.getItem("@token");
      if (token) {
        await dispatch(asyncGetUser(token));
      }
      setIsLoading(false);
    } catch (e: any) {
      setIsLoading(false);
      handleErrors("Error", e.message, true);
    }
  }, []);

  useEffect(() => {
    const asyncActions = async () => {
      await loadToken();
      await loadGames();
    };
    asyncActions();
  }, [loadGames, loadToken]);

  const token = useSelector((state: RootState) => state.auth.user?.token);

  if (isLoading) {
    return (
      <Container>
        <ActivityIndicator size="large" color={primaryGrey} />
      </Container>
    );
  }

  return token ? <AppNavigator /> : <AuthNavigator />;
};

export default Routes;
