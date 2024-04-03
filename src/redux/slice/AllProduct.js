import { createSlice } from "@reduxjs/toolkit";
import data from "../../Assets/men";
import { db } from "../../Firebase/Firebase";

import { setDoc, doc } from "firebase/firestore";
const ProductSlice = createSlice({
  name: "AllProductData",
  initialState: { product: data },
  reducers: {
    handelProduct: (state, action) => {
      // const stateFromFirstSlice = selectStateFromFirstSlice(state);
      // console.log(stateFromFirstSlice);
      console.log(state.product);
      let element = { ...action.payload };

      console.log(element);

      // if (
      //   element.typeItem === "itemAdded" ||
      //   action.payload.typeItem === "remove" ||
      //   action.payload.typeItem === "moveToBag" ||
      //   action.payload.typeItem === "moveWishlist" ||
      //   action.payload.typeItem === "setSelectSizeFun" ||
      //   action.payload.typeItem === "setSizeFun"
      // ) {
      //   state.product = element.updatedProductData;
      //   try {
      //     console.log("add in database");
      //     console.log("id", element.userLoginData.userData.uid);
      //     console.log("store", element.updatedProductData);
      //     console.log("userData", element.userLoginData.userData);

      //       setDoc(doc(db, "users", element.userLoginData.userData.uid), {
      //       storeData: state.product,
      //       userData: element.userLoginData.userData,
      //     });
      //   } catch (error) {
      //     console.error("Error adding document: ", error);
      //   }
      // }

      if (action.payload.typeItem === "loginData") {
        state.product = [];
        state.product = element.dataLog;
        // element.userLoginData
      } else if (action.payload.typeItem === "itemAdded") {
        state.product = element.updatedProductData;
        console.log("itemAdded", state.product);
      } else if (action.payload.typeItem === "remove") {
        state.product = element.updatedProductData;
      } else if (action.payload.typeItem === "moveToBag") {
        state.product = element.updatedProductData;
      } else if (action.payload.typeItem === "moveWishlist") {
        state.product = element.updatedProductData;
      } else if (action.payload.typeItem === "setSelectSizeFun") {
        state.product = element.updatedProductData;
      } else if (action.payload.typeItem === "setSizeFun") {
        state.product = element.updatedProductData;
      } else {
        if (!element.liked) {
          const updatedMenData = state.product.map((item) =>
            item.id === element.id ? { ...item, liked: true } : item
          );
          state.product = [...updatedMenData];
        } else {
          const updatedMenData = state.product.map((item) =>
            item.id === element.id ? { ...item, liked: false } : item
          );

          state.product = [...updatedMenData];
          console.log(updatedMenData);
        }
      }
    },
  },
});

export const { handelProduct } = ProductSlice.actions;
export default ProductSlice.reducer;

// extraReducers: (builder) => {
//   builder.addCase(handelLoginData, (state, action) => {
//     if (action.payload.typeItem === "loginData") {
//       state.product = action.payload.dataLog;
//       console.log(state.product);
//     }
//   });
// },
