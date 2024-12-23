import React from "react";

const RunnerAd = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-6">
      {/* Left Side: Image with Overlay */}
      <div className="relative w-full md:w-2/3">
        <img
          src="https://via.placeholder.com/1200x600" // Replace with actual image
          alt="Runner Ad"
          className="w-full rounded-lg"
        />
        <div className="absolute top-10 left-10">
          <h1 className="text-4xl font-bold text-white leading-tight">
            i am <br />
            a runner
          </h1>
          <p className="text-sm text-white mt-2">
            adizero adios boost™ <br />
            Every run takes you closer to your goals.
          </p>
        </div>
      </div>

      {/* Right Side: Product Highlight */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
        <h2 className="text-xl font-bold mb-4">
          DNINE Fire High-Performance Cricket Shoes for Men
        </h2>
        <button className="px-6 py-2 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default RunnerAd;
