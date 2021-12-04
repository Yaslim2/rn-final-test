import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../../shared/services/";
import { AppDispatch, AppThunk } from "../..";

type Game = {
  numbers: number[];
  price: number;
  date: string;
  type: string;
};

type User = {
  id: number;
  token: string;
  tokenExpires: string;
  name: string;
  email: string;
  games: Game[];
};

type ApiUser = {
  created_at: string;
  email: string;
  id: number;
  name: string;
  updated_at: string;
};

type TokenApi = {
  expires_at: string;
  token: string;
  type: string;
};

type ApiError = {
  message: string;
};

type AuthSliceState = {
  user: User | null;
};

const initialState: AuthSliceState = {
  user: null,
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
            games: [],
            tokenExpires: token.expires_at,
          })
        );
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
            games: [],
            tokenExpires: token.expires_at,
          })
        );
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
        tokenExpires: action.payload.tokenExpires,
        games: [],
      };
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
