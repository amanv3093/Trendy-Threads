import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "wishlistData",
  initialState: { like: [] },
  reducers: {
    handelWishlist: (state, action) => {
      const element = action.payload;

      // console.log(element);

      if (!element.liked) {
        const updatedLike = state.like.filter((e) => element.id !== e.id);
        state.like = updatedLike;
      } else {
        // console.log("false is running");
        state.like = [...state.like, element];
        let updatedLike = state.like.map((e) =>
          e.id === element.id ? { ...e, liked: false } : e
        );
        state.like = updatedLike;
      }
    },
  },
});

export const { handelWishlist } = counterSlice.actions;
export default counterSlice.reducer;
