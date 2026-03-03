import React from 'react'
import { logout } from '../redux/authSlice'
import { useDispatch } from 'react-redux'
import { logoutController } from '../services/auth.api'

const Navbar = () => {
    const dispatch = useDispatch();
    const handleLogout = async() =>{
        try {
            await logoutController();
           console.log("Logout chala!")
        } catch (error) {
            console.log("Logout API Failed!")
            
        }
         dispatch(logout());
    }


  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
    
    {/* Logo / App Name */}
    <h1 className="text-xl font-bold text-gray-800">
      E-Commerce Admin
    </h1>

    {/* Right Section */}
    <div className="flex items-center gap-4">
      
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg 
                   hover:bg-red-600 transition duration-200 
                   font-medium"
      >
        Logout
      </button>

    </div>
  </nav>

  )
}

export default Navbar