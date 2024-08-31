import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {

  const slider = useRef();
  let tx = 0;
 
  //créer les fonctions de slides avant et arriere -On va jouer avec les Widht et l'attribut CSS Transform : TranslateX()
  const slideAvant = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }
  const slideArriere = () => {
    
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
    
  }


  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideAvant} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideArriere} />
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Lorryl Eric</h3>
                            <span>Lorem, ipsum dolor.</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minima incidunt aliquam, quam corporis dignissimos officia tenetur saepe inventore et veniam ullam, quae, sunt tempora?</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Lorenzo Sobze</h3>
                            <span>Lorem, ipsum dolor.</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minima incidunt aliquam, quam corporis dignissimos officia tenetur saepe inventore et veniam ullam, quae, sunt tempora?</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Ronald Rigs</h3>
                            <span>Lorem, ipsum dolor.</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minima incidunt aliquam, quam corporis dignissimos officia tenetur saepe inventore et veniam ullam, quae, sunt tempora?</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Rime Oscar</h3>
                            <span>Lorem, ipsum dolor.</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minima incidunt aliquam, quam corporis dignissimos officia tenetur saepe inventore et veniam ullam, quae, sunt tempora?</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
