
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
                <text>Copyright © 2023 that car place. All Rights Reserved. </text>
                <br/>
                <text>User Agreement | Financial and Other Privacy Notices |</text>
                <br/> 
                <text>Do Not Sell My Info | Code of Conduct | Responsible Disclosure | Accessibility</text>
        </div>
    );
}

export default Footer;