import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div className='navbar'>
             <div>
                <Link to={props.link1}>{props.text1}</Link>
                <Link to={props.link2}>{props.text2}</Link>
                <Link to={props.link3}>{props.text3}</Link>
                <Link to={props.link4} style={{paddingLeft: "700px"}}>{props.text4}</Link>
            </div> 
        </div>
    );
}

export default NavBar;