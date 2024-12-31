// Header.js
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import AnnouncementBar from "./AnnouncementBar";
import SearchInput from "./SearchInput";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Header Section */}
      <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md z-40 relative">
        {/* Left Section: Hamburger Icon and Logo */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Icon */}
          <button
            className="text-gray-700 focus:outline-none md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-8 md:h-12 object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/Products/Shoes">
            <span className="text-lg text-gray-700 hover:text-black">Shoes</span>
          </Link>
          <Link href="/Products/Nutrition">
            <span className="text-lg text-gray-700 hover:text-black">Nutrition</span>
          </Link>
          <Link href="/Products/Accessories">
            <span className="text-lg text-gray-700 hover:text-black">
              Accessories
            </span>
          </Link>
        </div>

        {/* Right Section: Search Input and Icons */}
        <div className="flex items-center space-x-6">
          {/* Search Input */}
          <SearchInput
            id="search"
            placeholder="Search"
            className="hidden md:block w-40 md:w-56"
          />

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <Link href="/Favorites">
              <i className="far fa-heart cursor-pointer hover:text-black"></i>
            </Link>
            <Link href="/Cart">
              <i className="fas fa-shopping-bag cursor-pointer hover:text-black"></i>
            </Link>
            <Link href="/Dashboard">
              <i className="far fa-user cursor-pointer hover:text-black"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Search Input Row for Mobile */}
      <div className="md:hidden px-6 py-4 bg-gray-100">
        <SearchInput id="search-md" placeholder="Search" />
      </div>

      {/* Sidebar for Mobile */}
      {sidebarOpen && <Sidebar onClose={() => setSidebarOpen(false)} />}
    </div>
  );
};

export default Header;
