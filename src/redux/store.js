import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/WishlistData";
import ProductSlice from "./slice/AllProduct";
import cartSlice from "./slice/CartData";
import CheckLoginSlice from "./slice/CheckLogin";
export const store = configureStore({
  reducer: {
    wishlistData: counterSlice,
    productData: ProductSlice,
    CartAllData: cartSlice,
    CheckLogin: CheckLoginSlice,
  },
});
