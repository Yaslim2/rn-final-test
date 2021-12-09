import { configureStore } from "@reduxjs/toolkit";
import { authSlice, cartSlice, gameSlice } from "./slices";
import betSlice from "./slices/betSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    game: gameSlice,
    bet: betSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
