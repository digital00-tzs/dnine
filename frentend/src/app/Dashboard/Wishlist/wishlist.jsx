import React from 'react'

export default function wishlist() {
  const wishlistItems = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      originalPrice: 1299,
      price: 999,
      inStock: true,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 2300.00,
      inStock: true,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 70.00,
      inStock: true,
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      originalPrice: 250.00,
      price: 220.00,
      inStock: false,
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 1499.99,
      inStock: true,
    },
  ]

  return (
    <div className="container mx-auto max-w-6xl p-4">
      <h1 className="text-2xl font-bold mb-6">Wishlist</h1>
      <div className="bg-gray-50 rounded-lg overflow-hidden">
        <div className="grid grid-cols-[2fr,1fr,1fr,1fr] gap-4 p-4 font-medium text-sm bg-gray-100">
          <div>PRODUCTS</div>
          <div>PRICE</div>
          <div>STOCK STATUS</div>
          <div>ACTIONS</div>
        </div>
        <div className="divide-y">
          {wishlistItems.map((item) => (
            <div key={item.id} className="grid grid-cols-[2fr,1fr,1fr,1fr] gap-4 p-4 items-center">
              <div className="flex gap-4">
                <img
                  src={item.image}
                  alt="Product"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
              <div>
                {item.originalPrice && (
                  <span className="text-gray-400  text-xs line-through  mr-2">
                    ₹{item.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="font-normal">₹{item.price.toFixed(2)}</span>
              </div>
              <div>
                <span
                  className={`text-xs ${
                    item.inStock ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {item.inStock ? "IN STOCK" : "OUT OF STOCK"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className={`px-4 py-3 rounded-md text-white text-sm flex items-center gap-2 ${
                    item.inStock 
                      ? "bg-red-500 hover:bg-red-600" 
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!item.inStock}
                >

                  ADD TO CARD
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                    />
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-md">
                  <svg 
                    className="w-4 h-4 text-gray-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

