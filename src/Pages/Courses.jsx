import React from "react";
import useCourses from "../Hooks/useCourses";
import CourseCard from "../Components/CourseCard";
import Loader from "../Components/Loader";

const Courses = () => {
  const { courses, loading, error } = useCourses();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-12">
        Our <span className="text-primary">Courses</span>
      </h2>

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center py-20">
          <Loader />
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-center py-20 text-red-500">
          <p>Oops! Something went wrong: {error}</p>
        </div>
      )}

      {/* Courses Grid */}
      {!loading && !error && courses.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course._id}
              className="transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      )}

      {/* No Courses */}
      {!loading && !error && courses.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <p>No courses available at the moment.</p>
        </div>
      )}
    </section>
  );
};

export default Courses;
