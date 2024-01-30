import { createSlice } from "@reduxjs/toolkit";
import { productsState } from "../states/ProductState";
import { RootState } from "../store/Store";

const initialState = productsState;
export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getAllProduct: (state: RootState) => {
      return state;
    },
  },
});

export const { getAllProduct } = productSlice.actions;
export default productSlice.reducer;
