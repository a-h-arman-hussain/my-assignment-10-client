import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [latestCourse, setLatestCourses] = useState([]);
  const [myCourse, setMyCourses] = useState([]);
  const [myEnrolledCourse, setMyEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = use(AuthContext);
  // all course
  useEffect(() => {
    setLoading(true);
    axios("http://localhost:4000/courses")
      .then((data) => setCourses(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  // latest course
  useEffect(() => {
    setLoading(true);
    axios("http://localhost:4000/latest-course")
      .then((data) => setLatestCourses(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  // my course
  useEffect(() => {
    if (!user || !user.email) return;
    setLoading(true);
    axios(`http://localhost:4000/my-course?email=${user.email}`)
      .then((data) => setMyCourses(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [user]);

  // my enrolled course get
  useEffect(() => {
    setLoading(true);
    axios(`http://localhost:4000/my-enrolled-courses?email=${user.email}`)
      .then((data) => setMyEnrolledCourses(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [user]);
  return { courses, latestCourse, myCourse, myEnrolledCourse, loading, error };
};

export default useCourses;
