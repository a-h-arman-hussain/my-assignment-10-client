import React, { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const AddCourse = () => {
  const { user } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      imageURL: e.target.imageURL.value,
      price: e.target.price.value,
      duration: e.target.duration.value,
      category: e.target.category.value,
      description: e.target.description.value,
      course_start_date: e.target.course_start_date.value,
      course_end_date: e.target.course_end_date.value,
      created_by: user?.email,
      created_ad: new Date(),
    };
    fetch("http://localhost:4000/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: `✅ ${formData.title}`,
          text: "Your course has been successfully added.",
          timer: 2000,
          showConfirmButton: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Add a New Course
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="label font-medium">Course Title</label>
          <input
            type="text"
            name="title"
            required
            placeholder="Full-Stack Web Development Bootcamp"
            className="input input-bordered w-full"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="label font-medium">Image URL</label>
          <input
            type="url"
            name="imageURL"
            required
            placeholder="https://example.com/course-image.jpg"
            className="input input-bordered w-full"
          />
        </div>

        {/* Price */}
        <div>
          <label className="label font-medium">Price (৳)</label>
          <input
            type="number"
            name="price"
            required
            placeholder="12000"
            className="input input-bordered w-full"
          />
        </div>

        {/* Duration */}
        <div>
          <label className="label font-medium">Duration</label>
          <input
            type="text"
            name="duration"
            required
            placeholder="12 weeks"
            className="input input-bordered w-full"
          />
        </div>

        {/* Category */}
        <div>
          <label className="label font-medium">Category</label>
          <input
            list="categoryOptions"
            name="category"
            placeholder="Select or add category"
            required
            className="input input-bordered w-full"
          />
          <datalist id="categoryOptions">
            <option value="Web Development" />
            <option value="Graphic Design" />
            <option value="Data Science" />
            <option value="Digital Marketing" />
            <option value="UI/UX Design" />
          </datalist>
        </div>

        {/* 📅 Start Date */}
        <div>
          <label className="label font-medium">Course Start Date</label>
          <input
            type="date"
            name="course_start_date"
            required
            className="input input-bordered w-full"
          />
        </div>

        {/* 📅 End Date */}
        <div>
          <label className="label font-medium">Course End Date</label>
          <input
            type="date"
            name="course_end_date"
            required
            className="input input-bordered w-full"
          />
        </div>

        {/* Description */}
        <div>
          <label className="label font-medium">Description</label>
          <textarea
            name="description"
            required
            placeholder="Briefly describe the course..."
            className="textarea textarea-bordered w-full"
            rows="4"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="btn btn-primary w-full text-lg font-semibold"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
