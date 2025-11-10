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
import CourseDetails from "../Pages/CourseDetails";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/courses",
        Component: Courses,
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
      {
        path: "/course-details/:id",
        element: (
          <PrivetRoute>
            <CourseDetails></CourseDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/courses/${params.id}`),
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
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

export default router;
