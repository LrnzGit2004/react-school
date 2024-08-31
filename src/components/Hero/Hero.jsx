import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure better education for a better world</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at eius asperiores quia facere laborum, error quo non! Architecto deleniti fugiat illum, itaque est commodi excepturi voluptatem possimus veniam culpa tenetur tempore at et numquam odio odit omnis nemo minima!</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero
