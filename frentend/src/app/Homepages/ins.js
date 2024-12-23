"use client";
import * as React from "react";

export function TopSellingProducts() {
  const [currentIndex, setCurrentIndex] = React.useState(0); // State for the current index

  const products = [
    {
      image: "https://via.placeholder.com/150",
      label: "Premium",
      price: "1,176.00",
      originalPrice: "1,899.00",
      discount: "-35%",
    },
    {
      image: "https://via.placeholder.com/150",
      label: "New Arrivals",
      price: "1,176.00",
      originalPrice: "1,899.00",
      discount: "-35%",
    },
    {
      image: "https://via.placeholder.com/150",
      label: "Limited Edition",
      price: "1,250.00",
      originalPrice: "1,999.00",
      discount: "-37%",
    },
    {
      image: "https://via.placeholder.com/150",
      label: "Limited Edition",
      price: "1,050.00",
      originalPrice: "1,999.00",
      discount: "-37%",
    },
  ];

  const handleNextButtonClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrevButtonClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleAddToCart = (product) => {
    console.log("Added to Cart:", product);
    // Add your "Add to Cart" logic here
  };

  return (
    <section>
      <div className="flex flex-col justify-center px-32 py-20 max-md:px-5">
        <div className="flex flex-col justify-center w-full max-md:max-w-full">
          <div className="flex relative gap-8 items-start w-full min-h-[50px] max-md:max-w-full">
            <div className="z-0 flex-1 shrink my-auto text-4xl font-semibold tracking-wider leading-snug text-center basis-0 text-stone-900 max-md:max-w-full">
              <span className="font-medium text-rose-600">Top-Selling</span>
              <span className="font-medium"> Products</span>
            </div>
            <div className="flex absolute right-0 z-0 gap-3 items-center self-start bottom-[9px]">
              <button
                onClick={handlePrevButtonClick}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Prev
              </button>
              <button
                onClick={handleNextButtonClick}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Next
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-8 max-lg:grid-cols-1 max-lg:gap-4">
            {products.slice(0, 3).map((product, index) => (
              <div
                key={index}
                className="group relative flex overflow-hidden flex-col bg-white rounded-xl min-w-[240px] w-[432px] max-md:w-full shadow-lg hover:shadow-2xl transition"
              >
                <div className="flex flex-col w-full">
                  <div className="flex relative flex-col justify-between pb-96 w-full rounded-xl min-h-[516px] shadow-[0px_-3px_30px_rgba(217,217,217,1)] max-md:pb-24">
                    <img
                      loading="lazy"
                      src={product.image}
                      alt="Product image"
                      className="object-cover absolute inset-0 size-full"
                    />
                    <div className="relative px-3 py-2 mt-12 text-base font-medium text-black whitespace-nowrap bg-yellow-400 rounded-none max-md:mt-10">
                      {product.label}
                    </div>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden group-hover:block px-6 py-2 bg-rose-600 text-white rounded-lg shadow-md hover:bg-rose-500 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="flex flex-col p-3 w-full">
                  <div className="text-2xl leading-tight text-slate-900">
                    {product.name || "Product Name"}
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <div className="text-2xl leading-tight text-black">
                      <span>Rs. {product.price} </span>
                      <span className="text-neutral-400">Rs.</span>{" "}
                      <span className="line-through text-neutral-400">
                        {product.originalPrice}
                      </span>
                    </div>
                    <div className="text-lg font-medium leading-loose text-rose-600">
                      <span>{product.discount}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
