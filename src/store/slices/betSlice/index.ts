import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getBets } from "@shared/services/api/bets";
import { AppDispatch, AppThunk } from "@store/types";
import { BetApi, BetSliceState } from "./types";

const initialState: BetSliceState = {
  gameSelected: [],
  games: [],
};

export const asyncGetBets = (filters: string[]): AppThunk => {
  return async (dispatch: AppDispatch) => {
    try {
      const bets = await getBets(filters);
      dispatch(setBet({ bets }));
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
    selectFilterGame(state, action: PayloadAction<{ game: string }>) {
      const existingGame = state.gameSelected?.find(
        (game) => game === action.payload.game
      );
      if (existingGame && state.gameSelected) {
        state.gameSelected = state.gameSelected?.filter(
          (game) => game !== action.payload.game
        );
      } else {
        state.gameSelected?.push(action.payload.game);
      }
    },
    resetBet(state) {
      state.gameSelected = [];
      state.games = [];
    },
  },
});

export const { setBet, selectFilterGame, resetBet } = betSlice.actions;
export default betSlice.reducer;
