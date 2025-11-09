import React, { use } from "react";
import { Link, NavLink } from "react-router"; // ✅ react-router-dom
import { AuthContext } from "../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
// import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = use(AuthContext) || {};

  const handleLogout = () => {
    logOut?.();
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold border-b-2 border-primary"
              : "hover:text-primary transition"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold border-b-2 border-primary"
              : "hover:text-primary transition"
          }
        >
          Courses
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold border-b-2 border-primary"
              : "hover:text-primary transition"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        {user && (
          <NavLink
            to="/my-enrolled-course"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-semibold border-b-2 border-primary"
                : "hover:text-primary transition"
            }
          >
            My Enrolled Course
          </NavLink>
        )}
      </li>
      <li>
        {user && (
          <NavLink
            to="/add-course"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-semibold border-b-2 border-primary"
                : "hover:text-primary transition"
            }
          >
            Add Course
          </NavLink>
        )}
      </li>
      <li>
        {user && (
          <NavLink
            to="/my-added-course"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-semibold border-b-2 border-primary"
                : "hover:text-primary transition"
            }
          >
            My added course
          </NavLink>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4 md:px-8">
      {/* LEFT: Logo & Mobile Menu */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-52 space-y-1"
          >
            {navLinks}
          </ul>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-primary tracking-wide"
        >
          EduLearn
        </Link>
      </div>

      {/* MIDDLE: Nav Links (Desktop Only) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 font-medium">{navLinks}</ul>
      </div>

      {/* RIGHT: User / Login */}
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar tooltip tooltip-left"
              data-tip={user.displayName || "Profile"}
            >
              <div className="w-10 rounded-full border-2 border-primary">
                {user.photoURL ? (
                  <img src={user.photoURL} alt="user" />
                ) : (
                  <FaUserCircle className="text-3xl text-gray-500 mx-auto" />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="px-2 py-1 text-sm text-gray-600">{user.email}</li>
              <li>
                <button
                  onClick={handleLogout}
                  className="text-error hover:bg-error hover:text-white rounded-md"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/auth/login" className="btn btn-primary rounded-full px-5">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
