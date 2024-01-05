import React from 'react'
import Button from './Button'

function HeroSection() {
  return (
    <div className='hero_section'>
        <img src="/images/3.jpg" alt="bg" />
        <div className="hero_content">
            <span className='color'>Chair Collection 2024</span>
            <h1>Welcome To FurnitureHub</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, vero ipsam quae amet mollitia error nesciunt soluta nostrum minima voluptate possimus similique veritatis rem nihil consequatur dolorem sunt ut. Nobis?</p>
            <Button btnTxt="Shop now" />
        </div>
    </div>
  )
}

export default HeroSection
