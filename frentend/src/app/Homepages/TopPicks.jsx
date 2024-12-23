"use client";
import * as React from "react";

export function TopPicks() {
  const products = [
    {
      image: "https://via.placeholder.com/300x400", // Replace with the product image URL
      title: "Product 1",
    },
    {
      image: "https://via.placeholder.com/300x400", // Replace with the product image URL
      title: "Product 2",
    },
    {
      image: "https://via.placeholder.com/300x400", // Replace with the product image URL
      title: "Product 3",
    },
    {
      image: "https://via.placeholder.com/300x400", // Replace with the product image URL
      title: "Product 4",
    },
  ];

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-8 py-12 bg-white">
        {/* Heading Section */}
        <h2 className="text-xl md:text-3xl  font-bold font-oswald text-center text-gray-800">
          <span className="text-red-600  font-oswald font-bold">Deepak's </span>
          Top Picks
        </h2>

        {/* Products Section */}
        <div className="mt-8 flex flex-col md:flex-row gap-8 justify-center items-center">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative group w-80 h-[450px] rounded-lg overflow-hidden shadow-lg bg-gray-100 hover:w-96 transition-all duration-300 transform origin-left center"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay Button */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-opacity-80 text-white text-center px-8 py-3 rounded-lg border-2 border-white cursor-pointer hover:bg-opacity-90 hover:shadow-lg transition ease-in-out duration-200">
                Shop Now
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
