import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sameValues } from "@shared/helpers";
import { api } from "@shared/services";
import { AppDispatch, AppThunk } from "@store/types";
import { CartItem, CartItemApi, CartSliceState } from "./types";

const initialState: CartSliceState = {
  items: [],
  totalAmount: 0,
};

export const asyncMakeBet = (token: string, items: CartItemApi[]): AppThunk => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(`${api}/bet/new-bet`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ games: items }),
      });
      const data = await response.json();
      dispatch(clearCart());
    } catch (e: any) {
      throw new Error(e.message);
    }
  };
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<{ item: CartItem }>) {
      const item = action.payload.item;

      const sameGameType = state.items.filter(
        (game) => game.type === item.type
      );

      sameGameType.forEach((game) => {
        if (sameValues(game.numbers, item.numbers)) {
          throw new Error("The game you tried to add already exists.");
        }
      });

      state.items.push(item);
      state.totalAmount += item.price;
    },
    removeFromCart(state, action: PayloadAction<{ id: string }>) {
      state.items = state.items.filter((item) => {
        if (item.id === action.payload.id) {
          state.totalAmount -= item.price;
        }
        return item.id !== action.payload.id;
      });
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, clearCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
