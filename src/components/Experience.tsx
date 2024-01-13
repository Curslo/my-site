import React from 'react'
import { workExperience } from '../../data/Resume'
import WorkItem from './WorkItem'

const Experience = () => {
    return (
        <div>
            <h2 className="my-3 text-xl font-bold tracking-wide">Work Experience</h2>
            <div className="grid gap-4 lg:grid-cols-2">
                {workExperience.map((work) => (
                    <div className="bg-gray-200 dark:bg-gray-900 rounded-md" key={work.id} >
                        <WorkItem work={work} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience