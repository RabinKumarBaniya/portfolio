import React from 'react';
import { LinkedIn } from '@material-ui/icons';
import { Mail } from '@material-ui/icons';
import { GitHub } from '@material-ui/icons';
import { CloudDownload } from '@material-ui/icons';
import "../styles/Home.css";

const Home = () => {
    return (
        <div className='home'>
            <div className='about'>
                <h2>Hi, I'm Rabin Kumar Baniya</h2>
                <div className='prompt'>
                    <p>Enthusiastic in developing Web and Mobile Application.</p>
                    <a href="https://www.linkedin.com/in/rabin-kumar-baniya-156b45237">
                        <LinkedIn />
                    </a>
                    <a href="mailto:rabinkrbaniya09@gmail.com">
                        <Mail />
                    </a>
                    <a href="https://github.com/RabinKumarBaniya">
                        <GitHub />
                    </a>
                    <a href="https://drive.google.com/file/d/1eCdXLlvLdrE5peu9JdXp1A6cgvrUtt8o/view?usp=drive_link">
                        <CloudDownload />
                    </a>
                </div>

            </div>
            <div className='skills'>
                <ol className='list'>
                    <li className='item'>
                        <h2>Front-End</h2>
                        <span>HTML, CSS, ReactJS, Flutter, Bootstrap, MaterialUI, Redux, TailwindCSS</span>
                    </li>
                    <li className='item'>
                        <h2>Languages</h2>
                        <span>JavaScript, Dart, C, C++</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home;