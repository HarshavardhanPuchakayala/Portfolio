import React from 'react'
import { BiSolidBadgeCheck } from 'react-icons/bi';
export default function FrontEnd() {
  return (
    <div className='skillsContent'>
        <h3 className="skillsTitle"> Front End</h3>
        <div className="skillsBox">
            <div className="skillsGroup">
                <div className="skillsData">
                <BiSolidBadgeCheck className='Badge'/>
                    <div>
                        <h3 className="skillsName">Html</h3>
                        <span className="skillsLevel">Advance</span>
                    </div>
                </div>

                <div className="skillsData">
                <BiSolidBadgeCheck className='Badge'/>
                    <div>
                        <h3 className="skillsName">CSS</h3>
                        <span className="skillsLevel">Advance</span>
                    </div>
                </div>

                <div className="skillsData">
                <BiSolidBadgeCheck className='Badge'/>
                    <div>
                        <h3 className="skillsName">Javascript</h3>
                        <span className="skillsLevel">Intermediate</span>
                    </div>
                </div>
            </div>

            <div className="skillsGroup">
                <div className="skillsData">
                <BiSolidBadgeCheck className='Badge'/>
                    <div>
                        <h3 className="skillsName">BootStrap</h3>
                        <span className="skillsLevel">Intermediate</span>
                    </div>
                </div>

                <div className="skillsData">
                <BiSolidBadgeCheck className='Badge'/>
                    <div>
                        <h3 className="skillsName">TailWan Css</h3>
                        <span className="skillsLevel">Intermediate</span>
                    </div>
                </div>

                <div className="skillsData">
                <BiSolidBadgeCheck className='Badge'/>
                    <div>
                        <h3 className="skillsName">ReactJs</h3>
                        <span className="skillsLevel">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
