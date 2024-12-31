import React from 'react'

export default function orders() {
  const orders = [
    {
      id: "01",
      image: "https://placehold.co/300x300",
      type: "Tshirt",
      name: "Waterproof training T-Shirt",
      date: "26 Oct 2023",
      time: "09:25 PM",
      price: "₹ 17.50",
      category: "Mens-Tee",
      color: "Black-Grey",
    },
    {
      id: "02",
      image: "https://placehold.co/300x300",
      type: "Running Shoes",
      name: "Alpha All Purpose Gen Z",
      date: "26 Oct 2023",
      time: "07:12 PM",
      price: "₹ 90.00",
      category: "Mens-Trainers",
      color: "Black-White-Orange",
    },
    {
      id: "03",
      image: "https://placehold.co/300x300",
      type: "Shoes",
      name: "Classic Core 99",
      date: "25 Oct 2023",
      time: "01:55 AM",
      price: "₹ 55.00",
      category: "Mens-Trainers",
      color: "Blue-White",
    },
    {
      id: "04",
      image: "https://placehold.co/300x300",
      type: "Shoes",
      name: "BVD Ld 19905",
      date: "24 Oct 2023",
      time: "10:41 PM",
      price: "₹ 35.00",
      category: "Womens-Sandals",
      color: "Navy-Brown",
    },
    {
      id: "05",
      image: "https://placehold.co/300x300",
      type: "Track Suit",
      name: "All Season Waterproof..",
      date: "24 Oct 2023",
      time: "05:28 PM",
      price: "₹ 105.00",
      category: "Womens-Tracksuit",
      color: "Navy",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto  border mt-4  p-6">
      <h2 className="text-2xl font-normal text-gray-600 mb-8">Recent Orders</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4 px-4 font-medium text-gray-600">
                No
              </th>
              <th className="text-left py-4 px-4 font-medium text-gray-600">
                Product Name
              </th>
              <th className="text-left py-4 px-4 font-medium text-gray-600">
                Order Date
              </th>
              <th className="text-left py-4 px-4 font-medium text-gray-600">
                Price
              </th>
              <th className="text-left py-4 px-4 font-medium text-gray-600">
                Category
              </th>
              <th className="text-left py-4 px-4 font-medium text-gray-600">
                Color
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b last:border-b-0">
                <td className="py-4 px-4 align-top">{order.id}</td>
                <td className="py-4 px-4">
                  <div className="flex items-start gap-3">
                    <img
                      src={order.image}
                      alt={order.name}
                      width={60}
                      height={60}
                      className="rounded object-cover"
                    />
                    <div>
                      <p className="text-xs text-gray-500">{order.type}</p>
                      <p className="font-sm">{order.name}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <p className="text-xs text-gray-500">{order.time}</p>
                  <p className="text-sm">{order.date}</p>
                </td>
                <td className="py-4 px-4 text-sm">{order.price}</td>
                <td className="py-4 px-4 text-sm">{order.category}</td>
                <td className="py-4 px-4 text-sm">{order.color}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center mt-4">
          <button className="text-blue-600 hover:text-blue-800">
            See More
          </button>
        </div>
      </div>
    </div>
  );
}
