import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
// We will use the PNG if generation succeeds, otherwise fallback to SVG or a placeholder.
// For now, let's assume the PNG generation works or we use the SVG we created earlier.
// Since the user specifically asked for floral_corner.png in the import, I will try to use that.
// If it doesn't exist, I'll need to make sure I create     it or copy the SVG to it.
import floralCorner from '../../../assets/floral_corner.png'; 
import { useNavigate } from 'react-router-dom';
import AdminServices from '../../../services/auth/register';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const response = await AdminServices.login({email,password});
        console.log(response);  
        localStorage.setItem("AdminName", response.data.data.fullName)
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-linear-to-br from-[#FAD0C4] to-[#FFD1FF] flex items-center justify-center overflow-hidden font-sans text-gray-700">
      {/* Floral Decorations */}
      <img src={floralCorner} alt="floral" className="absolute top-0 left-0 w-64 md:w-96 opacity-80 -translate-x-10 -translate-y-10" />
      <img src={floralCorner} alt="floral" className="absolute bottom-0 right-0 w-64 md:w-96 opacity-80 rotate-180 translate-x-10 translate-y-10" />

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-md p-8 bg-white/30 backdrop-blur-md rounded-3xl shadow-xl border border-white/50">
        
        {/* Logo */}
        <div className="text-center mb-8">
            <h1 className="text-5xl font-serif text-[#8B3D55] font-bold tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }}>eya</h1>
        </div>

        {/* Welcome Text */}
        <div className="text-center mb-8">
            <h2 className="text-2xl font-serif text-[#8B3D55] mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>Welcome Back</h2>
            <p className="text-[#8B3D55]/80 text-sm">Please log in to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-[#B06D85]" />
                </div>
                <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full pl-10 pr-4 py-3 bg-white/50 border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B06D85]/50 text-[#8B3D55] placeholder-[#B06D85]/70 backdrop-blur-sm transition-all"
                    value={email}
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            {/* Password */}
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-[#B06D85]" />
                </div>
                <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Password"
                    name='password'
                    className="w-full pl-10 pr-10 py-3 bg-white/50 border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B06D85]/50 text-[#8B3D55] placeholder-[#B06D85]/70 backdrop-blur-sm transition-all"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <EyeOff className="h-5 w-5 text-[#B06D85]" /> : <Eye className="h-5 w-5 text-[#B06D85]" />}
                </button>
            </div>

            {/* Login Button */}
            <button 
                type="submit"
                className="w-full py-3 bg-[#A64D68] hover:bg-[#8B3D55] text-white rounded-xl shadow-lg transition-colors font-medium text-lg mt-6 cursor-pointer"
            >
                Log In
            </button>
        </form>

        {/* Links */}
        <div className="flex justify-between items-center text-xs text-[#8B3D55] mt-4 px-1">
            <a href="#" className="hover:underline">Forgot password?</a>
            <p>Don't have an account? <span onClick={() => navigate('/admin/register')}className="font-bold hover:underline cursor-pointer">Sign Up</span></p>
        </div>

        {/* Divider */}
        <div className="relative py-4 flex items-center">
            <div className="grow border-t border-[#8B3D55]/20"></div>
            <span className="shrink mx-4 text-[#8B3D55]/50 text-xs">or</span>
            <div className="grow border-t border-[#8B3D55]/20"></div>
        </div>

        {/* Google Button */}
        <button 
            type="button"
            className="w-full py-3 bg-white/70 hover:bg-white text-[#555] rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 font-medium cursor-pointer"
        >
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
            Continue with Google
        </button>

         {/* Footer */}
         <div className="mt-8 text-center text-[10px] text-[#8B3D55]/60 space-y-1">
            <p>© 2024 eya. All rights reserved.</p>
            <div className="space-x-2">
                <a href="#" className="hover:underline">Privacy Policy</a>
                <span>·</span>
                <a href="#" className="hover:underline">Terms of Service</a>
            </div>
         </div>

      </div>
    </div>
  )
}
