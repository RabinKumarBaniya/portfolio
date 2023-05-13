import React from 'react';
import { Instagram } from '@material-ui/icons';
import { Facebook } from '@material-ui/icons';
import { Mail } from '@material-ui/icons';
import "../styles/Footer.css";


const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <Facebook />
                <Mail />
                <Instagram />
            </div>
            <p>&copy; 2023 rabba.com.np</p>

        </div>
    )
}

export default Footer;

