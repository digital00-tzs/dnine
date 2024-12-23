"use client";
import * as React from "react";

export function Spotlight2() {
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
      <div className="flex flex-col items-center justify-center px-6 md:px-6 py-8 md:py-6 bg-white">
        {/* Heading Section */}

        {/* Products Section */}
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative group w-full sm:w-[320px] md:w-[450px] lg:w-[600px] xl:w-[700px] h-[700px] rounded-lg overflow-hidden shadow-md bg-white"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[350px] sm:h-[500px] lg:h-[700px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
