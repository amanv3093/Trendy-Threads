import React from "react";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Men from "./Component/Men/Men";
import Home from "./Component/Home/Home";
import Details from "./Component/Details/Details";
import Login from "./Component/Login-SignUp/Login.jsx";
import SignUp from "./Component/Login-SignUp/SignUp.jsx";
import Wishlist from "./Component/WishList/wishlist.jsx";
import Cart from "./Component/Cart/Cart.jsx";
import ForgotPassword from "./Component/Login-SignUp/ForgotPassword.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Men /> },
      { path: "/product/:men", element: <Men /> },
      { path: "/product/:women", element: <Men /> },
      { path: "/product/:shoe", element: <Men /> },
      { path: "/product/:search", element: <Men /> },
      { path: "/details/:id", element: <Details /> },
      { path: "/login", element: <Login /> },
      { path: "/forgotpassword", element: <ForgotPassword /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
