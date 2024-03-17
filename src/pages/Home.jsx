import { LinkedIn, Email, GitHub } from "@material-ui/icons"
import reactjs from '../assets/reactjs.svg'; 
import javascript from '../assets/javascript.svg'; 
import html  from '../assets/html.svg'; 
import css from '../assets/css.svg'; 
import express from '../assets/express.svg'; 
import firebase from '../assets/firebase.svg'; 
import  mongodb from '../assets/mongodb.svg'; 
import node from '../assets/node.svg'; 
import redux from '../assets/redux.svg'; 
import tailwind from '../assets/tailwind.svg';
import "../styles/Home.css" 

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, I am Rabin Kumar Baniya</h2>
        <div className='prompt'>
          <p>A software developer with a passion for learing and creating</p>
          <LinkedIn />
          <GitHub />
          <Email />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <div className='skills-icons'>
        <img src={html} alt='React Icon' width='70' height='70' />
        <img src={css} alt='React Icon' width='70' height='70' />
        <img src={javascript} alt='React Icon' width='70' height='70' />
        <img src={mongodb} alt='React Icon' width='70' height='70' />
        <img src={express} alt='React Icon' width='70' height='70' />
        <img src={reactjs} alt='React Icon' width='70' height='70' />
        <img src={node} alt='React Icon' width='70' height='70' />
        <img src={redux} alt='React Icon' width='70' height='70' />
        <img src={tailwind} alt='React Icon' width='70' height='70' />
        <img src={firebase} alt='React Icon' width='70' height='70' />
        </div>
      </div>
    </div>
  )
}

export default Home