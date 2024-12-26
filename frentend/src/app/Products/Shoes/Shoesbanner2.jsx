import React from "react";

export default function Shoesbanner2() {
  return (
    <section>
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
          <img
            src="https://via.placeholder.com/300x400"
            alt="Shoesbanner"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          />
        </div>
    </section>
  );
}
