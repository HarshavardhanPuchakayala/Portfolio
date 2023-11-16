import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal} from 'react-icons/bi';
export default function Project({ProjectItem}) {
  return (
    <>
    {ProjectItem.map((ProjectItem)=>{
        const {id,img,title,skill1,skill2,skill3,live,code} = ProjectItem;
        return(
            <div className="ProjectItems Card" key={id}>
                <div className="ProjectImgWrapper">
                    <img src={img} alt="" className='ProjectImg' />
                </div>
                <h3 className="ProjectTitle">{title}</h3>

                
                       <div className="Skillset">
                        <h4 className="Skill">{skill1}</h4>
                        <h4 className="Skill">{skill2}</h4>
                        <h4 className="Skill">{skill3}</h4>
                       </div>
                <div className="CodeIcons">
                <a href={code} target='_blank'>
                        <AiFillGithub className='CodeIcon'/>
                      <p>  Code</p>
                        </a>

                        <a href={live} target='_blank'>
                        <p>Live Demo</p>
                        <BiLinkExternal className="CodeIcon"/>
                  </a>
                </div>
            </div>
        )
    })}
    </>
  )
}
