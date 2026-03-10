import React from 'react'

export default function AddProduct() {
  return (
    <div className="min-h-screen bg-pink-50">
      <div className="rounded-3xl bg-white/80 shadow-sm border border-pink-100 p-8">
        {/* Header */}
        <h1 className="mb-6 text-3xl font-semibold text-pink-900">Add Product</h1>

        <div className="space-y-6 rounded-3xl bg-pink-50/60 p-6">
          {/* Product Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-pink-800">Product Name</label>
            <input
              type="text"
              className="w-full rounded-2xl border border-pink-100 bg-white px-4 py-2.5 text-sm text-pink-900 placeholder-pink-300 outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
              placeholder="Enter product name"
            />
          </div>

          {/* Product Images */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-pink-800">Product Images</label>
            <div className="flex flex-col items-center justify-center space-y-2 rounded-3xl border-2 border-dashed border-pink-200 bg-white px-6 py-10 text-center">
              <div className="text-pink-400 text-2xl mb-1">📷</div>
              <button className="text-sm font-medium text-pink-600 hover:text-pink-700">
                -Upload Images
              </button>
              <p className="text-xs text-pink-400">
                Upload up to 5 images with a maximum size of 10MB each. Supported formats: JPG, PNG.
              </p>
              <p className="text-xs text-pink-300">Drag &amp; drop images here or click to upload</p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-pink-800">Description</label>
            <div className="rounded-3xl border border-pink-100 bg-white">
              {/* Simple toolbar mock */}
              <div className="flex items-center gap-3 border-b border-pink-50 px-4 py-2 text-xs text-pink-400">
                <button className="font-semibold text-pink-500">B</button>
                <button className="italic">I</button>
                <button className="underline">U</button>
                <span className="mx-1 h-4 w-px bg-pink-100" />
                <button>• List</button>
                <button>1. List</button>
              </div>
              <textarea
                rows="4"
                className="w-full rounded-b-3xl border-0 bg-transparent px-4 py-3 text-sm text-pink-900 outline-none"
                placeholder="Write a detailed description of the product..."
              />
            </div>
          </div>

          {/* Price / Stock / Category */}
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <label className="text-sm font-medium text-pink-800">Price</label>
              <div className="flex items-center rounded-2xl border border-pink-100 bg-white px-3">
                <span className="pr-2 text-sm text-pink-300">$</span>
                <input
                  type="number"
                  className="h-10 w-full border-0 bg-transparent text-sm text-pink-900 outline-none"
                  placeholder="0.00"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-pink-800">Stock Quantity</label>
              <input
                type="number"
                className="w-full rounded-2xl border border-pink-100 bg-white px-4 py-2.5 text-sm text-pink-900 outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                placeholder="0"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-pink-800">Category</label>
              <select className="w-full rounded-2xl border border-pink-100 bg-white px-4 py-2.5 text-sm text-pink-900 outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100">
                <option>Select Category</option>
                <option>Electronics</option>
                <option>Footwear</option>
                <option>Clothing</option>
              </select>
            </div>
          </div>

          {/* Status */}
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-medium text-pink-800">Status</span>
            <button className="relative flex items-center rounded-full bg-pink-100 px-1 py-0.5 text-xs text-pink-700">
              <span className="inline-flex h-6 items-center rounded-full bg-pink-600 px-4 text-xs font-medium text-white shadow">
                Active
              </span>
              <span className="px-3 text-pink-400">Inactive</span>
            </button>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap justify-end gap-3 pt-4">
            <button className="rounded-xl border border-pink-200 bg-white px-6 py-2 text-sm font-medium text-pink-700 hover:bg-pink-50">
              Cancel
            </button>
            <button className="rounded-xl bg-pink-600 px-6 py-2 text-sm font-semibold text-white shadow-md hover:bg-pink-700">
              Save Product
            </button>
          </div>
        </div>

        {/* Footer */}
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