import React from 'react'
import {Link} from "react-router-dom"
import Button from './Elements/Buttons'

function Banner() {
  return (
    <div className='banner-container'>
      <div className="banner-description">
        <h2 className="des-title">Food Ordering <span> Made </span> Easy</h2>
        <p className="des-des">
            Get Started Today!
        </p>
        <div className="btn-container">
            <Button> <span className='btn-span' > Order Now </span> </Button>
            <Link to="/menu" className='see-menu'>See menu</Link>
        </div>
      </div>
      <div className="banner-image">
        <img src={require('../assets/images/banner.png')} alt="" />
      </div>
    </div>
  )
}

export default Banner
