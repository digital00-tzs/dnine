"use client"

import { useState } from "react"
import { ChevronDown } from 'lucide-react'

export default function Address() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    country: "India",
    region: "",
    city: "Delhi",
    zipCode: "",
    email: "",
    phoneNumber: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  }
  
  

  return (
    <div className="max-w-3xl bg-white border  m-2   mx-auto p-6">
      <div className="flex justify-between border p-2  items-center mb-6">
        <h2 className="text-lg  font-medium text-gray-900">SHIPPING ADDRESS</h2>
        <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors">
          ADD ADDRESS
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm text-gray-600 mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="First"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm text-gray-600 mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label htmlFor="companyName" className="block text-sm text-gray-600 mb-1">
            Company Name (Optional)
          </label>
          <input
            type="text"
            id="companyName"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm text-gray-600 mb-1">
            Address
          </label>
          <input
            type="text"
            id="address"
            placeholder="Road No. 13/x, House no. 1320/C, Flat No. 5D"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-sm text-gray-600 mb-1">
            Country
          </label>
          <div className="relative">
            <select
              id="country"
              className="w-full px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-1 focus:ring-gray-400"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            >
              <option value="India">India</option>
              {/* Add more countries as needed */}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        <div>
          <label htmlFor="region" className="block text-sm text-gray-600 mb-1">
            Region/State
          </label>
          <div className="relative">
            <select
              id="region"
              className="w-full px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-1 focus:ring-gray-400"
              value={formData.region}
              onChange={(e) => setFormData({ ...formData, region: e.target.value })}
            >
              <option value="">Select...</option>
              {/* Add regions/states as needed */}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block text-sm text-gray-600 mb-1">
              City
            </label>
            <div className="relative">
              <select
                id="city"
                className="w-full px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              >
                <option value="Delhi">Delhi</option>
                {/* Add more cities as needed */}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
          <div>
            <label htmlFor="zipCode" className="block text-sm text-gray-600 mb-1">
              Zip Code
            </label>
            <input
              type="text"
              id="zipCode"
              placeholder="11001"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
              value={formData.zipCode}
              onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Firstname@gmail.com"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-sm text-gray-600 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="+91 989898922"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
          >
            SAVE CHANGES
          </button>
        </div>
      </form>
    </div>
  )
}
