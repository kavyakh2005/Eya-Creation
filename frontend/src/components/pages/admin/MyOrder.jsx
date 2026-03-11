
import { useState } from "react";
export default function MyOrder() {

    const [selectedOrder, setSelectedOrder] = useState(null); // null matlab modal closed

    const orders = [
        {
            id: "#1234",
            date: "21 Feb 2026",
            customer: "Eya",
            products: 3,
            total: "$120",
            paymentStatus: "Paid",
            orderStatus: "Pending",
        },
        {
            id: "#1235",
            date: "20 Feb 2026",
            customer: "Sara",
            products: 5,
            total: "$250",
            paymentStatus: "Paid",
            orderStatus: "Delivered",
        },
        {
            id: "#1236",
            date: "19 Feb 2026",
            customer: "Ali",
            products: 2,
            total: "$90",
            paymentStatus: "Unpaid",
            orderStatus: "Cancelled",
        },
    ];

    const summaryCards = [
        { label: "Total Orders", value: 5, color: "text-[#963A67]", bg: "bg-pink-50" },
        { label: "Pending", value: 1, color: "text-yellow-600", bg: "bg-yellow-50" },
        { label: "Shipped", value: 1, color: "text-purple-600", bg: "bg-purple-50" },
        { label: "Delivered", value: 1, color: "text-green-600", bg: "bg-green-50" },
        { label: "Cancelled", value: 1, color: "text-red-500", bg: "bg-red-50" },
    ];

    const getOrderStatusStyle = (status) => {
        switch (status) {
            case "Pending": return "bg-yellow-100 text-yellow-700";
            case "Processing": return "bg-blue-100 text-blue-700";
            case "Shipped": return "bg-purple-100 text-purple-700";
            case "Delivered": return "bg-green-100 text-green-700";
            case "Cancelled": return "bg-red-100 text-red-700";
            default: return "";
        }
    };

    const getPaymentStyle = (status) =>
        status === "Paid" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700";

    const ORDER_STATUSES = ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"];

    return (
        <div className="p-10 bg-pink-50 min-h-screen">

            {/* Heading */}
            <h1 className="text-[#963A67] text-4xl font-semibold mb-8">My Orders</h1>

            {/* ── 1. Summary Cards ── */}
            <div className="grid grid-cols-5 gap-4 mb-8">
                {summaryCards.map((card) => (
                    <div key={card.label} className={`${card.bg} rounded-2xl shadow-sm p-5 flex flex-col gap-1`}>
                        <span className="text-gray-500 text-sm">{card.label}</span>
                        <span className={`text-3xl font-bold ${card.color}`}>{card.value}</span>
                    </div>
                ))}
            </div>

            {/* ── 2. Filters Section ── */}
            <div className="bg-white p-6 rounded-2xl shadow-md mb-4">
                <div className="grid grid-cols-5 gap-6">

                    <input
                        type="search"
                        placeholder="Search by Order ID / Customer..."
                        className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
                    />

                    <select className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400">
                        <option>Filter By Status</option>
                        <option>Pending</option>
                        <option>Processing</option>
                        <option>Shipped</option>
                        <option>Delivered</option>
                        <option>Cancelled</option>
                    </select>

                    <select className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400">
                        <option>Payment Status</option>
                        <option>Paid</option>
                        <option>Unpaid</option>
                    </select>

                    <input
                        type="text"
                        placeholder="Filter by date..."
                        className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
                    />

                    <button className="bg-[#963A67] text-white py-3 rounded-xl hover:bg-pink-700 transition font-medium">
                        Export ▾
                    </button>

                </div>
            </div>

            {/* ── Bulk Actions Bar ── */}
            <div className="bg-white px-6 py-3 rounded-2xl shadow-md mb-4 flex items-center gap-4">
                <span className="text-[#963A67] font-medium">2 selected</span>
                <button className="px-4 py-2 rounded-xl text-sm font-medium bg-pink-100 text-[#963A67] hover:bg-pink-200 transition">
                    Mark as Shipped
                </button>
                <button className="px-4 py-2 rounded-xl text-sm font-medium bg-pink-100 text-[#963A67] hover:bg-pink-200 transition">
                    Mark as Delivered
                </button>
                <button className="px-4 py-2 rounded-xl text-sm font-medium bg-red-100 text-red-600 hover:bg-red-200 transition">
                    Delete
                </button>
            </div>

            {/* ── 3. Orders Table ── */}
            <div className="bg-white rounded-2xl shadow-md mb-6 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-pink-100 text-[#963A67]">
                        <tr>
                            <th className="p-5">
                                <input type="checkbox" className="accent-pink-500 w-4 h-4" />
                            </th>
                            <th className="p-5 font-semibold">Order ID</th>
                            <th className="p-5 font-semibold">Customer</th>
                            <th className="p-5 font-semibold">Products</th>
                            <th className="p-5 font-semibold">Total Amount</th>
                            <th className="p-5 font-semibold">Payment Status</th>
                            <th className="p-5 font-semibold">Order Status</th>
                            <th className="p-5 font-semibold">Order Date</th>
                            <th className="p-5 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index} className="border-t hover:bg-pink-50 transition">
                                <td className="p-5">
                                    <input type="checkbox" className="accent-pink-500 w-4 h-4" />
                                </td>
                                <td className="p-5 font-medium">{order.id}</td>
                                <td className="p-5">{order.customer}</td>
                                <td className="p-5">{order.products} items</td>
                                <td className="p-5 font-medium">{order.total}</td>
                                <td className="p-5">
                                    <span className={`px-3 py-1 text-sm rounded-full ${getPaymentStyle(order.paymentStatus)}`}>
                                        {order.paymentStatus}
                                    </span>
                                </td>
                                <td className="p-5">
                                    <span className={`px-3 py-1 text-sm rounded-full ${getOrderStatusStyle(order.orderStatus)}`}>
                                        {order.orderStatus}
                                    </span>
                                </td>
                                <td className="p-5 text-gray-500">{order.date}</td>
                                <td className="p-5">
                                    <div className="flex gap-3">
                                        <button className="text-pink-600 hover:underline text-sm" onClick={() => setSelectedOrder(order)}>View</button>
                                        {/* <button className="text-pink-600 hover:underline text-sm">Edit</button> */}
                                        <button className="text-red-400 hover:underline text-sm">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ── 7. Pagination ── */}
            <div className="flex items-center justify-between mb-10">
                <span className="text-gray-400 text-sm">Showing 1–3 of 5 orders</span>
                <div className="flex items-center gap-2">
                    <button className="px-4 py-2 rounded-xl border border-gray-300 text-sm hover:bg-pink-50 transition">
                        ← Previous
                    </button>
                    {[1, 2].map((page) => (
                        <button
                            key={page}
                            className={`w-9 h-9 rounded-xl text-sm font-medium transition ${page === 1
                                ? "bg-[#963A67] text-white"
                                : "border border-gray-300 hover:bg-pink-50 text-gray-600"}`}
                        >
                            {page}
                        </button>
                    ))}
                    <button className="px-4 py-2 rounded-xl border border-gray-300 text-sm hover:bg-pink-50 transition">
                        Next →
                    </button>
                </div>
            </div>

            {/* ── 4. Order Detail Modal ── */}
            {selectedOrder && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-6">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">

                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b">
                            <h2 className="text-[#963A67] text-2xl font-semibold">Order Details</h2>
                            <button
                                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                                onClick={() => setSelectedOrder(null)} // close modal
                            >
                                ✕
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            {/* Order Info */}
                            <div className="bg-pink-50 rounded-xl p-4 grid grid-cols-2 gap-3">
                                <div>
                                    <span className="text-gray-400 text-sm">Order ID</span>
                                    <p className="font-semibold">{selectedOrder.id}</p>
                                </div>
                                <div>
                                    <span className="text-gray-400 text-sm">Order Date</span>
                                    <p className="font-semibold">{selectedOrder.date}</p>
                                </div>
                                <div>
                                    <span className="text-gray-400 text-sm">Payment Method</span>
                                    <p className="font-semibold">{selectedOrder.paymentStatus}</p>
                                </div>
                                <div>
                                    <span className="text-gray-400 text-sm">Order Status</span>
                                    <p>
                                        <span className={`px-3 py-1 text-sm rounded-full ${getOrderStatusStyle(selectedOrder.orderStatus)}`}>
                                            {selectedOrder.orderStatus}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* Customer Info */}
                            <div>
                                <h3 className="text-[#963A67] font-semibold mb-3">Customer Info</h3>
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <div>
                                        <span className="text-gray-400">Name</span>
                                        <p className="font-medium">{selectedOrder.customer}</p>
                                    </div>
                                    {/* Email, Phone, Address can be added if available */}
                                </div>
                            </div>

                            {/* Products */}
                            <div>
                                <h3 className="text-[#963A67] font-semibold mb-3">Products</h3>
                                <table className="w-full text-sm">
                                    <thead className="bg-pink-100 text-[#963A67]">
                                        <tr>
                                            <th className="p-3 text-left rounded-tl-xl">Product</th>
                                            <th className="p-3 text-left">Qty</th>
                                            <th className="p-3 text-left">Price</th>
                                            <th className="p-3 text-left rounded-tr-xl">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Example, dynamic product list can replace this */}
                                        <tr className="border-t">
                                            <td className="p-3">Example Product</td>
                                            <td className="p-3">{selectedOrder.products}</td>
                                            <td className="p-3">{selectedOrder.total}</td>
                                            <td className="p-3 font-medium">{selectedOrder.total}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}