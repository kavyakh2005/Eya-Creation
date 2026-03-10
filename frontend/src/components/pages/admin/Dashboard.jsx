import React from 'react'

export default function Dashboard() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="text-sm text-pink-500">Total Orders</div>
          <div className="text-2xl font-bold text-pink-700">120</div>
          <div className="text-xs text-green-500 mt-2">+15%</div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow">
          <div className="text-sm text-pink-500">Total Sales</div>
          <div className="text-2xl font-bold text-pink-700">$8,450</div>
          <div className="text-xs text-green-500 mt-2">+8%</div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow">
          <div className="text-sm text-pink-500">New Customers</div>
          <div className="text-2xl font-bold text-pink-700">32</div>
          <div className="text-xs text-blue-500 mt-2">+5 New</div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow">
          <div className="text-sm text-pink-500">Products</div>
          <div className="text-2xl font-bold text-pink-700">76</div>
          <div className="text-xs text-yellow-600 mt-2">+2 Low Stock</div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl p-4 shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="font-semibold text-pink-700">Recent Orders</div>
            <button className="bg-pink-50 text-pink-600 px-3 py-1 rounded">View All</button>
          </div>

          <table className="w-full text-left text-sm">
            <thead className="text-pink-500">
              <tr>
                <th className="py-2">Order ID</th>
                <th className="py-2">Customer</th>
                <th className="py-2">Date</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody className="text-pink-700">
              <tr className="border-t">
                <td className="py-3">#1001</td>
                <td>Emma Johnson</td>
                <td>2024-04-23</td>
                <td>$120.00</td>
                <td><span className="bg-green-100 text-green-700 px-2 py-1 rounded">Delivered</span></td>
              </tr>
              <tr className="border-t">
                <td className="py-3">#1002</td>
                <td>Liam Smith</td>
                <td>2024-04-22</td>
                <td>$85.50</td>
                <td><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Pending</span></td>
              </tr>
              <tr className="border-t">
                <td className="py-3">#1003</td>
                <td>Olivia Brown</td>
                <td>2024-04-21</td>
                <td>$200.00</td>
                <td><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Shipped</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <aside className="bg-white rounded-xl p-4 shadow">
          <div className="font-semibold text-pink-700 mb-3">Quick Actions</div>
          <div className="space-y-3">
            <button className="w-full bg-pink-100 text-pink-700 px-3 py-2 rounded">+ Add Product</button>
            <button className="w-full bg-pink-50 text-pink-700 px-3 py-2 rounded">New Order</button>
            <button className="w-full bg-pink-50 text-pink-700 px-3 py-2 rounded">Add Customer</button>
          </div>

          <div className="mt-6">
            <div className="font-semibold text-pink-700">Sales Overview</div>
            <div className="mt-3">
              <div className="flex justify-between"><div className="text-sm text-pink-500">Total Sales</div><div className="font-bold">$8,450</div></div>
              <div className="flex justify-between mt-2"><div className="text-sm text-pink-500">Orders</div><div>120</div></div>
              <div className="flex justify-between mt-2"><div className="text-sm text-pink-500">Average Order</div><div>$70.42</div></div>
            </div>
          </div>
        </aside>
      </section>
    </>
  )
}
