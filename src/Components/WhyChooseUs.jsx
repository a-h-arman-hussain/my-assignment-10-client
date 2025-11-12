import React from "react";
import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaUsers,
  FaCertificate,
} from "react-icons/fa";

const features = [
  {
    icon: <FaChalkboardTeacher size={28} className="text-primary" />,
    title: "Expert Instructors",
    description: "Learn from industry experts with years of experience.",
  },
  {
    icon: <FaLaptopCode size={28} className="text-primary" />,
    title: "Hands-on Projects",
    description: "Work on real-world projects to build practical skills.",
  },
  {
    icon: <FaUsers size={28} className="text-primary" />,
    title: "Community Support",
    description: "Join a vibrant community of learners and mentors.",
  },
  {
    icon: <FaCertificate size={28} className="text-primary" />,
    title: "Certified Courses",
    description: "Get certificates to showcase your skills and achievements.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800">
            Why Choose <span className="text-primary">EduLearn</span>?
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Discover the benefits of learning with us. We combine quality,
            expertise, and community to make your learning journey effective and
            enjoyable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
