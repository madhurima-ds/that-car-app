
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer">
            <ul>
                <li><b>Helpful Links</b></li>
                <li><Link to="/helpcenter">Help Center</Link></li>
                <li>About Us</li>
                <li>Reviews</li>
                <li>Careers</li>
                <li>Our certification process</li>
                </ul>
                <span>Copyright © 2023 that car place. All Rights Reserved. </span>
                <br/>
                <span>User Agreement | Financial and Other Privacy Notices |</span>
                <br/> 
                <span>Do Not Sell My Info | Code of Conduct | Responsible Disclosure | Accessibility</span>
        </div>
    );
}

export default Footer;