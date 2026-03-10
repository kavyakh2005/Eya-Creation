import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminLogin from './components/auth/admin/Admin-Login'
import AdminRegister from './components/auth/admin/AdminRegister'
import AdminLayout from './layout/admin/AdminLayout'
import AddProduct from './layout/admin/AddProduct'
import Dashboard from './components/pages/admin/Dashboard'
import MyOrder from './components/pages/admin/MyOrder'
import Product from './components/pages/admin/Product'
import Categories from './components/pages/admin/Categories'
import Setting from './components/pages/admin/Setting'
import Customers from './components/pages/admin/Customers'

export default function App() {
  return (
    <Routes>
      {/* Admin Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/register" element={<AdminRegister />} />

      {/* Admin Layout with Dashboard */}
      <Route
        path="/admin/dashboard"
         element={<AdminLayout><Dashboard/></AdminLayout>}
      />
      <Route
        path="/admin/orders"
        element={ <AdminLayout><MyOrder/></AdminLayout>}  
      />
      <Route
        path="/admin/products"
        element={ <AdminLayout><Product/></AdminLayout>}
      />
      <Route
        path="/admin/products/add"
        element={ <AdminLayout><AddProduct/></AdminLayout>}
      />
      <Route
        path="/admin/categories"
        element={ <AdminLayout><Categories/></AdminLayout>}
      />
      <Route
        path="/admin/settings"
        element={ <AdminLayout><Setting/></AdminLayout>}
      />
      <Route
        path="/admin/customers"
        element={ <AdminLayout><Customers/></AdminLayout>}
      />
      </Routes>
  )
}
