import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.some((item) => item.id === action.payload.id)) {
        const updatedItem = state.find((item) => item.id === action.payload.id);
        updatedItem.quantity += action.payload.quantity;
        return;
      } else {
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    increaseQuantity: (state, action) => {
      const updatedItem = state.find((item) => item.id === action.payload.id);
      updatedItem.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const updatedItem = state.find((item) => item.id === action.payload.id);
      if (updatedItem.quantity > 1) {
        updatedItem.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
