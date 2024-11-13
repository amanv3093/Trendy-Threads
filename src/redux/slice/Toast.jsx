// CartData.js
import { createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
const toastSlice = createSlice({
  name: "toast",
  initialState: {},
  reducers: {
    handelToast: (state, action) => {
      // alert(action.payload);
      let notificationKey = "uniqueKey";
      if (notification.openedKey === notificationKey) return;
      notification.destroy();
      // Close existing notifications
      let check = action.payload.messageType;
      if (check === "success") {
        notification.success({
          message: action.payload.message,
          // key: notificationKey, // set unique key to prevent duplicates
          placement: "top",
          duration: 1,
        });
      } else {
        notification.warning({
          message: action.payload.message,
          // key: notificationKey, // set unique key to prevent duplicates
          placement: "top",
          duration: 1,
        });
      }
    },
  },
});

export const { handelToast } = toastSlice.actions;
export default toastSlice.reducer;
