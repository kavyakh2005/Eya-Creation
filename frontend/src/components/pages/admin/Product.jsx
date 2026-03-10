import React from 'react'
import { useNavigate } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: 'Smartwatch',
    category: 'Electronics',
    price: '$150.00',
    stock: 25,
    status: 'In Stock',
    image:
      'https://images.pexels.com/photos/27739460/pexels-photo-27739460/free-photo-of-gps-navigation-on-a-smart-watch-in-a-running-session.jpeg?auto=compress&cs=tinysrgb&w=80',
  },
  {
    id: 2,
    name: 'Pink Sneakers',
    category: 'Footwear',
    price: '$75.00',
    stock: 8,
    status: 'Low Stock',
    image:
      'https://images.pexels.com/photos/7772185/pexels-photo-7772185.jpeg?auto=compress&cs=tinysrgb&w=80',
  },
  {
    id: 3,
    name: 'Yellow T‑Shirt',
    category: 'Clothing',
    price: '$20.00',
    stock: 50,
    status: 'In Stock',
    image:
      'https://images.pexels.com/photos/7671353/pexels-photo-7671353.jpeg?auto=compress&cs=tinysrgb&w=80',
  },
  {
    id: 4,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: '$99.00',
    stock: 5,
    status: 'Low Stock',
    image:
      'https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg?auto=compress&cs=tinysrgb&w=80',
  },
  {
    id: 5,
    name: 'DSLR Camera',
    category: 'Electronics',
    price: '$550.00',
    stock: 15,
    status: 'In Stock',
    image:
      'https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?auto=compress&cs=tinysrgb&w=80',
  },
]

const statusClasses = {
  'In Stock': 'bg-emerald-100 text-emerald-700',
  'Low Stock': 'bg-amber-100 text-amber-700',
  'Out of Stock': 'bg-rose-100 text-rose-700',
}

export default function Product() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-pink-50">
      <div className="rounded-3xl bg-white/70 shadow-sm border border-pink-100 p-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-pink-900">Products</h1>
          </div>

          <div className="flex gap-3">
            <button className="rounded-xl border border-pink-200 bg-white px-4 py-2 text-sm font-medium text-pink-700 hover:bg-pink-50">
              Export
            </button>
            <button
              className="rounded-xl bg-pink-600 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-pink-700"
              onClick={() => navigate('/admin/products/add')}
            >
              + Add Product
            </button>
          </div>
        </div>

        {/* Filters + Stats */}
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Search + Filters */}
          <div className="flex flex-1 flex-col gap-3 md:flex-row md:items-center">
            <div className="relative flex-1">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-pink-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.9 14.32a8 8 0 111.414-1.414l3.387 3.387a1 1 0 01-1.414 1.414l-3.387-3.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-2xl border border-pink-100 bg-pink-50/60 py-2.5 pl-9 pr-3 text-sm text-pink-900 placeholder-pink-300 outline-none ring-0 focus:border-pink-300 focus:bg-white focus:ring-2 focus:ring-pink-100"
              />
            </div>

            <select className="w-full rounded-2xl border border-pink-100 bg-pink-50/60 px-4 py-2.5 text-sm text-pink-800 outline-none focus:border-pink-300 focus:bg-white focus:ring-2 focus:ring-pink-100 md:w-44">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Footwear</option>
              <option>Clothing</option>
            </select>

            <select className="w-full rounded-2xl border border-pink-100 bg-pink-50/60 px-4 py-2.5 text-sm text-pink-800 outline-none focus:border-pink-300 focus:bg-white focus:ring-2 focus:ring-pink-100 md:w-40">
              <option>Low Stock</option>
              <option>All</option>
              <option>In Stock</option>
              <option>Out of Stock</option>
            </select>
          </div>

          {/* Status Pills */}
          <div className="flex flex-wrap gap-2 text-sm">
            <button className="rounded-full bg-pink-600 px-4 py-1.5 font-medium text-white shadow">
              All Products <span className="ml-1 rounded-full bg-white/20 px-2">76</span>
            </button>
            <button className="rounded-full bg-amber-100 px-4 py-1.5 font-medium text-amber-800">
              Low Stock <span className="ml-1 rounded-full bg-amber-200 px-2">3</span>
            </button>
            <button className="rounded-full bg-emerald-100 px-4 py-1.5 font-medium text-emerald-800">
              In Stock <span className="ml-1 rounded-full bg-emerald-200 px-2">73</span>
            </button>
            <button className="rounded-full bg-rose-100 px-4 py-1.5 font-medium text-rose-700">
              Out of Stock <span className="ml-1 rounded-full bg-rose-200 px-2">3</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-sm">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-pink-50 text-xs font-semibold uppercase tracking-wide text-pink-500">
              <tr>
                <th className="px-6 py-4">
                  <input type="checkbox" className="h-4 w-4 rounded border-pink-200 text-pink-600 focus:ring-pink-400" />
                </th>
                <th className="px-2 py-4 text-pink-500">Product</th>
                <th className="px-2 py-4 text-pink-500">Price</th>
                <th className="px-2 py-4 text-pink-500">Stock</th>
                <th className="px-2 py-4 text-pink-500">Status</th>
                <th className="px-4 py-4 text-right text-pink-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-pink-50">
              {products.map((product) => (
                <tr key={product.id} className="bg-white/60 hover:bg-pink-50">
                  <td className="px-6 py-4">
                    <input type="checkbox" className="h-4 w-4 rounded border-pink-200 text-pink-600 focus:ring-pink-400" />
                  </td>
                  <td className="px-2 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 overflow-hidden rounded-xl bg-pink-100">
                        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <div className="font-medium text-pink-900">{product.name}</div>
                        <div className="text-xs text-pink-400">{product.category}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-4 font-medium text-pink-900">{product.price}</td>
                  <td className="px-2 py-4 text-pink-900">{product.stock}</td>
                  <td className="px-2 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        statusClasses[product.status] || 'bg-pink-100 text-pink-700'
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="rounded-xl bg-pink-600 px-4 py-1.5 text-xs font-medium text-white shadow hover:bg-pink-700">
                        Edit
                      </button>
                      <button className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-1.5 text-xs font-medium text-rose-700 hover:bg-rose-100">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Table Footer / Pagination */}
          <div className="flex flex-col items-center justify-between gap-3 border-t border-pink-50 bg-pink-50/60 px-6 py-4 text-xs text-pink-500 sm:flex-row">
            <div className="flex items-center gap-2">
              <span>Page 1</span>
              <div className="flex items-center gap-1">
                <button className="h-7 w-7 rounded-full bg-pink-600 text-xs font-semibold text-white">1</button>
                <button className="h-7 w-7 rounded-full text-xs font-semibold text-pink-400 hover:bg-pink-100">2</button>
                <button className="h-7 w-7 rounded-full text-xs font-semibold text-pink-400 hover:bg-pink-100">3</button>
                <span className="px-1 text-pink-300">...</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span>Show</span>
              <select className="rounded-xl border border-pink-100 bg-white px-2 py-1 text-xs text-pink-700 outline-none focus:border-pink-300 focus:ring-1 focus:ring-pink-100">
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>
              <span>per page</span>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-6 flex flex-col items-center justify-between gap-2 text-xs text-pink-400 sm:flex-row">
          <div>© 2024 eya. All rights reserved.</div>
          <div>
            Made with <span className="text-pink-500">♥</span> by eya
          </div>
        </div>
      </div>
    </div>
  )
}