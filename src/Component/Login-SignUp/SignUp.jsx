import React, { useState } from "react";
import "./Login.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app, { db } from "../../Firebase/Firebase.js";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { handelProduct } from "../../redux/slice/AllProduct.js";
import { handelLoginData, handelLogin } from "../../redux/slice/CheckLogin.js";
import { useNavigate } from "react-router-dom";
import { handelToast } from "../../redux/slice/Toast.jsx";

function SignUp() {
  let [signUpEmail, setSignUpEmail] = useState("");
  let [signUpPassword, setSignUpPassword] = useState("");
  let [showPassword, setShowPassword] = useState(true);
  let product = useSelector((state) => state.productData.product);
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let showPasswordFun = () => {
    setShowPassword((show) => !show);
    console.log(showPassword);
  };

  // Email validation function
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Signup function ***************
  async function signUpFun(e) {
    e.preventDefault();

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        signUpEmail,
        signUpPassword
      );

      dispatch(
        handelToast({
          message: "Account created successfully! You can now log in.",
          messageType: "success",
        })
      );
      const userData = { ...result.user.providerData[0] };
      console.log(userData);
      console.log(product);
      await setDoc(doc(db, "users", userData.uid), {
        userData: userData,
        storeData: product,
      });

      localStorage.setItem("userEmail", signUpEmail);
      localStorage.setItem("userPassword", signUpPassword);

      const userData1 = { ...result.user.providerData[0] };
      const userDocRef = doc(db, "users", userData1.uid);
      const docSnap = await getDoc(userDocRef);

      dispatch(handelLogin(true));

      if (docSnap.exists()) {
        const userDataFromFirestore = docSnap.data();
        dispatch(handelLoginData(userDataFromFirestore));

        let dataLog = userDataFromFirestore.storeData;
        dispatch(handelProduct({ typeItem: "loginData", dataLog }));
        navigate("/");
      }
    } catch (err) {
      dispatch(
        handelToast({
          message: "Email already exists.",
          messageType: "warning",
        })
      );
    }
  }

  return (
    <section className="login signup">
      <div className="login-box">
        <h2 className="login-box-heading">Sign Up</h2>
        <form onSubmit={signUpFun}>
          <div className="email-input-box">
            <input
              className="email-input"
              type="email"
              placeholder="Email"
              onChange={(e) => setSignUpEmail(e.target.value)}
              value={signUpEmail}
              required
            />
          </div>

          <div className="password-input-box">
            <input
              className="password-input"
              type={showPassword ? "password" : "text"}
              placeholder="Password"
              onChange={(e) => setSignUpPassword(e.target.value)}
              value={signUpPassword}
              required
            />
            <span
              onClick={showPasswordFun}
              className="material-symbols-outlined visibility"
            >
              {showPassword ? "visibility" : "visibility_off"}
            </span>
          </div>

          <div className="login-btn-box">
            <button className="login-btn" type="submit">
              Sign Up
            </button>
          </div>
          <div className="create-account">
            <p>
              Already have an account? <NavLink to="/login">Login here</NavLink>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
