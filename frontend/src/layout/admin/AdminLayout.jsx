import React from 'react'
import Navbar from '../../components/common/admin/Navbar'
import Sidebar from '../../components/common/admin/Sidebar'
import Footer from '../../components/common/admin/Footer'

export default function AdminLayout({ children }) {
  return (
    <div className="h-screen bg-pink-50 overflow-hidden">
      <div className="flex h-full">
        <Sidebar />

        <div className="flex-1 h-full overflow-y-auto">
          <Navbar />

          <main className="p-6 max-w-7xl mx-auto">
            {children}
          </main>

          <Footer />
        </div>
      </div>
    </div>
  )
}
