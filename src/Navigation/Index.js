import React from 'react'
import { BrowserRouter as Router , Route , Routes } from "react-router-dom"
import Header from '../Components/Header'
import Cart from '../Pages/Cart/Index'
import Home from '../Pages/Home/Index'
import Login from '../Pages/Login/Index'
import Menu from '../Pages/Menu/Index'
import PaymentSuccess from '../Pages/Payment success/Index'
import Register from '../Pages/Register/Index'


function Navigation() {
  return (
    <div>
        <Router>
            <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/payment-success' element={<PaymentSuccess />} />

                </Routes>
        </Router>
      
    </div>
  )
}

export default Navigation
