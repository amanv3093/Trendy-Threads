import React, { useState } from "react";
import "./Login.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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

function SignUp() {
  let [signUpEmail, setSignUpEmail] = useState("");
  let [signUpPassword, setSignUpPassword] = useState("");
  let [showPassword, setShowPassword] = useState(true);
  let product = useSelector((state) => state.productData.product);
  const auth = getAuth();

  let showPasswordFun = () => {
    setShowPassword((show) => !show);
    console.log(showPassword);
  };
  // Signup function ***************

  async function signUpFun(e) {
    e.preventDefault();
    console.log(signUpEmail);
    console.log(signUpPassword);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        signUpEmail,
        signUpPassword
      );
      console.log(result);
      alert("User created");
      const userData = { ...result.user.providerData[0] };
      console.log(userData);
      await setDoc(doc(db, "users", userData.uid), {
        userData: userData,
        storeData: product,
      });
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  }

  return (
    <section className="login signup">
      <div className="login-box">
        <h2 className="login-box-heading">Sign Up</h2>
        <form>
          <div className="email-input-box">
            <input
              className="email-input"
              type="email"
              placeholder="Email"
              onChange={(e) => setSignUpEmail(e.target.value)}
              value={signUpEmail}
            />
          </div>

          <div className="password-input-box">
            <input
              className="password-input"
              type={showPassword ? "password" : "text"}
              placeholder="Password"
              onChange={(e) => setSignUpPassword(e.target.value)}
              value={signUpPassword}
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
              Already have an account ?{" "}
              <NavLink to="/login">Login here</NavLink>
            </p>
          </div>

          <div className="login-btn-box">
            <button className="login-btn" onClick={signUpFun}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
