"use client";

import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function Profile() {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  return (
    <div className="container mx-auto p-6 max-w-4xl space-y-8">
      <div className="border ">
        <h2 className="text-base  border py-2 p-2 font-semibold mb-6">
          Account Settings
        </h2>
        <div className="flex items-start gap-6 mb-6">
          <div className="w-28 h-28 ml-5 rounded-full overflow-hidden">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile picture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 flex-1">
            <div className="grid grid-cols-2 gap-4 mx-2">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First name"
                  defaultValue="Lorem"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  defaultValue="Last name"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mx-2 ">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+1 999900065"
                  defaultValue="+1 999900065"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mx-2">
              <div className="space-y-2">
                <label htmlFor="dob" className="block text-sm font-medium">
                  Date of Birth
                </label>
                <input
                  id="dob"
                  type="date"
                  defaultValue="1990-06-23"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="gender" className="block text-sm font-medium">
                  Gender
                </label>
                <select
                  id="gender"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <button className="px-4 py-2 mx-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>

      <div className="border ">
        <h3 className="text-lg border-b mx-2 py-2 font-semibold mb-4">
          Shop Preferences
        </h3>
        <div className="grid grid-cols-2 mx-2 mb-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="shoeSize" className="block text-sm font-medium">
              Shoe Size
            </label>
            <select
              id="shoeSize"
              defaultValue="9"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 5} value={i + 5}>
                  {i + 5}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <span className="block text-sm font-medium">
              Shopping Preferences
            </span>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="shopping"
                  value="womens"
                  defaultChecked
                  className="text-red-500 focus:ring-red-500"
                />
                <span>Women's</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="shopping"
                  value="mens"
                  className="text-red-500 focus:ring-red-500"
                />
                <span>Men's</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="border ">
        <h3 className="text-lg border-b mx-2 py-2 font-semibold mb-4">
          Change Password
        </h3>
        <div className="space-y-4 mx-2 mb-2">
          <div className="space-y-2">
            <label
              htmlFor="currentPassword"
              className="block text-sm font-medium"
            >
              Current Password
            </label>
            <div className="relative">
              <input
                id="currentPassword"
                type={showPassword.current ? "text" : "password"}
                placeholder="Enter current password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={() =>
                  setShowPassword((prev) => ({
                    ...prev,
                    current: !prev.current,
                  }))
                }
              >
                {showPassword.current ? (
                  <EyeOffIcon className="w-5 h-5" />
                ) : (
                  <EyeIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="newPassword" className="block text-sm font-medium">
              New Password
            </label>
            <div className="relative">
              <input
                id="newPassword"
                type={showPassword.new ? "text" : "password"}
                placeholder="8+ characters"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={() =>
                  setShowPassword((prev) => ({ ...prev, new: !prev.new }))
                }
              >
                {showPassword.new ? (
                  <EyeOffIcon className="w-5 h-5" />
                ) : (
                  <EyeIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showPassword.confirm ? "text" : "password"}
                placeholder="Confirm new password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={() =>
                  setShowPassword((prev) => ({
                    ...prev,
                    confirm: !prev.confirm,
                  }))
                }
              >
                {showPassword.confirm ? (
                  <EyeOffIcon className="w-5 h-5" />
                ) : (
                  <EyeIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
            Change Password
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between p-3 border">
        <div className="mx-2">
          <h3 className="text-lg font-semibold">Delete Account</h3>
        </div>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
          Delete
        </button>
      </div>
    </div>
  );
}
