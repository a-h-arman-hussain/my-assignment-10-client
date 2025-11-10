import React, { use } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import Loader from "../Components/Loader";
import ErrorPage from "./ErrorPage";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const CourseDetails = () => {
  const data = useLoaderData();
  const courseDetails = data.result;
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  if (!courseDetails) return <ErrorPage message="Course not found" />;

  const handleEnrolled = () => {
    if (!user) {
      Swal.fire({
        title: "Login Required!",
        text: "Please log in to enroll in this course.",
        icon: "warning",
        confirmButtonColor: "#6366f1",
      });
      return;
    }

    const enrolledCourse = {
      ...courseDetails,
      enrolled_by: user?.email,
      enrolled_at: new Date().toISOString(),
    };

    fetch("https://my-assignment-10-server-1.onrender.com/enrolled-courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enrolledCourse),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "✅ Enrolled Successfully!",
          text: `${courseDetails.title} added to your list.`,
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#6366f1",
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Enrollment Failed!",
          text: "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonColor: "#ef4444",
        });
      });
  };

  return (
    <div className="max-w-5xl mx-auto my-12 bg-white rounded-3xl shadow-xl overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img
          src={courseDetails.imageURL}
          alt={courseDetails.title}
          className="w-full h-[400px] object-cover"
        />
        <span className="absolute top-5 left-5 bg-primary text-white px-4 py-1 rounded-full">
          {courseDetails.category}
        </span>
      </div>

      {/* Course Info */}
      <div className="p-8 space-y-4">
        <h1 className="text-3xl font-bold">{courseDetails.title}</h1>
        <p className="text-gray-600">{courseDetails.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <h3 className="font-semibold">Email</h3>
            <p>{courseDetails.created_by}</p>
          </div>
          <div>
            <h3 className="font-semibold">Duration</h3>
            <p>{courseDetails.duration} days</p>
          </div>
          <div>
            <h3 className="font-semibold">Start Date</h3>
            <p>{courseDetails.course_start_date}</p>
          </div>
          <div>
            <h3 className="font-semibold">End Date</h3>
            <p>{courseDetails.course_end_date}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
          <p className="text-lg font-semibold">Price: ৳{courseDetails.price}</p>
          <div>
            <Link
              to={`/update-course/${courseDetails._id}`}
              className="bg-primary text-white px-8 py-3 rounded-xl hover:bg-indigo-600 transition-all"
            >
              Update Course
            </Link>
            <button
              onClick={handleEnrolled}
              className="bg-primary text-white px-8 py-3 rounded-xl hover:bg-indigo-600 transition-all"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="p-4">
        <button
          onClick={() => navigate(-1)}
          className="btn border-primary text-primary"
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
