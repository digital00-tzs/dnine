import React from "react";
import Link from "next/link";

const Sidebar = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex">
      <div className="bg-white w-64 h-full p-6 space-y-6 overflow-y-auto">
        {/* Close Button */}
        <button
          className="text-gray-700 ml-auto flex items-center"
          onClick={onClose}
        >
          <i className="fas fa-times text-xl"></i>
        </button>

        {/* Navigation Links */}
        <nav className="space-y-4">
          <Link
            href="/Products/Shoes"
            onClick={onClose}
            className="block text-lg text-gray-700 hover:text-black"
          >
            Shoes
          </Link>
          <Link
            href="/Products/Nutrition"
            onClick={onClose}
            className="block text-lg text-gray-700 hover:text-black"
          >
            Nutrition
          </Link>
          <Link
            href="/Products/Accessories"
            onClick={onClose}
            className="block text-lg text-gray-700 hover:text-black"
          >
            Accessories
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
