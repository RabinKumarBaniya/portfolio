import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';
import { projectList } from '../helpers/ProjectList';


const Projects = () => {
    return (
        <div className='projects'>
            <h1>My Personal Projects</h1>
            <div className='projectList'>
                {projectList.map((project, index) => {
                    return <ProjectCard id={index} name={project.name} image={project.image} />
                })}
            </div>

        </div>
    )
}

export default Projects;

