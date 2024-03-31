import { createSlice } from "@reduxjs/toolkit";
import data from "../../Assets/men";

const ProductSlice = createSlice({
  name: "AllProductData",
  initialState: { product: data },
  reducers: {
    handelProduct: (state, action) => {
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
