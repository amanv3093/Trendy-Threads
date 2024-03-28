import React, { useState } from "react";


export const ItemContext = React.createContext(0);

export const UseItem = () => {
  return React.useContext(ItemContext);
};

export const ItemContextProvider = (props) => {
  

  return (
    <ItemContext.Provider value={{ }}>
      {props.children}
    </ItemContext.Provider>
  );
};

