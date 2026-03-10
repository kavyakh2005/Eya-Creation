import React from "react";

const categories = [
  {
    id: 1,
    name: "Clothing",
    subTitle: "Clothing",
    description: "Fashion items",
    productsCount: 24,
    status: "Active",
    image:
      "https://images.pexels.com/photos/7671353/pexels-photo-7671353.jpeg?auto=compress&cs=tinysrgb&w=80",
  },
  {
    id: 2,
    name: "Footwear",
    subTitle: "Footwear",
    description: "Shoes & sneakers",
    productsCount: 12,
    status: "Active",
    image:
      "https://images.pexels.com/photos/7772185/pexels-photo-7772185.jpeg?auto=compress&cs=tinysrgb&w=80",
  },
  {
    id: 3,
    name: "Electronics",
    subTitle: "Gadgets",
    description: "Gadgets",
    productsCount: 18,
    status: "Active",
    image:
      "https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg?auto=compress&cs=tinysrgb&w=80",
  },
];

export default function Categories() {
  return (
    <div className="min-h-screen bg-pink-50">
      <div className="rounded-3xl bg-white/70 shadow-sm border border-pink-100 p-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-pink-900">Categories</h1>
          </div>

          <div className="flex gap-3">
            <button className="rounded-xl border border-pink-200 bg-white px-4 py-2 text-sm font-medium text-pink-700 hover:bg-pink-50">
              Export
            </button>
            <button className="rounded-xl bg-pink-600 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-pink-700">
              + Add Category
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:w-1/2">
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

          <div className="flex items-center gap-3">
            <select className="w-44 rounded-2xl border border-pink-100 bg-pink-50/60 px-4 py-2.5 text-sm text-pink-800 outline-none focus:border-pink-300 focus:bg-white focus:ring-2 focus:ring-pink-100">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-sm">
          <div className="grid grid-cols-[1.5fr,2fr,3fr,1.2fr,1.3fr,1.5fr] bg-pink-50 px-6 py-4 text-xs font-semibold uppercase tracking-wide text-pink-500">
            <div>Image</div>
            <div>Category Name</div>
            <div>Description</div>
            <div className="text-center">Products</div>
            <div className="text-center">Status</div>
            <div className="text-right">Actions</div>
          </div>

          <div className="divide-y divide-pink-50">
            {categories.map((category) => (
              <div
                key={category.id}
                className="grid grid-cols-[1.5fr,2fr,3fr,1.2fr,1.3fr,1.5fr] items-center bg-white/60 px-6 py-4 hover:bg-pink-50"
              >
                {/* Image */}
                <div className="flex items-center">
                  <div className="h-10 w-10 overflow-hidden rounded-xl bg-pink-100">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Category name */}
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-pink-900">
                    {category.name}
                  </span>
                  <span className="text-xs text-pink-400 flex items-center gap-1">
                    <span className="text-[10px]">▢</span>
                    {category.subTitle}
                  </span>
                </div>

                {/* Description */}
                <div className="text-sm text-pink-600">
                  {category.description}
                </div>

                {/* Products count */}
                <div className="flex justify-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 text-xs font-semibold text-pink-700">
                    {category.productsCount}
                  </div>
                </div>

                {/* Status */}
                <div className="flex justify-center">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    {category.status}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-2">
                  <button className="rounded-xl bg-pink-600 px-4 py-1.5 text-xs font-medium text-white shadow hover:bg-pink-700">
                    Edit
                  </button>
                  <button className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-1.5 text-xs font-medium text-rose-700 hover:bg-rose-100">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-col items-center justify-between gap-3 border-t border-pink-50 bg-pink-50/60 px-6 py-4 text-xs text-pink-500 sm:flex-row">
            <div className="flex items-center gap-2">
              <span>Page</span>
              <button className="h-7 w-7 rounded-full bg-pink-600 text-xs font-semibold text-white">
                1
              </button>
              <button className="h-7 w-7 rounded-full text-xs font-semibold text-pink-400 hover:bg-pink-100">
                2
              </button>
              <button className="h-7 w-7 rounded-full text-xs font-semibold text-pink-400 hover:bg-pink-100">
                3
              </button>
              <button className="h-7 w-7 rounded-full text-xs font-semibold text-pink-400 hover:bg-pink-100">
                &gt;
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span>Show</span>
              <select className="rounded-xl border border-pink-100 bg-white px-2 py-1 text-xs text-pink-700 outline-none focus:border-pink-300 focus:ring-1 focus:ring-pink-100">
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>
            </div>
          </div>
        </div>

        {/* Footer Text (same style as Products) */}
        <div className="mt-6 flex flex-col items-center justify-between gap-2 text-xs text-pink-400 sm:flex-row">
          <div>© 2024 eya. All rights reserved.</div>
          <div>
            Made with <span className="text-pink-500">♥</span> by eya
          </div>
        </div>
      </div>
    </div>
  );
}