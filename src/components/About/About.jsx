import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={() => {setPlayState(true)}} />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor, sit. Dolores ipsa aut in, voluptate ipsum, desesimus saepe quisquam. Incidunt neque impedit doloribus perferendis necessitatibus culpa nostrum aliquam tempora officia!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tempora, autem in optio non cum cumque de facilis expedita laborum amet ab repudiandae dolore voluptatibus nam corrupti sapiente iure est! Explicabo, distinctio quae.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae tempora asper. Repellat, at delectus?</p>
      </div>
    </div>
  )
}

export default About
