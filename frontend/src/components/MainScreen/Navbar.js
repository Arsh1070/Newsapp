import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import logo from "../Images/Logo.png";

function Navbar({ setCat }) {
  const Navigate = useNavigate();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const logout = () => {
    localStorage.removeItem("token");
    Navigate("/");
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" width="50px" height="50px"></img>
        </div>
        <ul className={click ? "list-items-active" : "list-items"}>
          <NavLink
            to="/dashboard/general"
            className={(navData) => (navData.isActive ? "active" : "")}
            style={{ padding: "20px", color: "fff", textDecoration: "none" }}
            onClick={() => setCat("general")}
          >
            <li>General</li>
          </NavLink>
          <NavLink
            to="/dashboard/general"
            className={(navData) => (navData.isActive ? "active" : "")}
            style={{ padding: "20px", color: "fff", textDecoration: "none" }}
            onClick={() => setCat("business")}
          >
            <li>Business</li>
          </NavLink>
          <NavLink
            to="/dashboard/general"
            className={(navData) => (navData.isActive ? "active" : "")}
            style={{ padding: "20px", color: "#fff", textDecoration: "none" }}
            onClick={() => setCat("entertainment")}
          >
            <li>Entertainment</li>
          </NavLink>
          <NavLink
            to="/dashboard/general"
            className={(navData) => (navData.isActive ? "active" : "")}
            style={{ padding: "20px", color: "#fff", textDecoration: "none" }}
            onClick={() => setCat("sports")}
          >
            <li>Sports</li>
          </NavLink>
          <NavLink
            to="/dashboard/general"
            className={(navData) => (navData.isActive ? "active" : "")}
            style={{ padding: "20px", color: "#fff", textDecoration: "none" }}
            onClick={() => setCat("technology")}
          >
            <li>Technology</li>
          </NavLink>
          <NavLink
            to="/dashboard/general"
            className={(navData) => (navData.isActive ? "active" : "")}
            style={{ padding: "20px", color: "#fff", textDecoration: "none" }}
            onClick={() => setCat("science")}
          >
            <li>Science</li>
          </NavLink>
          <NavLink
            to="/dashboard/general"
            className={(navData) => (navData.isActive ? "active" : "")}
            style={{ padding: "20px", color: "#fff", textDecoration: "none" }}
            onClick={() => setCat("health")}
          >
            <li>Health</li>
          </NavLink>
          <NavLink
            to="/"
            className={(navData) => (navData.isActive ? "active" : "")}
            style={{ padding: "20px", color: "#fff", textDecoration: "none" }}
            onClick={logout}
          >
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
