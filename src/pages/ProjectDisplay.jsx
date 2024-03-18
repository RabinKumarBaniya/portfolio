
import {useParams} from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import '../styles/ProjectDisplay.css'
import see  from '../assets/see.svg'; 
import { Facebook, Instagram, LinkedIn } from "@material-ui/icons";

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
  return (
    <>
      <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image}  />
        <p>Tech : {project.Tech}</p>
        <p>Click Magnifying Glass Below ⬇️</p>
    </div>
    <a href={project.link}  target="_blank" rel="noopener noreferrer">
            <img src={see} alt='React Icon' width='70' height='70' className='icon'/> 
    </a>
    </>
  )
}

export default ProjectDisplay