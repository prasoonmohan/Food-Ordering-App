import React from 'react'
import foody from "../assets/images/foody.png"
import cartIcon from "../assets/icons/cart.svg"
import { Link } from "react-router-dom"
 
function Header() {
  return (
    <nav >
    <div className="container">
        <div className="logo-wrapper">
        <Link to='/'>
            <img src={foody} alt="logo" className='logo'/>
        </Link>  
        </div>
        <div className="nav-menu-wrapper">
            <div className="nav-home">
            <Link to="/" className='li '>Home</Link>
            <Link to="#about" className='li'>About</Link>
            </div>
            <Link to="/cart" className='li' >
                <img src={cartIcon} alt="cart" />
            </Link>
            <Link to="/login" className='li'>Log In</Link>
            <Link to="/register" className='li'>Sign Up</Link>
        </div>

    </div>
  </nav>
  )
}

export default Header