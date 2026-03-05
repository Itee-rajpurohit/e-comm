import React from 'react'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import AuthInitialiser from './components/AuthInitialiser'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm'
import ProductsPage from './pages/products/ProductsPage'

const App = () => {
  return (
    <div>
      <Navbar/>
    {/* <Register/> */}
    <Login/>
    <AuthInitialiser/>
    <ProductList/>
    <ProductForm/>
    <ProductsPage/>
    </div>
  )
}

export default App