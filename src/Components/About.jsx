import React from 'react'
import './About.css'
export default function About() {
  return (
   <section className="AboutSection" id="about">
    <div className="AboutContent">
        <h2 className="sectionTitle">About me</h2>
        <span className="sectionSubtitle">My introduction</span>
    </div>
    <div className="aboutContainer container">
        <img src="./assets/Profile.jpg" alt="" className='aboutImg' />
        <div className="aboutData">   
            <p className="aboutDescription">
               {/* As a Junior web Developer. I possess an impressive arsenal of skills in HTML, CSS, JavaScript, ReactJs, TailwindCss, and Bootstrap.
                 Expert in designing and maintaining responsive websites that offer a smooth user experience.
                 My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code.
                  I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.  */}
                  As a Junior web Developer.I enjoy bridging the gap between engineering and design - 
                  combining my technival knowledge with my keen eye for design to create a beautiful product.
                   My goal is to always build web apps that are scalable under the hood while providing engaging pixel-perfect user experience.
                   <br/><br/>
                   <span>When I'm not in front of a computer screen.</span> I'm probably travelling or playing video games.
               </p>
            <a download="" href="./assets/Resume.pdf" className="CVButton">
                Download CV
            </a>
        </div>
    </div>
   </section>
  )
}
