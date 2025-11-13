import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Spinning Gradient Circle */}
      <div className="relative">
        <div className="w-20 h-20 rounded-full border-t-4 border-b-4 border-transparent animate-spin border-t-primary border-b-secondary"></div>

        {/* Glowing Center Dot */}
        <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
      </div>

      {/* Text Below */}
      <h2 className="mt-6 text-xl font-semibold text-gray-700 animate-pulse tracking-wide">
        Loading <span className="text-primary">Please Wait...</span>
      </h2>
    </div>
  );
};

export default Loader;
