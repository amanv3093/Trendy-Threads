import React, { useState } from "react";
import "./Login.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app, { db } from "../../Firebase/Firebase.js";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { handelProduct } from "../../redux/slice/AllProduct.js";
import { handelLoginData, handelLogin } from "../../redux/slice/CheckLogin.js";
import { useNavigate } from "react-router-dom";

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

    if (!signUpEmail) {
      toast("Email is required.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: "email-required",
      });
      return;
    }

    if (!signUpPassword) {
      toast("Password is required.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: "password-required",
      });
      return;
    }

    if (!validateEmail(signUpEmail)) {
      toast("Please enter a valid email address.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: "invalid-email",
      });
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        signUpEmail,
        signUpPassword
      );
      console.log(result);
      toast("Account created successfully! You can now log in.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: "account-created",
      });

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
      toast("Email already exists", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: "email-exists",
      });
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

          <div className="create-account">
            <p>
              Already have an account? <NavLink to="/login">Login here</NavLink>
            </p>
          </div>

          <div className="login-btn-box">
            <ToastContainer />
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
