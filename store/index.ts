import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
