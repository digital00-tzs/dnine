import React, { useState, useCallback, useEffect, useRef } from "react";
import axios from "axios"; // For HTTP requests

const Header = () => {
  const [search, setSearch] = useState("");
  const [showLoginCard, setShowLoginCard] = useState(false);
  const [user, setUser] = useState(null); // Mock user state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Error messages
  const loginCardRef = useRef(null);

  // Input change handlers
  const handleSearchChange = useCallback((e) => setSearch(e.target.value), []);
  const handleInputChange = useCallback((setter) => (e) => setter(e.target.value), []);

  const handleProfileDropdown = useCallback(() => {
    setShowLoginCard((prev) => !prev);
  }, []);

  const handleCloseLoginCard = useCallback(() => {
    setShowLoginCard(false);
  }, []);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/admin-login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setShowLoginCard(false);
      setError(null);
      // Mock user after login (replace with real API data)
      setUser({ name: "Admin" });
    } catch (err) {
      setError(err.response?.data?.message || "Error logging in");
    }
  };

  // Close login card on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginCardRef.current && !loginCardRef.current.contains(event.target)) {
        setShowLoginCard(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-between px-6 py-4 shadow bg-white relative">
      {/* Left Section: Logo and Search */}
      <div className="flex items-center gap-4">
        <img src="./logo.png" alt="Dnine Logo" className="h-10" />
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="px-4 py-2 border rounded-md w-80 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Search"
        />
      </div>

      {/* Right Section: Icons and Profile */}
      <div className="flex items-center gap-6">
        <button className="text-xl hover:text-gray-600" aria-label="Messages">
          💬
        </button>

        <div className="relative">
          <button className="text-xl hover:text-gray-600" aria-label="Notifications">
            🔔
          </button>
          <span className="absolute top-0 right-0 px-1 text-xs text-white bg-red-500 rounded-full">
            5
          </span>
        </div>

        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleProfileDropdown}
          aria-label="Profile Dropdown"
        >
          {user ? (
            <>
              <img
                src="/profile-image.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <span className="hidden md:block text-gray-700">{user.name}</span>
            </>
          ) : (
            <span className="text-gray-700">Login</span>
          )}
        </div>
      </div>

      {/* Login Card */}
      {showLoginCard && !user && (
        <div
          ref={loginCardRef}
          className="absolute top-16 right-6 bg-white p-6 rounded-md shadow-md w-72 z-10"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Login</h3>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={handleCloseLoginCard}
              aria-label="Close Login Card"
            >
              ✕
            </button>
          </div>
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleInputChange(setEmail)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handleInputChange(setPassword)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Header;
