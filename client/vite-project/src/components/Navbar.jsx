import React from 'react'
import { logout } from '../redux/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { logoutController } from '../services/auth.api'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth); // check login

  const handleLogout = async () => {
    try {
      await logoutController();
      console.log("Logout chala!");
    } catch (error) {
      error.alert("Error in logout");
    }

    dispatch(logout());
  }

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

      {/* Logo */}
      <h1 className="text-xl font-bold text-gray-800">
        E-Commerce Admin
      </h1>

      <div className="flex items-center gap-4">

        {!token ? (
          <>
            <Link
              to="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Register
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        )}

      </div>
    </nav>
  )
}

export default Navbar