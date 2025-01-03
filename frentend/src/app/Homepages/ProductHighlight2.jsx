"use client";
import React from "react";

export function Product2Highlight() {
  const handleExplore = () => {
    // Handle explore action
  };

  return (
    <section className=" mt-10 pt-10">
      <div className="flex flex-col items-center">
        <div className="flex flex-col max-w-screen-xl w-full px-5">
          <div className=" gap-5 pb-11  lg:flex-row w-full">

                        {/* Text Section */}
            <div className="flex left-[70%]   flex-col relative  w-[423px] h-24  px-5  ">
              <div className="flex flex-col bg-white relative rounded-3xl px-10 p-8  pb-16 pt-18 shadow-xl max-w-full ">
                <h1 className="text-3xl font-semibold  font-basier text-black leading-[50px] mb-6 text-center lg:text-left lg:text-4xl">
                DNINE Fire High-Performance Cricket Shoes for Men
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
            {/* Image Section */}
            <div className="flex relative top-7  right-36 -z-10 flex-col w-full lg:w-[180%] max-w-full ">
              <img
                loading="lazy"
                src="https://via.placeholder.com/500x300"
                alt="DNINE Premium Kings Cricket Bowling Shoes"
                className="object-contain w-full rounded-3xl aspect-auto shadow-xl"
              />
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
