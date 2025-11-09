import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import Courses from "../Pages/Courses";
import Dashboard from "../Pages/Dashboard";
import PrivetRoute from "../Provider/PrivateRoute";
import MyEnrolledCourse from "../Pages/MyEnrolledCourse";
import AddCourse from "../Pages/AddCourse";
import MyAddedCourse from "../Pages/MyAddedCourse";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "/courses",
        Component: Courses,
        loader: () => fetch("http://localhost:4000/courses"),
      },
      {
        path: "/dashboard",
        Component: Dashboard,
      },
      {
        path: "/my-enrolled-course",
        element: (
          <PrivetRoute>
            <MyEnrolledCourse></MyEnrolledCourse>
          </PrivetRoute>
        ),
      },
      {
        path: "/add-course",
        element: (
          <PrivetRoute>
            <AddCourse></AddCourse>
          </PrivetRoute>
        ),
      },
      {
        path: "/my-added-course",
        element: (
          <PrivetRoute>
            <MyAddedCourse></MyAddedCourse>
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      { path: "/auth/login", Component: Login },
      { path: "/auth/register", Component: Register },
    ],
  },
]);

export default router;
