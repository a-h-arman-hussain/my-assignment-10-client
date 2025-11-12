import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const AuthLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-base-100">
      {/* Header */}
      <header className="border-b border-base-300 bg-base-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <Navbar />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200 ">
        <div className="max-w-md w-full px-4 sm:px-6 lg:px-8 py-12">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-base-300 bg-base-200 mt-10">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default AuthLayout;
