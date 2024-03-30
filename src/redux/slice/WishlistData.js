import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const counterSlice = createSlice({
  name: "wishlistData",
  initialState: { like: [] },
  reducers: {
    handelWishlist: (state, action) => {
      const { type, element } = action.payload;
      console.log(state.like);
      if (type === "remove") {
        const updatedLike = state.like.filter((e) => element.id !== e.id);
        state.like = [...updatedLike];
      } else {
        state.like = [...state.like, element];
      }
    },
  },
});

export const { handelWishlist } = counterSlice.actions;
export default counterSlice.reducer;
