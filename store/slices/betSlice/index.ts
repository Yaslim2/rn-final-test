import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from "../..";
import { api } from "../../../shared/services";

type BetApi = {
  id: number;
  user_id: number;
  game_id: number;
  choosen_numbers: string;
  price: number;
  created_at: string;
  ["type"]: {
    id: string;
    type: string;
  };
};

type BetSliceState = {
  gameSelected: string | null;
  games: BetApi[];
};

const initialState: BetSliceState = {
  gameSelected: null,
  games: [],
};

export const asyncGetBets = (token: string): AppThunk => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(`${api}/bet/all-bets`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      dispatch(setBet({ bets: data }));
    } catch (e: any) {
      throw new Error(e.message);
    }
  };
};

const betSlice = createSlice({
  name: "bet",
  initialState,
  reducers: {
    setBet(state, action: PayloadAction<{ bets: BetApi[] }>) {
      state.games = [...action.payload.bets];
    },
  },
});

export const { setBet } = betSlice.actions;
export default betSlice.reducer;
