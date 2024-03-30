import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/WishlistData";
import ProductSlice from "./slice/AllProduct";

export const store = configureStore({
  reducer: {
    wishlistData: counterSlice,
    productData: ProductSlice,
  },
});
