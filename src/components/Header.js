import Image from './Image';
import './Header.css';
import NavBar from './NavBar';
import { Outlet, Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <>
        <div className='header'>
        <Link><Image logo={props.carTitleLogo}></Image></Link>
        <Link><text>{props.carTitle}</text></Link>
        <NavBar 
            text1={props.text1} link1={props.link1}
            text2={props.text2} link2={props.link2}
            text3={props.text3} link3={props.link3}
            text4={props.text4} link4={props.link4}
        ></NavBar>
        </div>
        <Outlet />
        </>
    );
}

export default Header;