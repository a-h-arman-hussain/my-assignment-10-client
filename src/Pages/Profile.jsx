import React, { use, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Profile = () => {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Logout
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6366f1",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Logged out successfully!",
              timer: 1500,
              showConfirmButton: false,
            });
            navigate("/auth/login");
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Logout Failed!",
              text: err.message,
            });
          });
      }
    });
  };

  // Open Modal
  const handleEditProfile = () => {
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle form submit (temporary alert)
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Profile updated!",
      text: "Your changes have been saved.",
    });
    setIsModalOpen(false);
  };

  return (
    <section className="max-w-3xl mx-auto my-12 p-8 bg-white rounded-2xl shadow-lg">
      {/* Header */}
      <div className="flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 mb-4 flex items-center justify-center">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-6xl text-gray-400 font-bold">
              {user?.displayName?.[0] || "U"}
            </span>
          )}
        </div>
        <h2 className="text-2xl font-bold text-gray-800">
          {user?.displayName || "User"}
        </h2>
        <p className="text-gray-500">{user?.email || "No email"}</p>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={handleEditProfile}
          className="btn btn-primary px-6 py-2 rounded-lg hover:bg-indigo-600 transition"
        >
          Edit Profile
        </button>
        <button
          onClick={handleLogout}
          className="btn btn-outline px-6 py-2 rounded-lg hover:bg-red-500 hover:text-white transition"
        >
          Logout
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md relative">
            <h3 className="text-xl font-bold mb-4">Edit Profile</h3>
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  className="w-full border px-4 py-2 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  className="w-full border px-4 py-2 rounded-lg"
                  disabled
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Photo URL</label>
                <input
                  type="text"
                  defaultValue={user?.photoURL || ""}
                  className="w-full border px-4 py-2 rounded-lg"
                />
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="btn btn-outline px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;
