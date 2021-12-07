import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sameValues } from "../../../shared/helpers";

type CartItem = {
  id: string;
  type: string;
  numbers: number[];
  price: number;
  color: string;
};

type CartSliceState = {
  items: CartItem[];
  totalAmount: number;
};

const initialState: CartSliceState = {
  items: [],
  totalAmount: 0,
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
      state.totalAmount = item.price;
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
