import React from "react";

const instructors = [
  {
    name: "John Doe",
    role: "Full Stack Developer",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Brown",
    role: "Data Scientist",
    photo: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    name: "Emily Johnson",
    role: "AI Specialist",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const TopInstructors = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Meet Our <span className="text-primary">Top Instructors</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Learn from the best in the industry. Our instructors are experts in
            their fields with years of experience.
          </p>
        </div>

        {/* Instructor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4">
                <img
                  src={instructor.photo}
                  alt={instructor.name}
                  className="w-full h-full object-cover rounded-full shadow-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {instructor.name}
              </h3>
              <p className="text-gray-500">{instructor.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;
