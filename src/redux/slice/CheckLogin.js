import { createSlice } from "@reduxjs/toolkit";

const CheckLoginSlice = createSlice({
  name: "CheckLogin",
  initialState: { log: false, userLoginData: null },
  reducers: {
    handelLogin: (state, action) => {
      console.log(action.payload);
      state.log = action.payload;
    },
    handelLoginData: (state, action) => {
      console.log(action.payload);
      state.userLoginData = action.payload;
    },
  },
});

export const { handelLogin, handelLoginData } = CheckLoginSlice.actions;
export default CheckLoginSlice.reducer;
