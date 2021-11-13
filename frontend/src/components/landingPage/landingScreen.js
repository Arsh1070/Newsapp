import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";
import logoLand from "./land.png";

const LandingScreen = () => {
  return (
    <>
      <div className="main">
        <div className="container_land">
          <div className="cont_items">
            <img
              className="lanLogo"
              src={logoLand}
              alt="logo"
              width="70px"
              height="70px"
            ></img>
            <h1 className="head_land">
              Welcome to News<span>App</span>
            </h1>
            <p className="sub_line">All news at one place</p>
            <div>
              <Link to="/register">
                <button className="button_land">Signup</button>
              </Link>
            </div>
            <div>
              <Link to="/login">
                <button className="button_land">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingScreen;
