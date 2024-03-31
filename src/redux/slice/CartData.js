// CartData.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "CartAllData",
  initialState: { cart: [] },
  reducers: {
    handelCart: (state, action) => {
      let element = { ...action.payload };
      console.log(element);
      console.log(action.payload.typeTwo);
      if (action.payload.typeTwo === "removeAll") {
        state.cart = [];
      } else if (action.payload.typeTwo === "add") {
        state.cart = [...state.cart, element];
      } else if (action.payload.typeTwo === "removed") {
        let c = state.cart.filter((item) => item.id !== element.id);
        console.log(c);
        state.cart = state.cart.filter((item) => item.id !== element.id);
      }
    },
  },
});

export const { handelCart } = cartSlice.actions;
export default cartSlice.reducer;
