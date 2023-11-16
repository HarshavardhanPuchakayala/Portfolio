import React from 'react'
import Social from '../Components/Social'
import { BsMouse } from 'react-icons/bs';
import { FaHandPointRight } from 'react-icons/fa';
import { AiOutlineArrowDown } from 'react-icons/ai';
import './Header.css'
export default function Header() {

  return (
    <>
    <section className='homeSection' id='home'>
        <div className='homeContainer container grid'>
            <div className="homeContent grid">
          <Social/>
            <div className="homeImg"></div>
                <div className="homeData">
                    <h5 className='Greeting'>
                    నమస్కారం
                      <img src='assets/Namaskaram.png' className='GreetingIcon'/>
                       </h5>
                    <p className="homeDescription">
                        I'm <span className="Name">Harshavardhan Puchakayala</span> a web Developer based in Hyderabad, India.
                        I love building beautiful interfaces, web apps and everything in between!
                    </p>
                    <h6 className="GetInTouch">
                        Get in touch <FaHandPointRight className="EmailArowIcon"/>
                        <a href="" className="EmailLink">
                            harshavardhan.puchakayala1@gmail.com
                        </a></h6>
                    
                </div>
            </div>
            <div className='homeScroll wheel'>
                   <BsMouse className='ScrollIcon '/>
                  <span className='homeScrollName'>Scroll Down</span>
                  <AiOutlineArrowDown className="homeScrollArrow "/>
            </div>
        </div>
    </section>
    </>
  )
}
