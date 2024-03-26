import React from "react";


export const ItemContext = React.createContext(0);

export const UseItem = () => {
  return React.useContext(ItemContext);
};

export const ItemContextProvider = (props) => {
  let [total, setTotal] = React.useState(0);
  let [count, setCount] = React.useState(0);

  return (
    <ItemContext.Provider value={{ total, setTotal, count, setCount }}>
      {props.children}
    </ItemContext.Provider>
  );
};

