import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { FaServer,FaNotesMedical } from 'react-icons/fa';
import { PiCoffeeFill } from 'react-icons/pi';
import {BsCart4} from 'react-icons/bs'
import './LatestProjects.CSS'
export default function LatestProjects() {
  return (
    <section className="LatestProjectsSection" id='Blog'>
            <div className="LatestProjectsHeader">
                <h1 className="LatestProjectHeading">
                    Latest Projects
                </h1>
                <p>
                upcoming / ongoing projects.
                </p>
            </div>

            <div className="LatestProjectContent">
                <div className="LatestProjectsImgContainer">

                </div>
                <div className="LatestProjectsDescription">
                    <h6 className='LatestProjectTitle'>
                            Cafe Street <PiCoffeeFill className="CoffeIcon"/>
                    </h6>
                    <p className="LatestProjectText">
                    Cafe Street brings the coffee shop experience online, combining the ease of ordering with the charm of a virtual cafe.It is a user-friendly platform enabling customers to conveniently order their favorite coffee by firebase live database and user authentication. Developed using React, it boasts a sleek single-page application design for a seamless experience.
                    </p>
                    <div className="LatestProjectsLanguages">
                    <h5>
                            React
                    </h5>
                    <h5>
                        FireBase
                    </h5>
                    </div>
                    <div className="LatestProjectsLiveServerCode">
                        <a href="https://github.com/HarshavardhanPuchakayala/cafe-street">
                        <AiFillGithub className='CodeIcon'/>
                        Code
                        </a>
                        <a href="https://cafe-street-harsha.netlify.app/">
                        <FaServer className="CodeIcon"/>
                        Live Demo
                        </a>
                    </div>
                </div>
            </div>


            <div className="LatestProjectContent Reverse">
                <div className="LatestProjectsImgContainerEcommerce">

                </div>
                <div className="LatestProjectsDescription ReverseDescription">
                    <h6 className='LatestProjectTitle ReverseTitle'>
                            Exclusive <BsCart4 className="ExclusiveIcon"/>
                    </h6>
                    <p className="LatestProjectText">
                    Exclusive is an online store crafted with React, offering a seamless shopping experience. Firebase handles secure user authentication and data storage. Enjoy easy navigation, responsive design, and quick checkout. Explore a vast range of products, all accessible with a user-friendly interface.Responsive design ensures a seamless experience across devices. Exclusive is where React and Firebase come together to redefine your online shopping experience
                    </p>
                    <div className="LatestProjectsLanguages ReverseContent">
                    <h5>
                            React
                    </h5>
                    <h5>
                        FireBase
                    </h5>
                    <h5>
                        TailwanCss
                    </h5>
                    </div>
                    <div className="LatestProjectsLiveServerCode ReverseContent">
                        <a href="https://github.com/HarshavardhanPuchakayala/Exclusive">
                        <AiFillGithub className='CodeIcon'/>
                        Code
                        </a>
                        <a href="https://exclusive-harsha.netlify.app/">
                        <FaServer className="CodeIcon"/>
                        Live Demo
                        </a>
                    </div>
                </div>
            </div>


            <div className="LatestProjectContent">
                <div className="LatestProjectsImgContainerDoctor">

                </div>
                <div className="LatestProjectsDescription">
                    <h6 className='LatestProjectTitle'>
                    Pharma <FaNotesMedical className="DoctorIcon"/>
                    </h6>
                    <p className="LatestProjectText">
                    Pharma is user-friendly online platform, built with React and powered by Firebase, seamlessly enables users to book doctor appointments, schedule meetings, and conveniently purchase medications. The robust authentication system ensures secure user interactions, while Firebase efficiently handles data storage.Effortlessly manage your health needs on a single platform, from scheduling appointments to ordering medicines, all in one place. Pharma leverages modern technology to streamline healthcare services, making it accessible and convenient for everyone. 
                    </p>
                    <div className="LatestProjectsLanguages">
                    <h5>
                            React
                    </h5>
                    <h5>
                        FireBase
                    </h5>
                    <h5>
                        TailwanCss
                    </h5>
                    </div>
                    <div className="LatestProjectsLiveServerCode">
                        <a href="https://github.com/HarshavardhanPuchakayala/pharma">
                        <AiFillGithub className='CodeIcon'/>
                        Code
                        </a>
                        <a href="https://pharma-harsha1.netlify.app/">
                        <FaServer className="CodeIcon"/>
                        Live Demo
                        </a>
                    </div>
                </div>
            </div>
    </section>
  )
}
