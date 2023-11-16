import React from 'react'
import NavBar from '../Components/NavBar'
import Header from '../Components/Header'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Qualification from '../Components/Qualification'
import Projects from '../Components/Projects'
import LatestProjects from '../Components/LatestProjects'
import Footer from '../Components/Footer'
import Contact from './Contact'
export default function PortfolioMain() {
  return (
    <>
    <NavBar/>
   <main className='main'>
    <Header/>
    <LatestProjects/>
    <About/>
    <Skills/>
    <Qualification/>
    <Projects/>
    <Contact/>
    <Footer/>
   </main>
    </>
  )
}
