import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import { AppDispatch, AppThunk } from "../..";
import { api } from "../../../shared/services";

export type BetApi = {
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
  gameSelected: string[];
  games: BetApi[];
};

const initialState: BetSliceState = {
  gameSelected: [],
  games: [],
};

export const asyncGetBets = (token: string, filters: string[]): AppThunk => {
  return async (dispatch: AppDispatch) => {
    try {
      let url = `${api}/bet/all-bets`;
      filters.forEach((game, index) => {
        if (index === 0) {
          url += `?type%5B%5D=${game}`;
        } else {
          url += `&type%5B%5D=${game}`;
        }
      });
      const response = await fetch(`${url}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data: BetApi[] = await response.json();
      const newData = [...data];

      newData.sort((a: BetApi, b: BetApi) => {
        const dateOne = new Date(a.created_at).getTime();
        const dateTwo = new Date(b.created_at).getTime();
        return dateTwo - dateOne;
      });

      dispatch(setBet({ bets: newData }));
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
  },
});

export const { setBet, selectFilterGame } = betSlice.actions;
export default betSlice.reducer;
