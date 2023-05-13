import React from 'react';
import { Instagram } from '@material-ui/icons';
import { GitHub } from '@material-ui/icons';
import { Facebook } from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';
import "../styles/Footer.css";


const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <Facebook />
                <GitHub />
                <LinkedIn />
                <Instagram />
            </div>
            <p> &copy: 2023 rabba</p>
        </div>
    )
}

export default Footer;