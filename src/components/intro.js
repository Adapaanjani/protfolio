import React from "react";
import "./styles/intro.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Intro = () => {
return (
  <div classNmae="intro-container">
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <span >Hy! I Am</span>
          <span>Anjani Naga Sai Satya Sri Adapa </span>
          <span>
            An undergraduate at kiew and a junior developer at khub which is organised by IIIT-H 
          </span>
        </div>
        {/* social icons */}
        <div className="i-icons">
          < a href="https://github.com/Adapaanjani">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          < a href="https://www.linkedin.com/in/anjani-naga-sai-satya-sri-adapa-520236223/">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
      <div className="circular-image">
        <img src= "blazer.jpg"alt="image" className="shining-image"/>
      </div>

       

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
    <div className="about" id="about">
       <div ClassName="left">
        <div className="circular-image2">
          <img
             src="formal2.jpg"
             alt="image"
          />
        </div>
       </div>
       <div className="right">
        <div classNmame="head"><span><h1>ABOUT</h1></span></div>
        <p>"I am a passionate engineering student specializing in Computer Science, with a strong drive to explore the ever-evolving world of technology. Alongside my academic pursuits, I have embraced my love for web development and am thrilled to be a junior web developer. My journey in the field of Computer Science has allowed me to combine my problem-solving skills with creativity to craft innovative digital solutions. Whether it's diving into the complexities of algorithms or designing user-friendly websites, I am constantly seeking opportunities to learn, grow, and make a positive impact in the digital realm. I'm excited to share my experiences and contribute to the exciting developments in the tech industry."</p>
    
       </div>
    </div>
       


  </div>
  );
};

export default Intro;