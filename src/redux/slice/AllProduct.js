import { createSlice } from "@reduxjs/toolkit";
import data from "../../Assets/men";

const ProductSlice = createSlice({
  name: "AllProductData",
  initialState: { product: data },
  reducers: {
    handelProduct: (state, action) => {
      console.log(action.payload);
      let element = { ...action.payload };
      console.log(state.product);
      console.log(action.payload.typeItem);
      if (action.payload.typeItem === "itemAdded") {
        state.product = element.updatedProductData;
        // console.log(element.updatedProductData);
      } else if (action.payload.typeItem === "remove") {
        state.product = element.updatedProductData;
        // console.log(updatedMenData);
        // state.product = [...updatedMenData];
      } else if (action.payload.typeItem === "moveToBag") {
        state.product = element.updatedProductData;
      } else if (action.payload.typeItem === "moveWishlist") {
        state.product = element.updatedProductData;
      } else if (action.payload.typeItem === "setSelectSizeFun") {
        state.product = element.updatedProductData;
      } else if (action.payload.typeItem === "setSizeFun") {
        state.product = element.updatedProductData;
      } else {
        if (!element.liked) {
          const updatedMenData = state.product.map((item) =>
            item.id === element.id ? { ...item, liked: true } : item
          );
          state.product = [...updatedMenData];
        } else {
          const updatedMenData = state.product.map((item) =>
            item.id === element.id ? { ...item, liked: false } : item
          );

          state.product = [...updatedMenData];
          console.log(updatedMenData);
        }
      }
    },
  },
});

export const { handelProduct } = ProductSlice.actions;
export default ProductSlice.reducer;

// reducers: {

//   loginSuccess: (state, action) => {

//     state.user = action.payload;

//     state.isAuthenticated = true;

//     state.error = null;

//   },

//   loginFailure: (state, action) => {

//     state.error = action.payload;

//   },

//   logout: (state) => {

//     state.user = null;

//     state.isAuthenticated = false;

//     state.error = null;

//   },
//const initialState = {

// user: null,

// isAuthenticated: false,

// error: null,

// };
