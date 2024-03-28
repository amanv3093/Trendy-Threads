import React, { useState } from "react";


export const ItemContext = React.createContext(0);

export const UseItem = () => {
  return React.useContext(ItemContext);
};

export const ItemContextProvider = (props) => {
  let [wishListProduct , setWishListProduct] = useState([]);

  return (
    <ItemContext.Provider value={{wishListProduct , setWishListProduct}}>
      {props.children}
    </ItemContext.Provider>
  );
};

