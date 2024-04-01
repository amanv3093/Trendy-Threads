import React, { useEffect, useState } from "react";
import "./Login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app, { db } from "../../Firebase/Firebase.js";
import { NavLink } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { handelLogin, handelLoginData } from "../../redux/slice/CheckLogin.js";
import { handelProduct } from "../../redux/slice/AllProduct.js";
function Login() {
  // let [loginPageShow , setLoginPageShow] = useState(true);
  let product = useSelector((state) => state.productData.product);
  let [showPassword, setShowPassword] = useState(true);
  let [loginEmail, setLoginEmail] = useState("");
  let [loginPassword, setLoginPassword] = useState("");

  // let {CheckPage , setCheckPage} = UseItem();
  //   let { loginSuccessful, setLoginSuccessful } = useLoginContext;
  //   setLoginSuccessful(true);
  //   console.log(loginSuccessful);
  let checklog = useSelector((state) => state.CheckLogin.log);
  let dispatch = useDispatch();
  const auth = getAuth();

  let showPasswordFun = () => {
    setShowPassword((show) => !show);
    // console.log(showPassword);
  };

  // Login function   Signed in***************
  async function LoginFun(e) {
    e.preventDefault();
    console.log(checklog);
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );

      const userData = { ...result.user.providerData[0] };
      const userDocRef = doc(db, "users", userData.uid);
      const docSnap = await getDoc(userDocRef);
      //   dispatch(handelProduct(true));

      dispatch(handelLogin(true));

      if (docSnap.exists()) {
        const userDataFromFirestore = docSnap.data();
        dispatch(handelLoginData(userDataFromFirestore));
        dispatch(handelProduct(userDataFromFirestore.storeData));
        console.log(userDataFromFirestore);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      dispatch(handelLogin(false));
    }
  }

  return (
    <>
      <section className="login">
        <div className="login-box">
          <h2 className="login-box-heading">Login</h2>
          <form>
            <div className="email-input-box">
              <input
                className="email-input"
                type="email"
                placeholder="Email"
                onChange={(e) => setLoginEmail(e.target.value)}
                value={loginEmail}
              />
            </div>

            <div className="password-input-box">
              <input
                className="password-input"
                type={showPassword ? "password" : "text"}
                placeholder="Password"
                onChange={(e) => setLoginPassword(e.target.value)}
                value={loginPassword}
              />
              <span
                onClick={showPasswordFun}
                class="material-symbols-outlined visibility"
              >
                {showPassword ? "visibility" : "visibility_off"}
              </span>
            </div>

            <div className="create-account">
              <p>
                Create an account ? <NavLink to="/signup">Click here</NavLink>
              </p>
            </div>

            <div className="login-btn-box">
              <button className="login-btn" onClick={LoginFun}>
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
