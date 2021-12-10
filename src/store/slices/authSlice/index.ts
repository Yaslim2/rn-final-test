import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "@shared/services";
import { AppDispatch, AppThunk } from "@store/types";
import { ApiError, ApiUser, AuthSliceState, TokenApi, User } from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState: AuthSliceState = {
  user: null,
};

export const asyncGetUser = (token: string): AppThunk => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(`${api}/user/my-account`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const user: User = await response.json();
      dispatch(
        setUser({
          id: user.id,
          email: user.email,
          bets: [...user.bets],
          name: user.name,
          token,
        })
      );
    } catch (e: any) {
      throw new Error(e.message);
    }
  };
};

export const asyncUpdateAccount = (
  token: string,
  name: string,
  email: string
): AppThunk => {
  return async (dispatch: AppDispatch) => {
    try {
      await fetch(`${api}/user/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          email,
          name,
        }),
      });
    } catch (e: any) {
      throw new Error(e.message);
    }
  };
};

export const asyncChangePassword = (
  token: string,
  password: string
): AppThunk => {
  return async (dispatch: AppDispatch) => {
    try {
      await fetch(`${api}/reset/${token}`, {
        method: "POST",
        body: JSON.stringify({
          password,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
    } catch (e: any) {
      throw new Error(e.message);
    }
  };
};

export const asyncLoginUser = (email: string, password: string): AppThunk => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(`${api}/login`, {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      if (data.user) {
        const user: ApiUser = data.user;
        const token: TokenApi = data.token;
        dispatch(
          setUser({
            id: user.id,
            email: user.email,
            name: user.name,
            token: token.token,
            bets: [],
          })
        );
        await AsyncStorage.setItem("@token", token.token);
        return;
      }
      if (data.message) {
        throw new Error(data.message);
      }
    } catch (e: any) {
      throw new Error(e.message);
    }
  };
};

export const asyncCreateUser = (
  email: string,
  password: string,
  name: string
): AppThunk => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(`${api}/user/create/`, {
        body: JSON.stringify({
          email,
          password,
          name,
        }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      if (data.user) {
        const user: ApiUser = data.user;
        const token: TokenApi = data.token;
        dispatch(
          setUser({
            id: user.id,
            email: user.email,
            name: user.name,
            token: token.token,
            bets: [],
          })
        );
        await AsyncStorage.setItem("@token", token.token);
        return;
      }
      if (data.error) {
        const error: ApiError = data.error;
        throw new Error(error.message);
      }
    } catch (e: any) {
      throw new Error(e.message);
    }
  };
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = {
        email: action.payload.email,
        name: action.payload.name,
        id: action.payload.id,
        token: action.payload.token,
        bets: action.payload.bets,
      };
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { logout, setUser } = authSlice.actions;

export default authSlice.reducer;
