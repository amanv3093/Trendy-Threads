import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/WishlistData";
import ProductSlice from "./slice/AllProduct";
import cartSlice from "./slice/CartData";
export const store = configureStore({
  reducer: {
    wishlistData: counterSlice,
    productData: ProductSlice,
    CartAllData: cartSlice,
  },
});
