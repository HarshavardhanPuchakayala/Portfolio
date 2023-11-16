import React, { useState } from 'react'
import { FcPuzzle } from 'react-icons/fc';
import ProjectList from '../Components/ProjectList'
import Project from '../Components/Project'
import ProjectsData from '../Components/ProjectData'
import './Projects.css'
const allNavList = [ 'all', ...new Set(ProjectsData.map((Project)=>Project.category))]
export default function Projects() {
  const [ProjectItem,setProjectItem] = useState(ProjectsData);
  const [navList,setCategories] = useState(allNavList);
  const filterItem =(category) => {
    if(category === 'all'){
      setProjectItem(ProjectsData);
      return;
    }
    const newProjectItems = ProjectsData.filter(
      (item) => item.category === category
    );
    setProjectItem(newProjectItems);
  }
  return (
    <>
    <section className="ProjectsSection" id="Projects">
        <div className="ProjectsHeaders">
            <h1 className="ProjectsHeading">
                Projects
            </h1>
            <p className="ProjectsSubHeading">
                Each Project is a Unique Pieace of Development <FcPuzzle className="Pieace"/>
            </p>
        </div>

        <ProjectList
        list={navList}
        filterItem={filterItem}/>
        <div className="ProjectContainer container" >
        <Project 
          ProjectItem={ProjectItem}/>
        </div>
        
            
    </section>
    </>
  )
}
