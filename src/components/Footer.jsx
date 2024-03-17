import { Facebook, Instagram,LinkedIn } from "@material-ui/icons"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className="socialMedia">
            <Facebook />
            <Instagram />
            <LinkedIn />
        </div>
        <p> &copy; 2024 rabinkumarbaniya.com.np</p>
    </div>
  )
}

export default Footer