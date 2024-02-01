import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../../models/ProductModels";

interface CartItem {
  product: Product;
  qty: number;
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToChart: (state, action) => {
      const { id, title, image, price, content } = action.payload;

      const existingItem = state.items.find((item) => item.product.id == id);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.items.push({
          product: { id, title, image, price, content },
          qty: 1,
        });
      }
      state.totalPrice += price;

      console.log(state);
    },
    removeProduct: (state, action) => {
      const { id } = action.payload;

      const indexExistingItem = state.items.findIndex(
        (item) => item.product.id === id
      );

      if (indexExistingItem != -1) {
        const existingItem = state.items[indexExistingItem];
        state.totalPrice -= existingItem.product.price * existingItem.qty;
        state.items.splice(indexExistingItem, 1);
      }
    },
  },
});

export const { addToChart, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
