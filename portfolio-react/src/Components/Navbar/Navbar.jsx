import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/SINGH.png";
import underline from '../../assets/nav_underline.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  
  const [menu,setMenu]=useState("home");
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li onClick={()=>setMenu("home")}> <AnchorLink className="anchor-link" offset={50} href="#home"><p>Home</p></AnchorLink> {menu==="home"?<img src={underline} alt="" />:<></>}</li>
        <li onClick={()=>setMenu("aboutme")}> <AnchorLink className="anchor-link" offset={50} href="#about"><p>About Us</p></AnchorLink>{menu==="aboutme"? <img src={underline} alt="" />:<></> }</li>
        <li onClick={()=>setMenu("portfolio")}> <AnchorLink className="anchor-link" offset={50} href="#work"><p>Portfolio</p></AnchorLink>{menu==="portfolio"? <img src={underline} alt="" />:<></> }</li>
        <li onClick={()=>setMenu("contact")}> <AnchorLink className="anchor-link" offset={50} href="#contact"><p>Contact Us</p></AnchorLink>{menu==="contact" ?<img src={underline} alt="" />:<></> }</li>
        <li onClick={()=>setMenu("services")}> <AnchorLink className="anchor-link" offset={50} href="#services"><p>Services</p></AnchorLink> {menu==='services'? <img src={underline} alt="" />:<></> }</li>
      </ul>
      
      <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
    </div>
  );
};

export default Navbar;
