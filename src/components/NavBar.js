import classes from './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div className='navbar'>
             <div>
                <NavLink to={props.link1} className={({ isActive }) => isActive ? classes.active : undefined} end>{props.text1}</NavLink>
                <NavLink to={props.link2} className={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined}>{props.text2}</NavLink>
                <NavLink to={props.link3} className={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined}>{props.text3}</NavLink>
                <NavLink to={props.link4} className={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined} style={{paddingLeft: "700px"}}>{props.text4}</NavLink>
            </div> 
        </div>
    );
}

export default NavBar;