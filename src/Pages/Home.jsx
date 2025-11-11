import React from "react";
import Banner from "../Components/Banner";
import WhyChooseUs from "../Components/WhyChooseUs";
import TopInstructors from "../Components/TopInstructors";
import useCourses from "../Hooks/useCourses";
import CourseCard from "../Components/CourseCard";
import Loader from "../Components/Loader";
import ErrorPage from "./ErrorPage";

const Home = () => {
  const { latestCourse, loading, error } = useCourses();
  return (
    <div>
        <title>EduLearn | Home</title>
      <Banner></Banner>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-12">
          Popular <span className="text-primary">Courses</span>
        </h2>

        {/* Loading State */}
        {loading && <Loader />}

        {/* Error State */}
        {error && <ErrorPage></ErrorPage>}

        {/* Courses Grid */}
        {!loading && !error && latestCourse.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestCourse.map((course) => (
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
        {!loading && !error && latestCourse.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p>No courses available at the moment.</p>
          </div>
        )}
      </section>
      <WhyChooseUs></WhyChooseUs>
      <TopInstructors></TopInstructors>
    </div>
  );
};

export default Home;
