import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/SINGH.png";
import user_logo from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>
          “Thank you for visiting my portfolio! I appreciate your time and interest. If 
           like to connect, collaborate, or have any questions, please feel free to reach out.
           I’m excited about the future of web development and would love to hear from you!”
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_logo} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @ 2024 Shiv Singh.All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
      <div className="footer-bottom"></div>
    </div>
  );
};

export default Footer;
