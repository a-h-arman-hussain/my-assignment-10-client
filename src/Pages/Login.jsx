import React, { use, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router"; // ✅ react-router-dom
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { login, loginWithGoogle } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
    
  const from = location.state?.from?.pathname || "/";

  //  Email/Password login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Welcome back!",
          text: `${result.user.displayName} logged in successfully.`,
          timer: 2000,
          showConfirmButton: false,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      });
  };

  //  Google login
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Logged in with Google!",
          text: `Welcome, ${result.user.displayName}`,
          timer: 2000,
          showConfirmButton: false,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200 flex items-center justify-center px-4">
      <title>EduLearn | Login</title>
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Please log in to continue learning
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="label">
              <span className="label-text font-medium">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="••••••••"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary pr-10"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-500 hover:text-primary z-10"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="text-right mt-1">
              <Link
                to="/auth/forget-password"
                type="button"
                className="text-sm text-primary hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          <button className="btn btn-primary w-full text-lg font-semibold">
            Login
          </button>
        </form>

        <div className="divider my-6 text-gray-400">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full flex items-center justify-center gap-2 hover:bg-blue-50"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        <p className="text-center text-sm text-gray-600 mt-8">
          Don’t have an account?{" "}
          <Link
            to="/auth/register"
            className="text-primary font-semibold hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
