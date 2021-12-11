import React, { useCallback, useEffect, useState } from "react";
import AuthNavigator from "./Auth";
import AppNavigator from "./App";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootState } from "@store/types";
import { asyncGetGames } from "../store/slices/gameSlice";
import { handleErrors } from "@shared/helpers";
import { asyncGetUser } from "@store/slices/authSlice";
import { Loading } from "@components/index";

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

  const loadUser = useCallback(async () => {
    try {
      setIsLoading(true);
      const token = await AsyncStorage.getItem("@token");
      if (token) {
        await dispatch(asyncGetUser());
      }
      setIsLoading(false);
    } catch (e: any) {
      setIsLoading(false);
      handleErrors("Error", e.message, true);
    }
  }, []);

  useEffect(() => {
    const asyncActions = async () => {
      await loadUser();
      await loadGames();
    };
    asyncActions();
  }, [loadGames, loadUser]);

  const user = useSelector((state: RootState) => state.auth.user);

  if (isLoading) {
    return <Loading />;
  }

  return user ? <AppNavigator /> : <AuthNavigator />;
};

export default Routes;
