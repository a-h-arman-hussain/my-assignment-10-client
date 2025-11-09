import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider"; // ✅ Auth context import

const Banner = () => {
  const { user } = useContext(AuthContext); // ✅ Get user

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-blue-100 to-indigo-200">
      {/* Floating shapes */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-purple-300 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-blue-300 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-24 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-6 max-w-lg">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-800 leading-tight">
            Learn <span className="text-primary">Smarter</span>,<br />
            Achieve <span className="text-secondary">Faster</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Unlock your potential with high-quality online courses. Join
            thousands of learners worldwide.
          </p>

          {/* ✅ Only show buttons if user is not logged in */}
          {!user && (
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6">
              <Link
                to="/courses"
                className="btn btn-primary text-lg px-8 hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                Explore Courses
              </Link>
              <Link
                to="/register"
                className="btn btn-outline btn-primary text-lg px-8 hover:bg-primary hover:text-white transition-colors duration-300 shadow-lg"
              >
                Join Now
              </Link>
            </div>
          )}
        </div>

        {/* Right Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/easy-online-learning-illustration-svg-download-png-1648374.png"
            alt="Learning Illustration"
            className="w-full max-w-md drop-shadow-2xl rounded-xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Banner;
