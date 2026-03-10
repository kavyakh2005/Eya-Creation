import React from 'react'

export default function MyOrder() {

    const orders = [
        {
            id: "#1234",
            date: "21 Feb 2026",
            customer: "Eya",
            total: "$120",
            status: "Pending"
        },
        {
            id: "#1235",
            date: "20 Feb 2026",
            customer: "Sara",
            total: "$250",
            status: "Completed"
        },
        {
            id: "#1236",
            date: "19 Feb 2026",
            customer: "Ali",
            total: "$90",
            status: "Cancelled"
        }
    ];

    // Status color logic
    const getStatusStyle = (status) => {
        switch (status) {
            case "Pending":
                return "bg-yellow-100 text-yellow-700";
            case "Completed":
                return "bg-green-100 text-green-700";
            case "Cancelled":
                return "bg-red-100 text-red-700";
            default:
                return "";
        }
    };

    return (
        <div className="p-10 bg-pink-50 min-h-screen">

            {/* Heading */}
            <h1 className="text-[#963A67] text-4xl font-semibold mb-8">
                My Orders
            </h1>

            {/* Filters Section */}
            <div className="bg-white p-6 rounded-2xl shadow-md mb-8">

                {/* Fixed 5 Column Layout */}
                <div className="grid grid-cols-5 gap-6">

                    <select className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400  focus:border-pink-400">
                        <option>Filter By Status</option>
                        <option>Pending</option>
                        <option>Completed</option>
                        <option>Cancelled</option>
                    </select>

                    <select className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400">
                        <option>Payment Method</option>
                        <option>Cash</option>
                        <option>Card</option>
                    </select>

                    <select className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400">
                        <option>Sort By</option>
                        <option>Newest</option>
                        <option>Oldest</option>
                    </select>

                    <input
                        type="search"
                        placeholder="Search orders..."
                        className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
                    />

                    <button className="bg-[#963A67] text-white py-3 rounded-xl hover:bg-pink-700 transition font-medium ">
                        Export
                    </button>

                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-2xl shadow-md">

                <table className="w-full text-left">

                    <thead className="bg-pink-100 text-[#963A67]">
                        <tr>
                            <th className="p-5 font-semibold">Order ID</th>
                            <th className="p-5 font-semibold">Date</th>
                            <th className="p-5 font-semibold">Customer</th>
                            <th className="p-5 font-semibold">Total</th>
                            <th className="p-5 font-semibold">Status</th>
                            <th className="p-5 font-semibold">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index} className="border-t hover:bg-pink-50 transition">

                                <td className="p-5">{order.id}</td>
                                <td className="p-5">{order.date}</td>
                                <td className="p-5">{order.customer}</td>
                                <td className="p-5">{order.total}</td>

                                <td className="p-5">
                                    <span
                                        className={`px-3 py-1 text-sm rounded-full ${getStatusStyle(order.status)}`}
                                    >
                                        {order.status}
                                    </span>
                                </td>

                                <td className="flex p-5 gap-3">
                                    <button className="text-pink-600 hover:underline">
                                        View
                                    </button>
                                    <button className="text-pink-600 hover:underline">
                                        Status
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>

        </div>
    )
}