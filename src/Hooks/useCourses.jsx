import axios from "axios";
import React, { useEffect, useState } from "react";

const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("http://localhost:4000/courses")
      .then((data) => setCourses(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { courses, loading, error };
};

export default useCourses;
