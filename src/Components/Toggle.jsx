import React from 'react'

export default function Toggle() {
    function setDarkMode(){
        document.querySelector('body').setAttribute('DataTheme','Dark')
        localStorage.setItem('selectedTheme','Dark')
    };
    function setLightMode(){
        document.querySelector('body').setAttribute('DataTheme','Light')
        localStorage.setItem('selectedTheme','Light')
    };
    const selectedTheme = localStorage.getItem('selectedTheme');
    if(selectedTheme === 'Dark'){
        setDarkMode();
    }
    const toggleTheme = (e) =>{ (e.target.checked) ?  setDarkMode(): setLightMode()}
  return (
    <>
    <input className='DarkModeInput' type='checkbox'id='darkmode-toggle'
                onChange={toggleTheme}
                />
    <label className='DarkModeLabel' for='darkmode-toggle'>
            <p>
            <ion-icon name="sunny-outline"></ion-icon>
            </p>
            <h6>
            <ion-icon name="moon-outline" className="Moon"></ion-icon>
            </h6>
            
            </label>
    </>
  )
}
