import React from "react";

export default function Collection() {
  const data = [
    {
      image: "https://via.placeholder.com/300",
      title: "SHOES",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "NUTRITION",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "ACCESSORIES",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "APPAREL",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "OTHERS",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <h2 className="text-3xl font-bold font-oswald  text-center mb-8 ">
        <span className="text-red-600">Explore</span> Our Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {data.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-28 left-1/2 text-4xl transform -translate-x-1/2 bg-slate-100   bg-opacity-5 text-white font-basier  font-medium px-4 py-2">
              {item.title}
            </button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
        {data.slice(3).map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />

            <button className="absolute bottom-28 left-1/2 transform  -translate-x-1/2 bg-slate-200 text-4xl   bg-opacity-5 text-white font-basier font-medium px-4 py-2">
              {item.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
