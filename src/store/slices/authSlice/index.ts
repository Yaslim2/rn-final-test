import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from "@store/types";
import { AuthSliceState, User } from "./types";
import { changePassword, loginUser } from "@shared/services/api/auth";
import { createUser, getUser, updateAccount } from "@shared/services/api/user";

const initialState: AuthSliceState = {
  user: null,
};

export const asyncGetUser = (): AppThunk => {
  return async (dispatch: AppDispatch) => {
    try {
      const user: User = await getUser();
      dispatch(
        setUser(user)
      );
    } catch (e: any) {
      throw new Error(e.message);
    }
  };
};

export const asyncUpdateAccount = (name: string, email: string): AppThunk => {
  return async () => {
    try {
      await updateAccount({ email, name });
    } catch (e: any) {
      throw new Error(e.message);
    }
  };
};

export const asyncChangePassword = (
  token: string,
  password: string
): AppThunk => {
  return async () => {
    try {
      await changePassword({ token, password });
    } catch (e: any) {
      throw new Error(e.message);
    }
  };
};

export const asyncLoginUser = (email: string, password: string): AppThunk => {
  return async (dispatch: AppDispatch) => {
    try {
      const user = await loginUser({ email, password });
      if (user) {
        dispatch(setUser(user));
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
      const user = await createUser({ email, password, name });
      if (user) {
        dispatch(setUser(user));
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
