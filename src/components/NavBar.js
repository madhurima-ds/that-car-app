import React, { useContext } from "react";
import classes from "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import AuthContext from "../store/auth-context";

const NavBar = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <div className="navbar">
      <div>
        <NavLink
          to={props.link1}
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          {props.text1}
        </NavLink>
        {authCtx.isLoggedIn && (
          <NavLink
            to={props.link2}
            className={({ isActive }) =>
              isActive ? { textDecoration: "underline" } : undefined
            }
          >
            {props.text2}
          </NavLink>
        )}
        <NavLink
          to={props.link3}
          className={({ isActive }) =>
            isActive ? { textDecoration: "underline" } : undefined
          }
        >
          {props.text3}
        </NavLink>
        {!authCtx.isLoggedIn && (
          <label
            style={{ marginLeft: "700px" }}
            onClick={props.onShowLoginDialog}
          >
            SIGN-IN
          </label>
        )}
        {authCtx.isLoggedIn && (
          <Link>
            <label style={{ marginLeft: "700px" }} onClick={authCtx.onLogout}>
              SIGN-OUT
            </label>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
