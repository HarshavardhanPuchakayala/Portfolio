import React, { useState } from 'react'

export default function ProjectList({list,filterItem}) {
  const [active, setActive] = useState(0);
  return (
    <div className='ProjectList'>
     {list.map((category, index) => {
      return (
        <button className={`${active === index ? 'activeWork' : ''} ProjectListItem`}
         key={index} onClick={() => {setActive(index); filterItem(category)}}>
          {category}
        </button>
      )
     })}
    </div>
  )
}
