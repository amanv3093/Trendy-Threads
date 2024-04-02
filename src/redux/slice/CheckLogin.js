import { createSlice } from "@reduxjs/toolkit";

const CheckLoginSlice = createSlice({
  name: "CheckLogin",
  initialState: { log: false, userLoginData: {} },
  reducers: {
    handelLogin: (state, action) => {
      console.log(action.payload);
      state.log = action.payload;
    },
    handelLoginData: (state, action) => {
      state.userLoginData = action.payload;
      console.log("After login Data", state.userLoginData);
    },
  },
});

export const { handelLogin, handelLoginData } = CheckLoginSlice.actions;
export default CheckLoginSlice.reducer;
