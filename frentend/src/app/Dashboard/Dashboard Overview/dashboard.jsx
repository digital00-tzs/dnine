import React, { useState, useEffect } from "react";
import { Package, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Fetch the data from the JSON file
import userData from "../data/data.json";
import RecentOrders from "./RecentOrders";
import BrowsingHistory from "./BrowsingHistory";

export default function Dashboard() {
  const [selectedCard, setSelectedCard] = useState(null);

  // User data, billing address, cards, and stats are fetched from the JSON file
  const { user, billingAddress, cards, stats } = userData;

  const handleEditCard = (card) => {
    alert(`Editing card ${card.number}`);
  };

  const handleDeleteCard = (card) => {
    alert(`Deleting card ${card.number}`);
  };

  return (
    <section className="px-40">
      <section>
        {" "}
        {/* Welcome Section */}
        <div className="mb-8 py-12">
          <h1 className="text-2xl font-semibold mb-2">Hello, {user.name}</h1>
          <p className="text-gray-600 ">
            From your account dashboard, you can easily check & view your{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              Recent Orders
            </Link>
            , manage your{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              Shipping and Billing Addresses
            </Link>{" "}
            and edit your{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              Password and Account Details
            </Link>
            .
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Account Info */}
          <div className="bg-white shadow-sm border border-gray-400">
            <h2 className="text-lg font-semibold border-b border-gray-400 p-4 ">
              ACCOUNT INFO
            </h2>
            <div className="flex items-center space-x-4 p-4 ">
              <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden ">
                <Image
                  src={user.profileImage}
                  alt="Profile"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.location}</p>
              </div>
            </div>
            <div className="space-y-2 px-4 mb-4">
              <p className="text-sm">
                <span className="text-gray-500">Email:</span> {user.email}
              </p>
              <p className="text-sm">
                <span className="text-gray-500">Phone:</span> {user.phone}
              </p>
            </div>
            <button className=" text-blue-600 mt-2 shadow-sm border border-gray-400 ml-4 p-3 text-sm font-medium hover:underline  px-4">
              EDIT ACCOUNT
            </button>
          </div>

          {/* Billing Address */}
          <div className="bg-white shadow-sm border border-gray-400">
            <h2 className="text-lg font-semibold border-b border-gray-400 p-4 ">
              BILLING ADDRESS
            </h2>
            <div className="space-y-2 mb-4">
              <p className="font-medium px-4">{billingAddress.name}</p>
              <p className="text-sm text-gray-600 px-4">
                {billingAddress.address}
              </p>
              <p className="text-sm px-4">
                <span className="text-gray-500">Phone Number:</span>{" "}
                {billingAddress.phone}
              </p>
              <p className="text-sm px-4">
                <span className="text-gray-500">Email:</span>{" "}
                {billingAddress.email}
              </p>
            </div>
            <button className=" text-blue-600 mt-2 shadow-sm border border-gray-400 ml-4 p-3 text-sm font-medium hover:underline  px-4">
              EDIT ADDRESS
            </button>
          </div>

          {/* Stats */}
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg flex items-center space-x-4">
              <Package className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-2xl font-semibold">{stats.totalOrders}</h3>
                <p className="text-sm text-gray-600">Total Orders</p>
              </div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg flex items-center space-x-4">
              <Clock className="w-8 h-8 text-red-600" />
              <div>
                <h3 className="text-2xl font-semibold">
                  {stats.pendingOrders}
                </h3>
                <p className="text-sm text-gray-600">Pending Orders</p>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg flex items-center space-x-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <div>
                <h3 className="text-2xl font-semibold">
                  {stats.completedOrders}
                </h3>
                <p className="text-sm text-gray-600">Completed Orders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        {" "}
        {/* Payment Options Section */}
        <div className="mt-8 border mb-2 ">
          <div className="border-b p-1 m-1 flex justify-between items-center">
            <h2 className="text-lg font-semibold border-gray-400 mb-0">
              PAYMENT OPTIONS
            </h2>
            <div className="mt-0 flex justify-end">
              <button className="px-6 py-3 text-white bg-red-500 hover:bg-red-600 rounded-md">
                Add Card
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 m-3 lg:grid-cols-3 gap-6">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`relative p-6 rounded-lg shadow-md ${
                  card.type === "visa" ? "bg-[#0A4B85]" : "bg-[#1E9D4E]"
                } text-white`}
              >
                <div className="absolute right-2 top-2">
                  <button
                    className="p-2 hover:bg-black/10 rounded"
                    onClick={() =>
                      setSelectedCard(selectedCard === card.id ? null : card.id)
                    } // Toggle visibility of options
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="12" cy="5" r="1" />
                      <circle cx="12" cy="19" r="1" />
                    </svg>
                  </button>
                </div>
                <div className="text-2xl font-bold mb-6">{card.amount}</div>
                <div className="text-sm opacity-80 mb-2">CARD NUMBER</div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">
                    **** **** **** {card.number.slice(-4)}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                </div>
                <div className="flex justify-between items-center">
                  <span className="uppercase text-lg">{card.name}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="16"
                    viewBox="0 0 1000 324"
                    fill="currentColor"
                  >
                    <path d="M651.19 0H45.6C20.4 0 0 20.4 0 45.6v232.8c0 25.2 20.4 45.6 45.6 45.6h605.59c25.2 0 45.6-20.4 45.6-45.6V45.6c0-25.2-20.4-45.6-45.6-45.6z" />
                  </svg>
                </div>
                {selectedCard === card.id && (
                  <div className="absolute top-8 right-0 justify-center items-center mt-2 w-32 bg-white text-black rounded-md shadow-lg">
                    <button
                      className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left"
                      onClick={() => handleEditCard(card)}
                    >
                      Edit Card
                    </button>
                    <button
                      className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left"
                      onClick={() => handleDeleteCard(card)}
                    >
                      Delete Card
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <RecentOrders/>
      <BrowsingHistory/>
    </section>
  );
}
