import React, { useState } from 'react';
import Image from './Image';
import './Header.css';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import Login from './Login/Login';

const Header = (props) => {

    const[loginIsVisiable, setLoginIsVisiable] = useState(false);

    const showLoginHandler = () => {
      setLoginIsVisiable(true);
    }
  
    const hideLoginHandler = () => {
      setLoginIsVisiable(false);
    }
  
    return (
        <>
        <div className='header'>
        <Link><Image logo={props.carTitleLogo}></Image></Link>
        <Link><span>{props.carTitle}</span></Link>        
        <NavBar 
            text1={props.text1} link1={props.link1}
            text2={props.text2} link2={props.link2}
            text3={props.text3} link3={props.link3}
            text4={props.text4} link4={props.link4}
            signInText={props.signinText}
            signOutText={props.signoutText}
            onShowLoginDialog={showLoginHandler}            
        ></NavBar>
        { loginIsVisiable && <Login onClose={hideLoginHandler}/>}
        </div>      
        </>
    );
}

export default Header;