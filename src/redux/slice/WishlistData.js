import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "wishlistData",
  initialState: { like: [] },
  reducers: {
    handelWishlist: (state, action) => {
      const { type } = action.payload;

      if (type === "remove") {
        state.like = [];
        action.payload.like.map((e) => {
          state.like.push(e);
        });
        action.payload.like.id = true;
        console.log(state.like);
      } else {
        state.like.push(action.payload);
        console.log(state.like);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { handelWishlist } = counterSlice.actions;
export default counterSlice.reducer;
