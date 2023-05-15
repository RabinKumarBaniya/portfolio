import React from 'react';
import { useParams } from 'react-router-dom';
import { projectList } from '../helpers/ProjectList';
import { GitHub } from '@material-ui/icons';
import '../styles/ProjectDisplay.css';


const ProjectDisplay = () => {
    const { id } = useParams();
    const project = projectList[id]
    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image} />
            <p>{project.skills}</p>
            <a href={project.github} target="_blank">
                <GitHub />
            </a>
            <a href={project.website} target="_blank">
                Demo
            </a>

        </div>
    )
}

export default ProjectDisplay;