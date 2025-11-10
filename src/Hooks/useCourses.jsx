import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [latestCourse, setLatestCourses] = useState([]);
  const [myCourse, setMyCourses] = useState([]);
  const [myEnrolledCourse, setMyEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user } = use(AuthContext);

  const handleError = (err) => {
    const msg =
      err?.response?.data?.message || err?.message || "Something went wrong!";
    setError(msg);
    console.error("Axios Error:", msg, err);
  };

  // all course
  useEffect(() => {
    setLoading(true);
    axios("https://my-assignment-10-server-1.onrender.com/courses")
      .then((data) => {
        setCourses(data.data);
        setError("");
      })
      .catch(handleError)
      .finally(() => setLoading(false));
  }, []);

  // latest course
  useEffect(() => {
    setLoading(true);
    axios("https://my-assignment-10-server-1.onrender.com/latest-course")
      .then((data) => {
        setLatestCourses(data.data);
        setError("");
      })
      .catch(handleError)
      .finally(() => setLoading(false));
  }, []);

  // my course
  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    axios(
      `https://my-assignment-10-server-1.onrender.com/my-course?email=${user.email}`
    )
      .then((data) => {
        setMyCourses(data.data);
        setError("");
      })
      .catch(handleError)
      .finally(() => setLoading(false));
  }, [user]);

  // my enrolled course get
  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    axios(
      `https://my-assignment-10-server-1.onrender.com/my-enrolled-courses?email=${user.email}`
    )
      .then((data) => {
        setMyEnrolledCourses(data.data);
        setError("");
      })
      .catch(handleError)
      .finally(() => setLoading(false));
  }, [user]);

  return {
    courses,
    latestCourse,
    myCourse,
    myEnrolledCourse,
    loading,
    error,
  };
};

export default useCourses;
