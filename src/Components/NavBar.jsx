import React, { useState } from 'react'
import './NavBar.css'
import Toggle from './Toggle';
export default function NavBar() {
    let Links=[
        {name:'Blog',link:"#Blog",icon:"images-outline"},
        {name:'about me',link:"#about",icon:"person-outline"},
        {name:'Skills',link:"#Skills",icon:"browsers-outline"},
        {name:'Qualification',link:"#Qualification",icon:"briefcase-outline"},
        {name:'Projects',link:"#Projects",icon:"logo-github"},
        {name:'Contact',link:"#Contact",icon:"call-outline"},
    ];
    window.addEventListener("scroll",function(){
        const header =document.querySelector(".header")
        if (this.scrollY >= 80) header.classList.add('show-header');
        else header.classList.remove('scroll-header')
    });
    const [activeNav,setActiveNav] = useState('#home')
  return (
    <header className="header" id="header">
        <nav className="nav container ">
            <a href="#home" className="navLogo">HarshaVardhan</a>
            <div className="navMenu">
            <ul className='navList' >
                {
                    Links.map((item)=>(
                        <li key={item.name} className='navItem'>
                            <a href={item.link} className={activeNav===item.link ? 'navLink activeLink':"navLink"} onClick={()=>setActiveNav(item.link)}>
                                <ion-icon name={item.icon} className="navIcon"></ion-icon>
                               <p>{item.name}</p> </a>
                        </li>
                        
                    ))
                }
                
            </ul>
            </div>
           
            <div className="Toggle">
                <Toggle/>
            </div>
            </nav>
            </header>
  )
}
