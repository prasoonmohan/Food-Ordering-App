import React from 'react'
import { BrowserRouter as Router , Route , Routes } from "react-router-dom"
import Header from '../Components/Header'
import Cart from '../Pages/Cart/Index'
import Home from '../Pages/Home/Index'
import Menu from '../Pages/Menu/Index'

function Navigation() {
  return (
    <div>
        <Router>
            <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/cart' element={<Cart />} />
                    
                </Routes>
        </Router>
      
    </div>
  )
}

export default Navigation
