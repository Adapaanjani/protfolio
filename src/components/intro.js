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
          Data-driven software developer with expertise in machine learning, MERN and Data Science. Excited to contribute to innovative projects, leveraging these skills to build scalable, secure, and cutting-edge solutions that drive significant business growth. Eager to collaborate within cross-functional teams.
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
             src="imp.jpg"
             alt="image"
          />
        </div>
       </div>
       <div className="right">
        <div classNmame="head"><span><h1>ABOUT</h1></span></div>
        <p>I am a passionate and data-driven software developer currently in my final year of studies, specializing in Machine Learning, Data Science, and the MERN (MongoDB, Express, React, Node.js) stack. With a strong foundation in full-stack development and an in-depth understanding of data analytics, I am eager to contribute to innovative projects that leverage technology to solve real-world problems.

Throughout my academic journey, I have worked on various projects that involved building scalable and secure web applications, implementing machine learning models, and analyzing large datasets to drive meaningful insights. I thrive in collaborative, cross-functional teams and aim to develop solutions that not only meet technical requirements but also align with business goals to drive significant growth.

I am actively seeking opportunities to apply my skills in dynamic environments where I can continue to grow, learn, and contribute to cutting-edge technology solutions.</p>


       </div>
    </div>
       


  </div>
  );
};

export default Intro;
