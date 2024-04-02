import { Outlet } from "react-router-dom";
import "./App.css";
import CarouselData from "./Component/Details/Carousel";
import Details from "./Component/Details/Details";
import Home from "./Component/Home/Home";
import Men from "./Component/Men/Men";
import Navbar from "./Component/Navbar/Navbar";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { db } from "./Firebase/Firebase";

import { setDoc, doc } from "firebase/firestore";
function App() {
  let product = useSelector((state) => state.productData.product);
  let userLoginData = useSelector((state) => state.CheckLogin.userLoginData);
  let checklog = useSelector((state) => state.CheckLogin.log);
  useEffect(() => {
    console.log(userLoginData);
    try {
      if (checklog) {
        setDoc(doc(db, "users", userLoginData.userData.uid), {
          storeData: product,
          userData: userLoginData.userData,
        });
      } else {
        console.log("user NOt login yet");
      }
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }, [product]);
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
