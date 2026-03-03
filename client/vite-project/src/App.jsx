import React from 'react'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import AuthInitialiser from './components/AuthInitialiser'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
    {/* <Register/> */}
    <Login/>
    <AuthInitialiser/>
    </div>
  )
}

export default App