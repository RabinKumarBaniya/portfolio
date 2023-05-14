import React from 'react';
import { Instagram, Facebook, Mail, Phone } from '@material-ui/icons';
import "../styles/Footer.css";


const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <a href="https://www.facebook.com/Robin.chhetri11/">
                    <Facebook />
                </a>
                <a href="mailto:rabinkrbaniya09@gmail.com">
                    <Mail />
                </a>
                <a href="https://www.instagram.com/rabinkumarbaniya/">
                    <Instagram />
                </a>
            </div>
            <p>&copy; 2023 rabba | <Phone style={{ fontSize: '16px' }} /> 9823021304</p>
        </div>
    )
}

export default Footer;

