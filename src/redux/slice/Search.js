// CartData.js
import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "SearchData",
  initialState: { search: "t-shirt" },
  reducers: {
    handelSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { handelSearch } = searchSlice.actions;
export default searchSlice.reducer;
