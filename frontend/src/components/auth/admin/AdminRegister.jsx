import React, { useState } from 'react';
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import floralCorner from '../../../assets/floral_corner.png'; 
import { useNavigate } from 'react-router-dom';
import AdminServices from '../../../services/auth/register';

export default function AdminRegister() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log('Register', { fullName, email, password });
    const registerData = {
      fullName,
      email,
      password,
    };
    console.log(registerData);

    const response = await AdminServices.register(registerData);
    console.log(response);  
  };

  return (
    <div className="relative h-screen w-full bg-linear-to-br from-[#FAD0C4] to-[#FFD1FF] flex items-center justify-center overflow-hidden font-sans text-gray-700">
      {/* Floral Decorations */}
      <img src={floralCorner} alt="floral" className="absolute top-0 left-0 w-64 md:w-96 opacity-80 -translate-x-10 -translate-y-10" />
      <img src={floralCorner} alt="floral" className="absolute bottom-0 right-0 w-64 md:w-96 opacity-80 rotate-180 translate-x-10 translate-y-10" />

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-md p-8 bg-white/30 backdrop-blur-md rounded-3xl shadow-xl border border-white/50">
        
        {/* Logo */}
        <div className="text-center mb-8">
            <h1 className="text-5xl font-serif text-[#8B3D55] font-bold tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }}>eya</h1>
        </div>

        {/* Header Text */}
        <div className="text-center mb-8">
            <h2 className="text-2xl font-serif text-[#8B3D55] mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>Create an Account</h2>
            <p className="text-[#8B3D55]/80 text-sm">Please fill in the details to create your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="h-5 w-5 text-[#B06D85]" />
                </div>
                <input 
                    type="text" 
                    placeholder="Full Name"
                    name='fullName'
                    className="w-full pl-10 pr-4 py-3 bg-white/50 border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B06D85]/50 text-[#8B3D55] placeholder-[#B06D85]/70 backdrop-blur-sm transition-all"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
            </div>

            {/* Email */}
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="h-5 w-5 text-[#B06D85]" />
                </div>
                <input 
                    type="email" 
                    name='email'
                    placeholder="Email Address"
                    className="w-full pl-10 pr-4 py-3 bg-white/50 border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B06D85]/50 text-[#8B3D55] placeholder-[#B06D85]/70 backdrop-blur-sm transition-all"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            {/* Password */}
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="h-5 w-5 text-[#B06D85]" />
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
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <FiEyeOff className="h-5 w-5 text-[#B06D85]" /> : <FiEye className="h-5 w-5 text-[#B06D85]" />}
                </button>
            </div>

            {/* Sign Up Button */}
            <button 
                type="submit"
                className="w-full py-3 bg-[#A64D68] hover:bg-[#8B3D55] text-white rounded-xl shadow-lg transition-colors font-medium text-lg mt-6 cursor-pointer"
            >
                Sign Up
            </button>
        </form>

        {/* Terms */}
        <div className="text-center mt-4">
             <p className="text-[10px] text-[#8B3D55]/60">By signing up, you agree to our <a href="#" className="hover:underline">Terms of Service</a> and <a href="#" className="hover:underline">Privacy Policy</a></p>
        </div>

        {/* Divider */}
        <div className="relative py-4 flex items-center">
            <div className="grow border-t border-dotted border-[#8B3D55]/30"></div>
            <span className="shrink mx-4 text-[#8B3D55]/50 text-xs">or</span>
            <div className="grow border-t border-dotted border-[#8B3D55]/30"></div>
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
         <div className="mt-8 text-center text-sm text-[#8B3D55]/80 space-y-1">
            <p>Already have an account? <span onClick={() => navigate('/admin/login')} className="font-bold hover:underline cursor-pointer">Log In</span></p>
         </div>
         
         <div className="mt-8 text-center text-[10px] text-[#8B3D55]/60">
             <p>© 2024 eya · All rights reserved.</p>
         </div>

      </div>
    </div>
  )
}
