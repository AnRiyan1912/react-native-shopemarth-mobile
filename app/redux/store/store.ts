import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "../slices/feaeture/customerSlices";
import cartReducer from "../slices/feaeture/cartSlice";

export const store = configureStore({
  reducer: {
    customer: customerReducer,
    cart: cartReducer,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
