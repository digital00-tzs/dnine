"use client";
import * as React from "react";

export function PremiumProducts() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const products = [
    {
      image: "https://via.placeholder.com/150",
      label: "Premium",
      price: "1,776.00",
      originalPrice: "1,899.00",
      discount: "-35%",
    },
    {
      image: "https://via.placeholder.com/150",
      label: "New Arrivals",
      price: "1,476.00",
      originalPrice: "1,899.00",
      discount: "-35%",
    },
    {
      image: "https://via.placeholder.com/150",
      label: "Premium",
      price: "1,376.00",
      originalPrice: "1,899.00",
      discount: "-35%",
    },
    {
      image: "https://via.placeholder.com/150",
      label: "Premium",
      price: "1,276.00",
      originalPrice: "1,899.00",
      discount: "-35%",
    },
  ];

  const handleNextButtonClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrevButtonClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  const handleAddtoCart = (product) => {
    console.log("Added to Cart", product);
  };

  // Auto-change logic with setTimeout
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearTimeout(timer); // Clear timeout on component unmount or index change
  }, [currentIndex, products.length]);

  // Dynamically select products based on currentIndex
  const displayedProducts = [
    products[currentIndex],
    products[(currentIndex + 1) % products.length],
    products[(currentIndex + 2) % products.length],
    products[(currentIndex + 3) % products.length],
  ];
  

  return (
    <div className="flex flex-col justify-center px-32  pt-20 pb-4 max-md:px-5">
      <div className="flex flex-col justify-center w-full max-md:max-w-full">
        <div className="flex relative gap-8 items-start w-full min-h-[50px] max-md:max-w-full">
          <div className="z-0 flex-1 shrink my-auto text-4xl font-semibold tracking-wider leading-snug text-center basis-0 text-stone-900 max-md:max-w-full">
            <span className="font-medium  font-oswald">Our </span>
            <span className="font-medium font-oswald text-rose-600">Premium</span>
            <span className="font-medium font-oswald "> Products</span>
          </div>
          <div className="flex absolute right-0 z-0 gap-3 items-center self-start bottom-[9px]">
            <button
              onClick={handlePrevButtonClick}
              className=" bg-gray-200 rounded hover:bg-gray-300"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="8" fill="black" />
                <path
                  d="M20.1136 11.8853L18.0569 9.8286L11.8867 16.0002L18.0569 22.1719L20.1151 20.1137L16.0002 16.0002L20.1136 11.8853Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 26.1818C0 27.7249 0.612985 29.2048 1.70411 30.2959C2.79523 31.387 4.2751 32 5.81818 32H26.1818C27.7249 32 29.2048 31.387 30.2959 30.2959C31.387 29.2048 32 27.7249 32 26.1818V5.81818C32 4.2751 31.387 2.79523 30.2959 1.70411C29.2048 0.612985 27.7249 0 26.1818 0H5.81818C4.2751 0 2.79523 0.612985 1.70411 1.70411C0.612985 2.79523 0 4.2751 0 5.81818V26.1818ZM5.81818 29.0909H26.1818C26.9534 29.0909 27.6933 28.7844 28.2389 28.2389C28.7844 27.6933 29.0909 26.9534 29.0909 26.1818V5.81818C29.0909 5.04664 28.7844 4.3067 28.2389 3.76114C27.6933 3.21558 26.9534 2.90909 26.1818 2.90909H5.81818C5.04664 2.90909 4.3067 3.21558 3.76114 3.76114C3.21558 4.3067 2.90909 5.04664 2.90909 5.81818V26.1818C2.90909 26.9534 3.21558 27.6933 3.76114 28.2389C4.3067 28.7844 5.04664 29.0909 5.81818 29.0909Z"
                  fill="black"
                />
              </svg>
            </button>
            <button
              onClick={handleNextButtonClick}
              className=" bg-gray-200 rounded hover:bg-gray-300"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="8" fill="black" />
                <path
                  d="M11.8864 20.1156L13.9431 22.1724L20.1133 16.0007L13.9431 9.8291L11.8849 11.8873L15.9998 16.0007L11.8864 20.1156Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
<div className="flex flex-col md:flex-col lg:flex-row gap-5 items-center mt-8 w-full max-md:max-w-full">
  {displayedProducts.map((product, index) => (
    <div
      key={index}
      className="group flex overflow-hidden flex-col grow shrink self-stretch my-auto bg-white rounded-xl w-full"
    >
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex relative flex-col flex-wrap gap-5 justify-between items-start w-full rounded-xl min-h-[400px] shadow-[0px_-3px_30px_rgba(217,217,217,1)] max-md:pb-24 max-md:max-w-full">
          <img
            loading="lazy"
            src={product.image}
            alt="Product image"
            className="object-cover absolute inset-0 size-full"
          />
          <div>
            <div className="relative flex-1 shrink-0 gap-2.5 px-3 pr-10 py-2 mt-12 text-base font-medium text-black whitespace-nowrap bg-yellow-400 rounded-r-2xl max-md:mt-10">
              {product.label}
            </div>
            <button
              onClick={() => handleAddtoCart(product)}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden group-hover:block px-6 py-2 bg-rose-600 text-white rounded-lg shadow-md hover:bg-rose-500 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-3 w-full max-md:max-w-full">
        <div className="flex-1 shrink gap-2.5 self-stretch w-full text-xl leading-tight text-slate-900 max-md:max-w-full">
          FIRST White Men's Running Shoes
        </div>
        <div className="flex gap-3 mt-3 w-full max-md:flex-col max-md:gap-2">
          <div className="flex flex-wrap items-center text-base leading-tight text-black">
            <span className="flex items-center space-x-2">
              <span>Rs.</span>
              <span>{product.price}</span>
              <span className="flex items-center">
                <span className="text-neutral-400">Rs.</span>
                <span className="line-through text-neutral-400 ml-1">
                  {product.originalPrice}
                </span>
              </span>
            </span>
          </div>
          <div className="flex items-center text-base font-medium leading-loose text-rose-600">
            <div className="px-5 py-1.5 rounded-lg border border-rose-600">
              {product.discount}
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


      </div>
    </div>
  );
}
