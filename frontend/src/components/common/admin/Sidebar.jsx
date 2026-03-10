import  { useState } from 'react'
import eya from '../../../assets/eya.jpeg';
import { MdOutlineDashboard } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { FaProductHunt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { BiCategoryAlt } from "react-icons/bi";

const menuItems = [
    { title: 'Dashboard', href: '/admin/dashboard', icon: <MdOutlineDashboard /> },
    { title: 'My Orders', href: '/admin/orders', icon: <BsCart3 /> },
    { title: 'Categories', href: '/admin/categories', icon: <BiCategoryAlt /> },
    { title: 'Products', href: '/admin/products', icon: <FaProductHunt /> },
    { title: 'Customers', href: '/admin/customers', icon: <FaPerson /> },
    { title: 'Settings', href: '/admin/settings', icon: <CiSettings /> },
]

export default function Sidebar() {

    const [sidebarSize, setSidebarSize] = useState(true)

    return (
        <aside className={`${sidebarSize ? 'w-72' : 'w-20'} 
        h-screen overflow-y-auto bg-linear-to-b from-pink-200 via-pink-100 to-white 
        shadow-lg p-5 flex flex-col justify-between 
        transition-all duration-300`}>

            <div>
                {/* Top Section */}
                <div className="flex items-center mb-10">

                    {/* Profile */}
                    <div className="flex items-center gap-3">
                     {sidebarSize && (
                           <img
                            src={eya}
                            alt="Eya"
                            className="w-12 h-12 rounded-full object-cover"
                        />
                     )}

                        {sidebarSize && (
                            <div>
                                <div className="text-lg font-semibold text-pink-700">Eya</div>
                                <div className="text-xs text-pink-600">Admin Panel</div>
                            </div>
                        )}
                    </div>

                    {/* Toggle Button */}
                    <div
                        className={`ml-auto cursor-pointer text-pink-700 ${sidebarSize ? "ml-auto text-2xl" : "mx-auto text-2xl"}`}
                        onClick={() => setSidebarSize(prev => !prev)}
                    >
                        ☰
                    </div>
                </div>

                {/* Navigation */}

                <nav className="space-y-3">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.href}
                            to={item.href}
                            className={({ isActive }) =>
                                `flex items-center 
        ${sidebarSize ? 'justify-start px-3' : 'justify-center'} 
        gap-3 py-3 rounded-lg transition-all duration-200
        ${isActive
                                    ? 'bg-[#963A67] text-white shadow-md'
                                    : 'text-pink-800 hover:bg-white/60'
                                }`
                            }
                        >
                            <span className="text-xl">
                                {item.icon}
                            </span>

                            {sidebarSize && (
                                <span className="font-medium">
                                    {item.title}
                                </span>
                            )}
                        </NavLink>
                    ))}
                </nav>
            </div>

            {/* Bottom Section */}
            {sidebarSize && (
                <div className="mt-6 transition-all duration-300">

                    <div className="bg-pink-50 rounded-xl p-4 flex items-center gap-3 shadow-inner">
                        <div className="flex-1">
                            <div className="text-sm text-pink-700 font-semibold">
                                Need Help?
                            </div>
                            <div className="text-xs text-pink-500">
                                Contact our support
                            </div>
                        </div>
                        <button className="bg-pink-600 text-white px-3 py-1 rounded-md hover:bg-pink-700 transition">
                            Contact
                        </button>
                    </div>

                    <div className="text-xs text-pink-400 mt-6 text-center">
                        © 2024 eya. All rights reserved.
                    </div>
                </div>
            )}
        </aside>
    )
}