import React, { useState } from "react";

const products = [
  {
    id: 1,
    label: "HOT",
    img: "https://via.placeholder.com/150",
    rating: 5,
    reviews: 738,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price: 700,
  },
  {
    id: 2,
    label: "",
    img: "https://via.placeholder.com/150",
    rating: 4.5,
    reviews: 536,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price: 2300,
  },
  {
    id: 3,
    label: "BEST DEALS",
    img: "https://via.placeholder.com/150",
    rating: 5,
    reviews: 423,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price: 360,
  },
  {
    id: 4,
    label: "",
    img: "https://via.placeholder.com/150",
    rating: 4,
    reviews: 816,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price: 800,
  },
  {
    id: 5,
    label: "",
    img: "https://via.placeholder.com/150",
    rating: 4,
    reviews: 816,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price: 800,
  },
  {
    id: 6,
    label: "",
    img: "https://via.placeholder.com/150",
    rating: 4,
    reviews: 816,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price: 800,
  },
];

const BrowsingHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Calculate the products to display based on the current page
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 border mt-4  mb-3">
      <div className="flex justify-between border p-3 items-center">
        <h2 className="text-base font-semibold  ">Browsing History</h2>
        <a href="#" className="text-red-500 hover:underline">
          <svg
            width="83"
            height="33"
            viewBox="0 0 83 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="83"
              height="32"
              transform="translate(0 0.600098)"
              fill="white"
            />
            <path
              d="M3.836 21.6001L0.294 11.4781H1.939L4.823 19.6401L7.707 11.4781H9.359L5.81 21.6001H3.836ZM10.6463 21.6001V14.3621H12.2773V21.6001H10.6463ZM10.6183 13.0951V11.4851H12.3053V13.0951H10.6183ZM17.4267 21.7401C16.7314 21.7401 16.1177 21.5931 15.5857 21.2991C15.0584 21.0004 14.6454 20.5758 14.3467 20.0251C14.0527 19.4744 13.9057 18.8188 13.9057 18.0581C13.9057 17.3161 14.0387 16.6581 14.3047 16.0841C14.5754 15.5054 14.9651 15.0504 15.4737 14.7191C15.9871 14.3878 16.6054 14.2221 17.3287 14.2221C18.0427 14.2221 18.6424 14.3738 19.1277 14.6771C19.6131 14.9804 19.9817 15.4051 20.2337 15.9511C20.4857 16.4924 20.6117 17.1271 20.6117 17.8551V18.3731H15.6067C15.6021 18.7838 15.6674 19.1478 15.8027 19.4651C15.9381 19.7824 16.1387 20.0321 16.4047 20.2141C16.6707 20.3914 16.9997 20.4801 17.3917 20.4801C17.7931 20.4801 18.1407 20.3914 18.4347 20.2141C18.7334 20.0321 18.9317 19.7568 19.0297 19.3881H20.5837C20.4997 19.8921 20.2991 20.3191 19.9817 20.6691C19.6691 21.0191 19.2864 21.2851 18.8337 21.4671C18.3857 21.6491 17.9167 21.7401 17.4267 21.7401ZM15.5997 17.3161H19.0017C19.0017 16.9661 18.9387 16.6511 18.8127 16.3711C18.6914 16.0864 18.5071 15.8624 18.2597 15.6991C18.0124 15.5311 17.6997 15.4471 17.3217 15.4471C16.9484 15.4471 16.6334 15.5381 16.3767 15.7201C16.1201 15.9021 15.9264 16.1378 15.7957 16.4271C15.6651 16.7118 15.5997 17.0081 15.5997 17.3161ZM23.699 21.6001L21.403 14.3621H22.936L24.441 19.3391H24.525L25.988 14.3621H27.227L28.732 19.3321H28.816L30.272 14.3621H31.833L29.537 21.6001H28.067L26.583 16.7771L25.134 21.6001H23.699ZM35.7768 21.6001L39.4098 11.4781H41.2578L44.8908 21.6001H43.1828L42.2798 19.0591H38.4018L37.4918 21.6001H35.7768ZM38.8078 17.5471H41.8528L40.3338 13.1301L38.8078 17.5471ZM48.4153 21.7051C47.9486 21.7051 47.5753 21.6468 47.2953 21.5301C47.0153 21.4134 46.8053 21.2571 46.6653 21.0611C46.5253 20.8651 46.4343 20.6458 46.3923 20.4031C46.3503 20.1558 46.3293 19.9038 46.3293 19.6471V11.1981H47.9953V19.4511C47.9953 19.7638 48.0583 20.0064 48.1843 20.1791C48.3149 20.3518 48.5249 20.4521 48.8143 20.4801L49.1783 20.4941V21.5651C49.0523 21.6024 48.9239 21.6351 48.7933 21.6631C48.6626 21.6911 48.5366 21.7051 48.4153 21.7051ZM52.6536 21.7051C52.1869 21.7051 51.8136 21.6468 51.5336 21.5301C51.2536 21.4134 51.0436 21.2571 50.9036 21.0611C50.7636 20.8651 50.6726 20.6458 50.6306 20.4031C50.5886 20.1558 50.5676 19.9038 50.5676 19.6471V11.1981H52.2336V19.4511C52.2336 19.7638 52.2966 20.0064 52.4226 20.1791C52.5532 20.3518 52.7632 20.4521 53.0526 20.4801L53.4166 20.4941V21.5651C53.2906 21.6024 53.1622 21.6351 53.0316 21.6631C52.9009 21.6911 52.7749 21.7051 52.6536 21.7051Z"
              fill="#D7263D"
            />
            <path
              d="M66.125 16.6001H79.875"
              stroke="#D7263D"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M74.25 10.9751L79.875 16.6001L74.25 22.2251"
              stroke="#D7263D"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-4">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-md transition"
          >
            {product.label && (
              <span
                className={`text-white text-xs px-2 py-1  ${
                  product.label === "HOT" ? "bg-red-500" : "bg-blue-500"
                }`}
              >
                {product.label}
              </span>
            )}
            <img
              src={product.img}
              alt="Product"
              className="w-full h-32 object-contain mt-2"
            />
            <div className="mt-4 flex items-center">
              <div className="flex">
                {Array.from({ length: Math.floor(product.rating) }).map(
                  (_, index) => (
                    <span key={index} className="text-red-500">
                      ★
                    </span>
                  )
                )}
                {product.rating % 1 !== 0 && (
                  <span className="text-gray-400">★</span>
                )}
              </div>
              <span className="ml-2 text-sm text-gray-500">
                ({product.reviews})
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-2">{product.description}</p>
            <p className="text-lg font-bold mt-2">₹{product.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center items-center space-x-4">
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <svg
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.75"
              y="1.3501"
              width="38.5"
              height="38.5"
              rx="19.25"
              stroke="#D7263D"
              stroke-width="1.5"
            />
            <path
              d="M28.25 20.6001H11.75"
              stroke="#D7263D"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.5 13.8501L11.75 20.6001L18.5 27.3501"
              stroke="#D7263D"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div className="flex space-x-2">
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => handlePageChange(idx + 1)}
              className={`w-2 h-2 rounded-full ${
                currentPage === idx + 1 ? "bg-red-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <svg
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.75"
              y="1.3501"
              width="38.5"
              height="38.5"
              rx="19.25"
              stroke="#D7263D"
              stroke-width="1.5"
            />
            <path
              d="M11.75 20.6001H28.25"
              stroke="#D7263D"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.5 13.8501L28.25 20.6001L21.5 27.3501"
              stroke="#D7263D"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BrowsingHistory;
