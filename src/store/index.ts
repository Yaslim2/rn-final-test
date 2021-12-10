import { configureStore } from "@reduxjs/toolkit";
import { authSlice, cartSlice, gameSlice, betSlice } from "./slices";

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    game: gameSlice,
    bet: betSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: {
        ignoredPaths: ["ignoredPath", "ignoredNested.one", "ignoreNested.two"],
      },
    }),
});

export default store;
