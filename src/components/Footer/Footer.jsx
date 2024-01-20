
import "./Footer.scss";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer-section">
        <div className="footer-content">
          <ul className="footer-nav">
            <li>
              <Link className="nav-text" to={`/`}>
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className="nav-text" to={`/about`}>
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link className="nav-text" to={`/category`}>
                Categories
              </Link>
            </li>
          </ul>
          <hr className="left"></hr>
          <div className="social-icons">
            <div className="icon">
              <FaFacebook />
            </div>
            <div className="icon">
              <FaTwitter />
            </div>
            <div className="icon">
              <FaInstagram />
            </div>
            <div className="icon">
              <FaLinkedin />
            </div>
          </div>

          <hr className="right"></hr>

          <div className="copy-right-content">
            <p className="copy-right-text">© All Rights Reserved | Powered by Aryavarta Travels</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
