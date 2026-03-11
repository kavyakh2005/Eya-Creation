import React, { useState } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts'

// ============================================================
// 📊 DATA
// ============================================================

const weeklySalesData = [
  { day: 'Mon', sales: 1200 }, { day: 'Tue', sales: 1800 }, { day: 'Wed', sales: 1500 },
  { day: 'Thu', sales: 2200 }, { day: 'Fri', sales: 2800 }, { day: 'Sat', sales: 3200 }, { day: 'Sun', sales: 2900 },
]
const monthlySalesData = [
  { day: 'Jan', sales: 12000 }, { day: 'Feb', sales: 18000 }, { day: 'Mar', sales: 15000 },
  { day: 'Apr', sales: 22000 }, { day: 'May', sales: 28000 }, { day: 'Jun', sales: 32000 },
  { day: 'Jul', sales: 29000 }, { day: 'Aug', sales: 35000 }, { day: 'Sep', sales: 31000 },
  { day: 'Oct', sales: 40000 }, { day: 'Nov', sales: 38000 }, { day: 'Dec', sales: 45000 },
]
const yearlySalesData = [
  { day: '2020', sales: 120000 }, { day: '2021', sales: 180000 }, { day: '2022', sales: 150000 },
  { day: '2023', sales: 220000 }, { day: '2024', sales: 280000 },
]

const shipmentData = [
  { name: 'Delivered',   value: 54, color: '#22c55e' },
  { name: 'On Delivery', value: 30, color: '#3b82f6' },
  { name: 'Cancelled',   value: 24, color: '#eab308' },
  { name: 'Returned',    value: 12, color: '#f43f5e' },
]

const statsCards = [
  { label: 'Total Orders',   value: '120',    note: '+15% this week', noteColor: 'text-blue-500'   },
  { label: 'Pending Orders', value: '32',     note: '5 urgent',       noteColor: 'text-yellow-600' },
  { label: 'New Orders',     value: '76',     note: '+8 today',       noteColor: 'text-green-500'  },
  { label: 'Total Sales',    value: '$8,450', note: '+8% this week',  noteColor: 'text-green-500'  },
]

const recentOrders = [
  { id: '#1001', name: 'Emma Johnson',  date: '2024-04-23', amount: '$120.00', status: 'Delivered', color: 'green'  },
  { id: '#1002', name: 'Liam Smith',    date: '2024-04-22', amount: '$85.50',  status: 'Pending',   color: 'yellow' },
  { id: '#1003', name: 'Olivia Brown',  date: '2024-04-21', amount: '$200.00', status: 'Shipped',   color: 'blue'   },
  { id: '#1004', name: 'Noah Williams', date: '2024-04-20', amount: '$65.00',  status: 'Cancelled', color: 'red'    },
  { id: '#1005', name: 'Ava Martinez',  date: '2024-04-19', amount: '$310.00', status: 'Delivered', color: 'green'  },
]

const lowStockProducts = [
  { name: 'Pink Floral Dress',  stock: 3, threshold: 10, img: '👗' },
  { name: 'White Sneakers',     stock: 5, threshold: 10, img: '👟' },
  { name: 'Gold Hoop Earrings', stock: 2, threshold: 10, img: '💛' },
  { name: 'Denim Jacket',       stock: 7, threshold: 10, img: '🧥' },
]

const recentCustomers = [
  { name: 'Emma Johnson', email: 'emma@gmail.com',  joined: '2024-04-23', orders: 5, avatar: 'EJ' },
  { name: 'Liam Smith',   email: 'liam@gmail.com',  joined: '2024-04-22', orders: 2, avatar: 'LS' },
  { name: 'Olivia Brown', email: 'olivia@gmail.com', joined: '2024-04-21', orders: 8, avatar: 'OB' },
  { name: 'Ava Martinez', email: 'ava@gmail.com',   joined: '2024-04-20', orders: 1, avatar: 'AM' },
]


// ============================================================
const RADIAN = Math.PI / 180
function PieLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent }) {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight="bold">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

// ============================================================
// 🧩 SMALL REUSABLE COMPONENTS
// ============================================================

function StatCard({ label, value, note, noteColor }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <div className="text-sm text-pink-500">{label}</div>
      <div className="text-2xl font-bold text-pink-700">{value}</div>
      <div className={`text-xs mt-2 ${noteColor}`}>{note}</div>
    </div>
  )
}

function OrderRow({ id, name, date, amount, status, color }) {
  return (
    <tr className="border-t border-pink-50">
      <td className="py-3 font-medium">{id}</td>
      <td>{name}</td>
      <td className="text-pink-400">{date}</td>
      <td className="font-semibold">{amount}</td>
      <td>
        <span className={`bg-${color}-100 text-${color}-700 px-2 py-1 rounded text-xs font-medium`}>
          {status}
        </span>
      </td>
    </tr>
  )
}

