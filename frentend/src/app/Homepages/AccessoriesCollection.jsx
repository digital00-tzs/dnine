import React from "react";

export default function AccessoriesCollection() {
  const products = [
    {
      id: 1,
      name: "Cricket Shoes",
      category: "Footwear",
      price: 5000,
      image: "https://via.placeholder.com/300x400",
    },
    {
      id: 2,
      name: "Cricket Kit Bag",
      category: "Accessories",
      price: 5000,
      image: "https://via.placeholder.com/300x400",
    },
    {
      id: 3,
      name: "Cricket Balls Set",
      category: "Equipment",
      price: 5000,
      image: "https://via.placeholder.com/300x400",
    },
  ];
  return (
    <section>
      <div className="w-auto mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-black font-oswald text-lg pl-40 pr-4 lg:text-3xl font-bold">
            <span className="text-red-600">Accessories</span>  Collection
          </h1>
        </div>

        {/* Main Flex Container */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - 3 Products */}
          <div className="lg:w-2/4  flex justify-center items-center ">
            <div className="grid  items-center  align-middle grid-cols-1 pt-16 pb-3 bg-white   md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 rounded-tr-[100px] rounded-lg shadow-2xl flex flex-col "
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 relative object-contain mb-4"
                  />
                  <h3 className="font-bold mb-1">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {product.category}
                  </p>
                  <div className="flex justify-between  gap-16 items-center">
                    <p className="font-bold">₹ {product.price}</p>
                    <button className="bg-navy-900 p-2 rounded-md">
                      <svg
                        width="56"
                        height="57"
                        viewBox="0 0 56 57"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_3276_2827)">
                          <rect
                            x="4"
                            y="4.04492"
                            width="48"
                            height="48"
                            rx="4"
                            fill="#0E0F25"
                            shape-rendering="crispEdges"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M37.6053 30.8491C37.5306 31.5251 36.9613 32.0357 36.2813 32.0357H26.2266C25.5813 32.0357 25.0293 31.5744 24.9146 30.9397L23.66 24.0357H36.968C37.3573 24.0357 37.7133 24.1957 37.9693 24.4877C38.2266 24.7797 38.3413 25.1544 38.2906 25.5397L37.6053 30.8491ZM39.972 22.7264C39.2133 21.8637 38.1186 21.3691 36.968 21.3691H23.1613C22.5586 19.0291 20.4453 17.3691 17.996 17.3691H16.0013C15.264 17.3691 14.668 17.9651 14.668 18.7024C14.668 19.4384 15.264 20.0357 16.0013 20.0357H17.996C19.2853 20.0357 20.3893 20.9557 20.6213 22.2237L22.292 31.4171C22.636 33.3211 24.292 34.7024 26.2266 34.7024H36.2813C38.3226 34.7024 40.0306 33.1717 40.2533 31.1664L40.936 25.8797C41.0826 24.7397 40.732 23.5917 39.972 22.7264ZM26.0012 36.0353C24.8972 36.0353 24.0012 36.9313 24.0012 38.0353C24.0012 39.1393 24.8972 40.0353 26.0012 40.0353C27.1052 40.0353 28.0012 39.1393 28.0012 38.0353C28.0012 36.9313 27.1052 36.0353 26.0012 36.0353ZM33.3345 38.0353C33.3345 36.9313 34.2305 36.0353 35.3345 36.0353C36.4385 36.0353 37.3345 36.9313 37.3345 38.0353C37.3345 39.1393 36.4385 40.0353 35.3345 40.0353C34.2305 40.0353 33.3345 39.1393 33.3345 38.0353Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_3276_2827"
                            x="0"
                            y="0.0449219"
                            width="56"
                            height="56"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_3276_2827"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_3276_2827"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-2/4">
            {/* Main Title */}
            <h2 className="text-7xl font-bold mt-10  text-red-600 italic mb-12">
              Be Cricket Ready
            </h2>
            <div className=" bg-white">
              <main className="container  mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6 ">
                    <div className="space-y-2  ">
                      <h1 className="text-4xl  font-bold tracking-tight">
                        Product Name
                      </h1>
                      <p className="text-2xl   text-muted-foreground">
                        Category
                      </p>
                    </div>
                    <div className="flex relative  justify-center">
                      <img
                        src="https://via.placeholder.com/400x300"
                        alt="Product Image"
                        width={500}
                        height={500}
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <p className="text-3xl font-bold">₹ 5000</p>
                    <button className="bg-[#0D0C22] text-white hover:bg-[#1D1C32] px-8 py-3 text-lg rounded-md">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
