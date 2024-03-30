import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "wishlistData",
  initialState: { like: [] },
  reducers: {
    handelWishlist: (state, action) => {
      const { type, element } = action.payload;
      console.log(action.payload);
      // const updatedLike = action.payload.like.filter(
      //   (e) => e.id !== action.payload.id
      // );
      // let element = { ...action.payload };
      // console.log(element);

      // state.like.push(action.payload);

      if (type === "remove") {
        const updatedLike = state.like.filter((e) => element.id !== e.id);
        state.like = [...updatedLike];
      } else {
        state.like = [...state.like, element];
        console.log(state.like);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { handelWishlist } = counterSlice.actions;
export default counterSlice.reducer;
