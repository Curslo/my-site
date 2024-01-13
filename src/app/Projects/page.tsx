import React from 'react'
import ProjectsNavBar from '@/components/ProjectsNavBar'
import ProjectsCard from '@/components/ProjectsCard'
import { projects } from '../../../data/Projects'
const Projects = () => {
  return (
    <div className='px-5 py-2 overflow-y-scroll' style={{height:'65vw'}}>
      <ProjectsNavBar/>
      <div className='grid grid-cols-12 gap-4 my-3 relative'>
        {/* List of Projects done */}
        {projects.map((project) => (
          <div className='col-span-12 bg-gray-200 dark:bg-gray-900 rounded-lg sm:col-span-6 lg:col-span-4 p-2' key={project.id}>
            <ProjectsCard project = {project}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects