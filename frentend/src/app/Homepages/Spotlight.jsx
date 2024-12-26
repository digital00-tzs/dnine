"use client";
import * as React from "react";

export function SpotlightProducts() {
  const products = [
    {
      image: "https://via.placeholder.com/300x400", // Replace with the green jersey image URL
      title: "DNINE Sports Fit",
    },
    {
      image: "https://via.placeholder.com/300x400", // Replace with the white shoes image URL
      title: "DNINE Sports Shoes",
    },
  ];

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 md:px-12 py-8 md:py-12 bg-white">
        {/* Heading Section */}
        <h2 className="text-2xl md:text-4xl font-oswald font-medium text-center text-[#1E1E1E]">
          <span className="text-red-600 font-oswald font-medium">Spotlight </span>
          Products Of The Month
        </h2>

        {/* Products Section */}
        <div className="mt-8 flex flex-wrap gap-6 justify-center items-center">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative group w-full sm:w-[280px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-auto h[600px] rounded-lg overflow-hidden shadow-md bg-gray-100"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-5    text-white text-center pt-2 pb-10">
                <h3 className=" text-lg  font-basier bottom-8  md:text-4xl font-semibold  ">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
