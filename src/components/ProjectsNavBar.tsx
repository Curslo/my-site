import React, { FunctionComponent } from 'react'
import { Category } from '../../types/page'

export const ProjectsNavItem: FunctionComponent<{data: Category | 'All', filterCategory:Function, active: string}> = ({data, filterCategory, active}) => {

  let className='cursorpointer capitalize hover:text-green-500'
  if(active === data) {className += ' text-green-500'}
  return (
    <li className={className} onClick={() => filterCategory(data)}>{data}</li>
  )
}


const ProjectsNavBar: FunctionComponent<{filterCategory: Function, active: string}> = (props) => {
  return (
    <div className='px-3 py-2 space-x-3 overflow-x-auto list-none flex'>
      <ProjectsNavItem data='All'{...props}/>
      <ProjectsNavItem data='CSS'{...props}/>
      <ProjectsNavItem data='Express.js'{...props}/>
      <ProjectsNavItem data='Firebase'{...props}/>
      <ProjectsNavItem data='HTML'{...props}/>
      <ProjectsNavItem data='Javascript'{...props}/>
      <ProjectsNavItem data='Mongodb'{...props}/>
      <ProjectsNavItem data='Nest.js'{...props}/>
      <ProjectsNavItem data='Next.js'{...props}/>
      <ProjectsNavItem data='Node.js'{...props}/>
      <ProjectsNavItem data='React.js'{...props}/>
      <ProjectsNavItem data='SQL'{...props}/>

    </div>
  )
}

export default ProjectsNavBar