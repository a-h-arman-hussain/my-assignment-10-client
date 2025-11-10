import React from "react";
import { useNavigate, useLoaderData } from "react-router";
import useCourses from "../Hooks/useCourses";
import Loader from "../Components/Loader";
import ErrorPage from "./ErrorPage";

const CourseDetails = () => {
  const data = useLoaderData();
  const courseDetail = data.result;
  console.log(courseDetail);
  const navigate = useNavigate();
  const { loading, error } = useCourses();

  if (loading) return <Loader />;

  if (error) return <ErrorPage />;

  return (
    <div className="max-w-5xl mx-auto my-12 bg-white rounded-3xl shadow-xl overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img
          src={courseDetail.imageURL}
          alt="title"
          className="w-full h-[400px] object-cover"
        />
        <span className="absolute top-5 left-5 bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full">
          {courseDetail.category}
        </span>
      </div>

      {/* Course Info */}
      <div className="p-8 space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">{courseDetail.title}</h1>
        <p className="text-gray-600 leading-relaxed text-justify">
          {courseDetail.description}
        </p>

        {/* Duration and Dates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-gray-700">
          <div>
            <h3 className="font-semibold text-primary">Email</h3>
            <p>{courseDetail.created_by}</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">Duration</h3>
            <p>{courseDetail.duration}</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">Start Date</h3>
            <p>{courseDetail.course_start_date}</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">End Date</h3>
            <p>{courseDetail.course_end_date}</p>
          </div>
        </div>

        {/* Price & Enroll Button */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
          <p className="text-2xl font-bold text-gray-800">
            Price: <span className="text-primary">৳{courseDetail.price}</span>
          </p>

          <button className="bg-gradient-to-r from-primary to-indigo-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300">
            Enroll Now
          </button>
        </div>
      </div>
      {/* Back Button */}
      <div className="p-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-semibold transition-colors duration-300"
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
