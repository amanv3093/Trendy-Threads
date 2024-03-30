import { createSlice } from "@reduxjs/toolkit";
import data from "../../Assets/men";

const ProductSlice = createSlice({
  name: "AllProductData",
  initialState: { product: data },
  reducers: {
    handelProduct: (state, action) => {
      let element = { ...action.payload };

      if (element.liked === false) {
        const updatedMenData = state.product.map((item) =>
          item.id === element.id ? { ...item, liked: true } : item
        );
        state.product = [...updatedMenData];
      } else {
        const updatedMenData = state.product.map((item) =>
          item.id === element.id ? { ...item, liked: false } : item
        );
        state.product = [...updatedMenData];
      }
    },
  },
});

export const { handelProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
