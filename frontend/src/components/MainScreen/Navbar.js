import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import logo from "../Images/Logo.png";

function Navbar({ setCat }) {
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
          <NavLink
            to="/general"
            className="lists"
            activeClassName="active"
            onClick={() => setCat("general")}
          >
            <li>General</li>
          </NavLink>
          <NavLink
            to="/general"
            className="lists"
            onClick={() => setCat("business")}
          >
            <li>Business</li>
          </NavLink>
          <NavLink
            to="/general"
            className="lists"
            onClick={() => setCat("entertainment")}
          >
            <li>Entertainment</li>
          </NavLink>
          <NavLink
            to="/general"
            className="lists"
            onClick={() => setCat("sports")}
          >
            <li>Sports</li>
          </NavLink>
          <NavLink
            to="/general"
            className="lists"
            onClick={() => setCat("technology")}
          >
            <li>Technology</li>
          </NavLink>
          <NavLink
            to="/general"
            className="lists"
            onClick={() => setCat("science")}
          >
            <li>Science</li>
          </NavLink>
          <NavLink
            to="/general"
            className="lists"
            onClick={() => setCat("health")}
          >
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
