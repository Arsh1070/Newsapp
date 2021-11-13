import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";
import logo from "./logo.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const logout = () => {
    localStorage.removeItem("UserInfo");
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" width="50px" height="50px"></img>
        </div>
        <ul className={click ? "list-items-active" : "list-items"}>
          <NavLink exact to="/top" className="lists" activeClassName="active">
            <li>Top news</li>
          </NavLink>
          <NavLink to="/general" className="lists">
            <li>General</li>
          </NavLink>
          <NavLink to="/entertainment" className="lists">
            <li>Entertainment</li>
          </NavLink>
          <NavLink to="/sports" className="lists">
            <li>Sports</li>
          </NavLink>
          <NavLink to="/business" className="lists">
            <li>Business</li>
          </NavLink>
          <NavLink to="/technology" className="lists">
            <li>Technology</li>
          </NavLink>
          <NavLink to="/science" className="lists">
            <li>Science</li>
          </NavLink>
          <NavLink to="/health" className="lists">
            <li>Health</li>
          </NavLink>
          <NavLink to="/" className="lists" onClick={logout}>
            <li>Logout</li>
          </NavLink>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
