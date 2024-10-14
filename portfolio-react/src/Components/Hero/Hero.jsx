import React from "react";
import "./Hero.css";
import shibbuu from'../../assets/Shibbuu.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={shibbuu} alt="" />
      <h1> <span>I'm Shiv Singh</span>, <br />Frontend web-developer based in India.</h1>   
      <p>
        I am a Frontend Web-developer from Ghaziabad, Uttar Pradesh. <br /> I am a Fresher looking for job in frontend.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
