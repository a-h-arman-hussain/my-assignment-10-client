import React, { useState, use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const ForgetPassword = () => {
  const { forgotPassword } = use(AuthContext);
  const [email, setEmail] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire({
        icon: "warning",
        title: "Email Required!",
        text: "Please enter your email address.",
      });
      return;
    }

    forgotPassword(email)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Password Reset Email Sent!",
          text: "Check your inbox or spam folder to reset your password.",
          confirmButtonColor: "#6366f1",
        });
        setEmail("");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Something went wrong!",
          text: error.message,
        });
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-blue-100 to-indigo-200">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Forgot Password?
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Enter your registered email address and we’ll send you a password
          reset link.
        </p>

        <form onSubmit={handleForgotPassword} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300"
          >
            Send Reset Link
          </button>
        </form>

        <div className="text-center mt-6">
          <a
            href="/auth/login"
            className="text-indigo-600 hover:underline font-medium"
          >
            Back to Login
          </a>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
