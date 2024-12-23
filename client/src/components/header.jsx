import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      {/* Announcement Bar */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee space-x-8 bg-black py-2 justify-center gap-80">
          <p className="text-sm text-white">
            SHOP NOW TO GET FREE SHIPPING AND 40% OFF ON ALL ORDERS TODAY!
          </p>
          <p className="text-sm text-white">
            SHOP NOW TO GET FREE SHIPPING AND 40% OFF ON ALL ORDERS TODAY!
          </p>
        </div>
      </div>

      {/* Header Section */}
      <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="./logo.png"
            alt="Logo"
            className="h-6 md:h-12 object-contain"
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="text-gray-700 md:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <i className="fas fa-bars text-xl"></i>
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#shoes" className="text-lg text-gray-700 hover:text-black">
            Shoes
          </a>
          <a
            href="#nutrition"
            className="text-lg text-gray-700 hover:text-black"
          >
            Nutrition
          </a>
          <a
            href="#accessories"
            className="text-lg text-gray-700 hover:text-black"
          >
            Accessories
          </a>
        </div>

        {/* Search Input */}
        <div className="relative hidden md:block">
          <input
            type="text"
            id="search"
            placeholder="Search"
            className="px-4 py-2 border rounded-full text-sm w-56 focus:outline-none"
          />
          <div className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
            <i className="fas fa-search"></i>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <a href="#favrate" className="cursor-pointer hover:text-black">
            <i className="far fa-heart"></i>
          </a>
          <a href="#cart" className="cursor-pointer hover:text-black">
            <i className="fas fa-shopping-bag"></i>
          </a>
          <a href="#profile" className="cursor-pointer hover:text-black">
            <i className="far fa-user"></i>
          </a>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
          <div className="bg-white w-64 h-full p-6 space-y-6">
            {/* Close Button */}
            <button
              className="text-gray-700"
              onClick={() => setSidebarOpen(false)}
            >
              <i className="fas fa-times text-xl"></i>
            </button>

            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                id="search-sidebar"
                placeholder="Search"
                className="px-4 py-2 border rounded-full text-sm w-full focus:outline-none"
              />
              <div className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
                <i className="fas fa-search"></i>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-4">
              <a
                href="#shoes"
                className="block text-lg text-gray-700 hover:text-black"
              >
                Shoes
              </a>
              <a
                href="#nutrition"
                className="block text-lg text-gray-700 hover:text-black"
              >
                Nutrition
              </a>
              <a
                href="#accessories"
                className="block text-lg text-gray-700 hover:text-black"
              >
                Accessories
              </a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
