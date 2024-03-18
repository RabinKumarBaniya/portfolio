import { Facebook, Instagram, LinkedIn } from "@material-ui/icons";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className="socialMedia">
            <a href="https://www.facebook.com/RabinKrBaniya/" target="_blank" rel="noopener noreferrer">
                <Facebook />
            </a>
            <a href="https://www.instagram.com/rabinkumarbaniya/" target="_blank" rel="noopener noreferrer">
                <Instagram />
            </a>
            <a href="https://www.linkedin.com/in/rabin-kumar-baniya-156b45237" target="_blank" rel="noopener noreferrer">
                <LinkedIn />
            </a>
        </div>
        <p> &copy; rabinkumarbaniya.com.np</p>
    </div>
  );
}

export default Footer;
