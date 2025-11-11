import React from "react";
import useCourses from "../Hooks/useCourses";
import Loader from "../Components/Loader";
import ErrorPage from "./ErrorPage";
import CourseCard from "../Components/CourseCard";

const MyAddedCourse = () => {
  const { myCourse, loading, error } = useCourses();

  // Loading state
  if (loading) return <Loader />;

  // Error state
  if (error) return <ErrorPage />;

  return (
    <div className="max-w-6xl mx-auto my-10 px-4">
      <title>EduLearn | My Added Course</title>
      <h1 className="text-3xl font-bold text-center text-primary mb-8">
        My Added Courses
      </h1>

      {myCourse.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          You haven’t added any course yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {myCourse.map((course) => (
            <CourseCard key={course._id} course={course}></CourseCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAddedCourse;
