import React from 'react'

export default function Navbar({ title = 'Dashboard', onToggle }) {
  const adminName = localStorage.getItem('AdminName') || 'Admin'
  const firstName = adminName.split(' ')[0];
  return (
    <header className="flex items-center justify-between gap-4 p-4 bg-linear-to-r from-pink-100 via-pink-50 to-white shadow-sm">
      <div className="flex items-center gap-4">
        <div className="text-2xl font-semibold text-pink-700">{title}</div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-md bg-white/60 hover:bg-white">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-pink-600/20 flex items-center justify-center text-pink-700">S</div>
          <div className="text-sm text-pink-700">Hello, {firstName}</div>
        </div>
      </div>
    </header>
  )
}
