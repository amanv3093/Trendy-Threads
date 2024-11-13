// ForgotPassword.js
import React, { useState } from "react";
import { auth } from "../../Firebase/Firebase.js"; // Import Firebase auth
import { sendPasswordResetEmail } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { handelToast } from "../../redux/slice/Toast.jsx";
import { useDispatch } from "react-redux";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  let dispatch = useDispatch();
  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);

      dispatch(
        handelToast({
          message: "Password reset email sent!.",
          messageType: "success",
        })
      );
    } catch (error) {
      dispatch(
        handelToast({
          message: "Failed to send reset email. Please try again.",
          messageType: "error",
        })
      );
    }
  };

  return (
    <section className="login">
      <div className="login-box">
        <h2 className="login-box-heading">Login</h2>
        <form onSubmit={handleResetPassword}>
          <div className="email-input-box">
            <input
              className="email-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="login-btn-box">
            <button className="login-btn" type="submit">
              Send Reset Email
            </button>
          </div>
          <div className="create-account">
            <p>
              Back to Login? <NavLink to="/login">Login here</NavLink>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
