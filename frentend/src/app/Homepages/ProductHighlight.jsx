"use client";
import React from "react";

export function ProductHighlight() {
  const handleExplore = () => {
    // Handle explore action
  };

  return (
    <section>
      <div className="flex flex-col items-center">
        <div className="flex flex-col max-w-screen-xl w-full px-5">
          <div className=" gap-5 pb-11  lg:flex-row w-full">
            {/* Image Section */}
            <div className="flex relative left-[164px] flex-col w-[98%]  max-w-full ">
              <img
                loading="lazy"
                src="https://via.placeholder.com/500x300"
                alt="DNINE Premium Kings Cricket Bowling Shoes"
                className="object-contain w-full rounded-3xl aspect-auto shadow-xl"
              />
            </div>

            {/* Text Section */}
            <div className="flex flex-col relative right-10  bottom-72 w-full h-24 lg:w-[36%] px-5  lg:px-0">
              <div className="flex flex-col bg-white relative rounded-3xl  p-8  pb-24 pt-16 px-16 shadow-xl max-w-full mx-auto">
                <h1 className="text-3xl font-semibold  font-basier text-black leading-[50px] mb-6 text-center lg:text-left lg:text-4xl">
                  DNINE Premium
                  Kings Cricket
                  Bowling Shoes for 
                  Men
                </h1>
                <button
                  onClick={handleExplore}
                  className="  flex items-center w-40 px-4 py-3 justify-center  mt-6 bg-slate-900 hover:bg-slate-700 transition font-medium text-white rounded-xl  "
                  aria-label="Explore product details"
                >
                  EXPLORE NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
