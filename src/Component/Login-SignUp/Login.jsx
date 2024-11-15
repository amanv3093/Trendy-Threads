import React, { useState } from "react";
import "./Login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app, { db } from "../../Firebase/Firebase.js";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { doc, getDoc } from "firebase/firestore";
import { handelLogin, handelLoginData } from "../../redux/slice/CheckLogin.js";
import { handelProduct } from "../../redux/slice/AllProduct.js";
import { handelToast } from "../../redux/slice/Toast.jsx";
function Login() {
  let [showPassword, setShowPassword] = useState(true);
  let [loginEmail, setLoginEmail] = useState("");
  let [loginPassword, setLoginPassword] = useState("");
  let checklog = useSelector((state) => state.CheckLogin.log);
  // let handelToastFun = useSelector((state) => state.handelToast.search);

  let dispatch = useDispatch();
  const auth = getAuth();
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

  // Login function
  async function LoginFun(e) {
    e.preventDefault();

    try {
      const result = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );

      const userData = { ...result.user.providerData[0] };
      const userDocRef = doc(db, "users", userData.uid);
      const docSnap = await getDoc(userDocRef);
      console.log(userData);
      dispatch(handelLogin(true));

      if (docSnap.exists()) {
        dispatch(
          handelToast({
            message: "Login successful.",
            messageType: "success",
          })
        );

        const userDataFromFirestore = docSnap.data();
        dispatch(handelLoginData(userDataFromFirestore));

        let dataLog = userDataFromFirestore.storeData;
        dispatch(handelProduct({ typeItem: "loginData", dataLog }));
        navigate("/");

        localStorage.setItem("userEmail", loginEmail);
        localStorage.setItem("userPassword", loginPassword);
      }
    } catch (err) {
      dispatch(
        handelToast({
          message: "Invalid email or password.",
          messageType: "warning",
        })
      );
    }
  }

  return (
    <section className="login">
      <div className="login-box">
        <h2 className="login-box-heading">Login</h2>
        <form onSubmit={LoginFun}>
          <div className="email-input-box">
            <input
              className="email-input"
              type="email"
              placeholder="Email"
              onChange={(e) => setLoginEmail(e.target.value)}
              value={loginEmail}
              required
            />
          </div>

          <div className="password-input-box">
            <input
              className="password-input"
              type={showPassword ? "password" : "text"}
              placeholder="Password"
              onChange={(e) => setLoginPassword(e.target.value)}
              value={loginPassword}
              required
            />
            <span
              onClick={showPasswordFun}
              className="material-symbols-outlined visibility"
            >
              {showPassword ? "visibility" : "visibility_off"}
            </span>
          </div>
          <div className="forgotPassword">
            <p>
              <NavLink to="/forgotpassword">Forgot Password?</NavLink>
            </p>
          </div>

          <div className="login-btn-box">
            <button className="login-btn" type="submit">
              Login
            </button>
          </div>
          <div className="create-account">
            <p>
              Don't have an account?{" "}
              <NavLink to="/signup">Sign up here</NavLink>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
