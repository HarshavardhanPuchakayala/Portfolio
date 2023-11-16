import React from 'react'
import FrontEnd from './FrontEnd'
import BackEnd from './BackEnd'
import './Skills.css'
export default function Skills() {
  return (
    <section className="skillsSection" id="Skills">
      <div className="skillsHeaderContent">
        <h2 className="sectionTitle">Skills</h2>
        <span className="sectionSubtitle">
            My Technical level
        </span>
        </div>
        <div className="skillsContainer container grid">
            <FrontEnd/>
            <BackEnd/>
        </div>
    </section>
  )
}
