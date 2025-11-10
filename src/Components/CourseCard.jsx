import React from "react";
import { Link } from "react-router";

const CourseCard = ({ course }) => {
  return (
    <div className="max-w-sm bg-white rounded-3xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col">
      {/* Course Image */}
      <div className="relative">
        <img
          src={course.imageURL}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {course.category}
        </span>
      </div>

      {/* Course Info */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 truncate">
          {course.title}
        </h2>

        {/* Duration & Price */}
        <div className="flex justify-between items-center text-gray-600 mt-2">
          <span className="text-sm">{course.duration}</span>
          <span className="text-sm font-semibold">৳{course.price}</span>
        </div>

        {/* Dates */}
        <div className="text-xs text-gray-400 mt-1">
          {course.course_start_date} - {course.course_end_date}
        </div>

        {/* Enroll Button */}
        <Link
          to={`/course-details/${course._id}`}
          className="mt-auto w-full bg-primary text-white text-center py-2 rounded-xl hover:bg-primary/90 transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