// ============================================================
//  LINE CHART — Weekly Sales
// ============================================================
function WeeklySalesChart() {
  const [activeTab, setActiveTab] = useState('Week')
  const chartData =
    activeTab === 'Week'  ? weeklySalesData  :
    activeTab === 'Month' ? monthlySalesData :
    yearlySalesData

  return (
    <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-pink-700">Weekly Sales</h2>
          <p className="text-sm text-pink-400 mt-1">Sales performance over the last 7 days</p>
        </div>
        <div className="flex gap-2">
          {['Week', 'Month', 'Year'].map((btn) => (
            <button key={btn} onClick={() => setActiveTab(btn)}
              className={`px-3 py-1 text-sm rounded-lg transition ${activeTab === btn ? 'bg-pink-100 text-pink-700 hover:bg-pink-200' : 'text-pink-400 hover:bg-pink-100'}`}>
              {btn}
            </button>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={chartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#fbbf24" strokeOpacity={0.3} />
          <XAxis dataKey="day" stroke="#ec4899" style={{ fontSize: '12px' }} />
          <YAxis stroke="#ec4899" style={{ fontSize: '12px' }} tickFormatter={(v) => `$${v}`} />
          <Tooltip contentStyle={{ backgroundColor: '#fdf2f8', border: '1px solid #f9a8d4', borderRadius: '8px' }} formatter={(v) => [`$${v}`, 'Sales']} />
          <Legend wrapperStyle={{ fontSize: '14px' }} />
          <Line type="monotone" dataKey="sales" stroke="#ec4899" strokeWidth={3} dot={{ fill: '#ec4899', r: 6 }} activeDot={{ r: 8 }} name="Sales ($)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

// ============================================================
// 🥧 PIE CHART — Shipment Status
// ============================================================
function ShipmentStatusChart() {
  return (
    <div className="bg-white rounded-xl p-5 shadow flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-semibold text-pink-700 mb-1">Shipment Status</h2>
        <p className="text-sm text-pink-400 mb-2">Orders breakdown by status</p>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie data={shipmentData} cx="50%" cy="50%" outerRadius={95} dataKey="value" labelLine={false} label={PieLabel}>
            {shipmentData.map((entry) => <Cell key={entry.name} fill={entry.color} />)}
          </Pie>
          <Tooltip formatter={(value, name) => [`${value} orders`, name]} />
        </PieChart>
      </ResponsiveContainer>
      <div className="grid grid-cols-2 gap-3 mt-4">
        {shipmentData.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
            <span className="text-xs text-pink-600">{item.name}</span>
            <span className="text-xs font-bold text-pink-800 ml-auto">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================================
// 📦 LOW STOCK ALERT
// ============================================================
function LowStockAlert() {
  return (
    <div className="bg-white rounded-xl p-5 shadow">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-pink-700">⚠️ Low Stock Alert</h2>
          <p className="text-sm text-pink-400">Products running out of stock</p>
        </div>
        <button className="bg-pink-50 text-pink-600 px-3 py-1 rounded-lg hover:bg-pink-100 transition text-sm">Manage Stock</button>
      </div>
      <div className="space-y-3">
        {lowStockProducts.map((product) => (
          <div key={product.name} className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg">
            <span className="text-2xl">{product.img}</span>
            <div className="flex-1">
              <div className="text-sm font-semibold text-pink-700">{product.name}</div>
              <div className="w-full bg-pink-200 rounded-full h-1.5 mt-1">
                <div className="h-1.5 rounded-full bg-red-400" style={{ width: `${(product.stock / product.threshold) * 100}%` }} />
              </div>
            </div>
            <span className="text-xs font-bold text-red-500 bg-red-100 px-2 py-1 rounded-lg">{product.stock} left</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================================
// 👥 RECENT CUSTOMERS
// ============================================================
function RecentCustomers() {
  return (
    <div className="bg-white rounded-xl p-5 shadow">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-pink-700">Recent Customers</h2>
          <p className="text-sm text-pink-400">Newly joined customers</p>
        </div>
        <button className="bg-pink-50 text-pink-600 px-3 py-1 rounded-lg hover:bg-pink-100 transition text-sm">View All</button>
      </div>
      <div className="space-y-3">
        {recentCustomers.map((customer) => (
          <div key={customer.email} className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-50 transition">
            <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center text-pink-700 font-bold text-sm flex-shrink-0">
              {customer.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-pink-700">{customer.name}</div>
              <div className="text-xs text-pink-400 truncate">{customer.email}</div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-xs font-bold text-pink-700">{customer.orders} orders</div>
              <div className="text-xs text-pink-400">{customer.joined}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================================
// 🏠 MAIN DASHBOARD
// ============================================================
export default function Dashboard() {
  return (
    <div className="p-6 bg-pink-50 min-h-screen">

      {/* 🔝 Dashboard Header — Title + Export Button */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-pink-700">Dashboard</h1>
          <p className="text-sm text-pink-400 mt-1">Welcome back! Here's what's happening today.</p>
        </div>
    <div className="relative">

      {/* Main Export Button */}
      <button
        className="flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition font-medium text-sm shadow"
      >
        {/* Download icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l-3-3m3 3l3-3M12 3v9" />
        </svg>
        Export
      </button>

    
    </div>
      </div>

      {/* 1️⃣ Stats Cards */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {statsCards.map((card) => <StatCard key={card.label} {...card} />)}
      </section>

      {/* 2️⃣ Charts Row */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <WeeklySalesChart />
        <ShipmentStatusChart />
      </section>

      {/* 3️⃣ Recent Orders Table */}
      <section className="bg-white rounded-xl p-5 shadow mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="font-semibold text-pink-700 text-lg">Recent Orders</div>
            <p className="text-sm text-pink-400">Latest 5 orders from your store</p>
          </div>
          <button className="bg-pink-50 text-pink-600 px-3 py-1 rounded-lg hover:bg-pink-100 transition text-sm">View All</button>
        </div>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-pink-400">
              <th className="py-2">Order ID</th>
              <th className="py-2">Customer</th>
              <th className="py-2">Date</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody className="text-pink-700">
            {recentOrders.map((order) => <OrderRow key={order.id} {...order} />)}
          </tbody>
        </table>
      </section>

      {/* 4️⃣ Bottom Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LowStockAlert />
        <RecentCustomers />
      </section>

    </div>
  )
}