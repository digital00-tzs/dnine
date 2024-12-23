import React from "react";

export default function OfferingSection() {
  return (
    <section className="relative bg-white">
      {/* Top border design */}
      <div className="absolute top-0 left-0 w-full h-[20px] bg-cover  "></div>

      <div className="container mx-auto px-4 py-12 lg:px-44 h-[580px] lg:flex items-center flex justify-between space-y-8 lg:space-y-0">
        {/* Text Content */}
        <div className=" text-center w-4/5 lg:text-left space-y-4">
          <h1 className="text-5xl font-semibold font-basier text-[#181818]">
            Let us send you an offering
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Odio eleifend. <br /> Lorem
            ipsum dolor sit amet consectetur. Odio eleifend.
          </p>
          <div className="flex items-center justify-center lg:justify-start mt-6">
            <input
              type="email"
              placeholder="Input your email address here"
              className="w-full max-w-md p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className=" text-white  py-3 rounded-r-md">
              <svg
                width="55"
                height="55"
                viewBox="0 0 58 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.179688"
                  width="58"
                  height="58"
                  rx="12"
                  fill="#0E0F25"
                />
                <path
                  d="M32.2293 20.4955C32.0479 20.3021 31.7971 20.1887 31.5321 20.1802C31.267 20.1717 31.0094 20.2688 30.816 20.4502V28.1795H19C18.7348 28.1795 18.4804 28.2849 18.2929 28.4724C18.1054 28.66 18 28.9143 18 29.1795C18 29.4448 18.1054 29.6991 18.2929 29.8866C18.4804 30.0742 18.7348 30.1795 19 30.1795H30.816V37.9089C31.0094 38.0903 31.267 38.1874 31.5321 38.1789C31.7971 38.1704 32.0479 38.0569 32.2293 37.8635L39.7293 29.8635C39.9031 29.6782 39.9999 29.4336 39.9999 29.1795C39.9999 28.9254 39.9031 28.6809 39.7293 28.4955L32.2293 20.4955Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center h-[110%] ">
          <img
            src="https://via.placeholder.com/150"
            alt="Offering illustration"
            className="w-full max-w-sm lg:max-w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
