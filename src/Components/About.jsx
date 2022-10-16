import React from 'react'
import aboutImage from "../assets/images/about-image.png"

function About() {
  return (
    <div>
      <div className="about-container" id='about'>
        <div className="about-des">
          <h3 className="title">
            About Us
          </h3>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi ipsum minima vero consectetur, quam numquam tempora eius doloribus doloremque optio provident autem? Incidunt voluptas sint libero laborum nulla quae doloribus excepturi quia, dolorem ratione officiis sequi modi numquam rerum recusandae nobis eveniet at asperiores architecto eaque nesciunt! Quam laborum sunt nobis animi hic nisi distinctio. Blanditiis facilis vero, alias quaerat facere sunt voluptatem ut dolores error expedita! Cupiditate voluptatem quis nihil quam, dolorem eveniet doloremque voluptatum ratione ab veniam!
          </p>
        </div>
        <div className="about-img">
          <img src={aboutImage} alt="image" />
        </div>
      </div>
    </div>
  )
}

export default About
