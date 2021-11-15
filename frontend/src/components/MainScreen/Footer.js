import React from "react";
import brand from "../Images/Logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="brand">
          <img src={brand} alt="logo" width="50px" height="50px"></img>
          <h2>Newsapp Private Limited</h2>
        </div>
        <div className="address">
          <h5 className="footHead">Contact us !</h5>
          <p className="contact">
            <i className="fas fa-phone-square-alt"></i>
            <span>+91</span>9587975348
          </p>
          <p className="email">
            <i className="fas fa-envelope-square"></i>
            <span></span>arshbrarasb626@gmail.com
          </p>
        </div>
        <div className="footer-2">
          <p className="copy">
            Copyright &#169; 2021 Newsapp Pvt. Ltd. All rights reserved.
          </p>
          <p className="tags">Follow us:</p>
        </div>
        <div className="tags2">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter-square"></i>
          </a>
          <a href="#">
            <i className="fab fa-github-square"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
