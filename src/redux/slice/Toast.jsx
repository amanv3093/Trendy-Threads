// CartData.js
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const toastSlice = createSlice({
  name: "toast",
  initialState: {},
  reducers: {
    handelToast: (state, action) => {
      alert(action.payload);
      // toast(action.payload, {
      //   position: "top-center",
      //   autoClose: 1000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
    },
  },
});

export const { handelToast } = toastSlice.actions;
export default toastSlice.reducer;
