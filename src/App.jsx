import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/programs/program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
     <Navbar/> 
     <Hero/>
     <div className="container">
        <Title subTitle='Our PROGRAM' title ='What We Offer'/>
        <Program/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title ='Campus Photos'/>
        <Campus/>
        <Title subTitle='Testimonials' title ='What students says'/>
        <Testimonials/>
        <Title subTitle='Contact US' title='Get in Touch'/>
        <Contact/>
        <Footer/>
        <VideoPlayer playState={playState} setPlayState={setPlayState}/>

    </div>
    </div>
  )
}

export default App
