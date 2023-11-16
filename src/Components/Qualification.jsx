import React, { useState } from 'react'
 import { FaBriefcase,FaGraduationCap } from 'react-icons/fa';
import {  SlCalender } from 'react-icons/sl';
import './Qualification.css'
export default function Qualification() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab =(index)=>{
        setToggleState(index);
    };
  return (
    <section className="qualificationSection" id='Qualification'>
        <div className="qualificationHeaderContent">
        <h2 className="sectionTitle">Qualification</h2>
        <span className="sectionSubtitle">My Personal Journey</span>
        </div>
        <div className="qualificationContainer container">
            <div className="qualificationTabs">
            <div className={toggleState === 1 ? "qualificationButton qualificationActive button--flex":
            "qualificationButton button--flex"
            } onClick={()=>toggleTab(1)}>
               <FaGraduationCap className='qualificationIcon'/>
                Education
            </div>

            <div className={toggleState === 2 ? "qualificationButton qualificationActive button--flex":"qualificationButton button--flex"} onClick={()=>toggleTab(2)}>
                <FaBriefcase className='qualificationIcon'/>
                Experience
            </div>
            </div> 

            <div className="qualificationSections">
                <div className={toggleState ===1 ? "qualificationContent qualificationContentActive":"qualificationContent"}>
                    <div className="qualificationData">
                        <div >
                            <h3 className="qualificationTitle">Guru Nanak Institutions Technical Campus (GNITC)</h3>
                            <span className="qualificationSubtitle"> Computer Science Engineering</span>
                            <div className="qualificationCalender">
                               < SlCalender/> 2019 - 2023
                            </div>
                        </div>
                        <div>
                            <span className="qualificationRounder"></span>
                            <span className="qualificationLine"></span>
                        </div>
                    </div>

                    <div className="qualificationData">
                        <div></div>

                        <div>
                            <span className="qualificationRounder"></span>
                            <span className="qualificationLine"></span>
                        </div>
                        <div >
                            <h3 className="qualificationTitle">Resonance Junior College</h3>
                            <span className="qualificationSubtitle">intermediate</span>
                            <div className="qualificationCalender">
                            < SlCalender/>  2017 - 2019
                            </div>
                        </div>
                       
                    </div>


                    <div className="qualificationData">
                        <div >
                            <h3 className="qualificationTitle">SVM Central Public School</h3>
                            <span className="qualificationSubtitle">10th</span>
                            <div className="qualificationCalender">
                            < SlCalender/>  2016- 2017
                            </div>
                        </div>
                        <div>
                            <span className="qualificationRounder"></span>
                          
                        </div>
                    </div>
                </div>


                <div className={toggleState === 2 ? "qualificationContent qualificationContentActive":"qualificationContent"}>
                    <div className="qualificationData">
                        <div >
                            <h3 className="qualificationTitle"> Web Developer Intern</h3>
                            <span className="qualificationSubtitle"> unified mentor pvt ltd</span>
                            <div className="qualificationCalender">
                            < SlCalender/>  Nov 2023- present
                            </div>
                        </div>
                        <div>
                            <span className="qualificationRounder"></span>
                            <span className="qualificationLine"></span>
                        </div>
                    </div>

                    <div className="qualificationData">
                        <div></div>

                        <div>
                            <span className="qualificationRounder"></span>
                            <span className="qualificationLine"></span>
                        </div>
                        <div >
                            <h3 className="qualificationTitle">Web Developer Intern</h3>
                            <span className="qualificationSubtitle"> suvidha foundation</span>
                            <div className="qualificationCalender">
                            < SlCalender/>  Oct 2023 - Nov 2023
                            </div>
                        </div>
                       
                    </div>


                    <div className="qualificationData">
                        <div >
                            <h3 className="qualificationTitle"> WEB developer Intern</h3>
                            <span className="qualificationSubtitle"> skillvertex </span>
                            <div className="qualificationCalender">
                            < SlCalender/>  March 2022 - Apr 2022
                            </div>
                        </div>
                        <div>
                            <span className="qualificationRounder"></span>
                            
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>

    </section>
  )
}
