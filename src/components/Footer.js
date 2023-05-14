import React from 'react';
import { Instagram, Facebook, Mail, Phone } from '@material-ui/icons';
import "../styles/Footer.css";


const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <Facebook />
                <Mail />
                <Instagram />
            </div>
            <p>&copy; 2023 rabba | <Phone style={{ fontSize: '16px' }} /> 9823021304</p>
        </div>
    )
}

export default Footer;

