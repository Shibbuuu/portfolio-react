import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import shibbuu from "../../assets/Shibbuu.svg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={shibbuu} alt="" />{" "}
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
            Hi, I'm Shiv Singh, a passionate web developer with a fresh perspective and a 
            drive to learn and grow in the tech industry. I recently completed my B.Tech from 
            Inderprastha Engineering College, Ghaziabad,
             in July 2024, and I'm excited to start my career in web development.
            </p>
            <p>
            I specialize in building responsive and dynamic web applications using technologies
             like React, JavaScript, TypeScript, HTML5, and CSS3. My approach focuses on writing clean, efficient 
            code and creating user-friendly experiences that meet modern web standards.
            </p>
            <p>
            As a newcomer to the field, I bring a strong foundation in programming and a willingness
             to tackle new challenges. I’m always eager to 
            expand my skill set, explore emerging technologies, and contribute to innovative projects.
            </p>
          </div>
          <div className="about-skils">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "70%" }} />
            </div>

            <div className="about-skill">
              <p>Javascript</p> <hr style={{ width: "60%" }} />
            </div>

            <div className="about-skill">
              <p>Next JS</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
        <hr />
        
      </div>
    </div>
  );
};

export default About;
