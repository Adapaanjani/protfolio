
import React from "react";
import "./styles/projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Import icons from FontAwesome

const Projects = () => {
  return (
    <div className="project" id="projects">
      <div className="head"><span><h1>Projects</h1></span></div>
        
     <div className="projects" >

      
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
      <div className="box">
        <img src="cut.png" alt="Project 1" />
        <div className="overlay">
          <a href="https://www.linkedin.com/posts/anjani-naga-sai-satya-sri-adapa-520236223_kiet-gcc-flask-activity-7064256477422649344-3Yrs?utm_source=share&utm_medium=member_desktop" className="live-demo">
            Live Demo
          </a>
          <a href="https://github.com/Adapaanjani/url_shortner" className="github-link">
            Code
          </a>
        </div>
      </div>

      {/* Repeat the structure for boxes 2 to 6 */}
      
      {/* Box 2 */}
      <div className="box">
        <img src="hub.png" alt="Project 2" />
        <div className="overlay">
          <a href="https://www.linkedin.com/posts/anjani-naga-sai-satya-sri-adapa-520236223_studyhub-mernstack-kiet-activity-7090645440680923136-xmB_?utm_source=share&utm_medium=member_desktop" className="live-demo">
            Live Demo
          </a>
          <a href="https://github.com/Adapaanjani/study-hub-project" className="github-link">
            Code
          </a>
        </div>
      </div>

      {/* Box 3 */}
      <div className="box">
        <img src="snake.png" alt="Project 3" />
        <div className="overlay">
          <a href="https://www.linkedin.com/posts/anjani-naga-sai-satya-sri-adapa-520236223_python-pygame-minigame-activity-7091644902756794368-F4Uk?utm_source=share&utm_medium=member_desktop" className="live-demo">
            Live Demo
          </a>
          <a href="https://github.com/Adapaanjani/snake-game-project2" className="github-link">
           Code
          </a>
        </div>
      </div>

      {/* Box 4 */}
      <div className="box">
        <img src="excel.png" alt="Project 4" />
        <div className="overlay">
          <a href="https://www.linkedin.com/posts/anjani-naga-sai-satya-sri-adapa-520236223_python-excel-kiet-activity-7091657592443207680-SwVw?utm_source=share&utm_medium=member_desktop" className="live-demo">
            Live Demo
          </a>
          <a href="https://github.com/Adapaanjani/data-excel-project3" className="github-link">
            Code
          </a>
        </div>
      </div>

      {/* Box 5 */}
      <div className="box">
        <img src="graph.png" alt="Project 5" />
        <div className="overlay">
          <a href="https://www.linkedin.com/posts/anjani-naga-sai-satya-sri-adapa-520236223_python-gcc-kiet-activity-7091647024567095296-mwf8?utm_source=share&utm_medium=member_desktop" className="live-demo">
            Live Demo
          </a>
          <a href="https://github.com/Adapaanjani/graphical-model-project1" className="github-link">
           Code
          </a>
        </div>
      </div>

      {/* Box 6 */}
      <div className="box">
        <img src="sample.png" alt="Project 6" />
        <div className="overlay">
          <a href="https://drive.google.com/file/d/1F-D5H5arwPwpJY27yadc6nhr_EiEURfk/view?usp=sharing" className="live-demo">
            Live Demo
          </a>
          <a href="https://github.com/Adapaanjani/sample-webpage-chandrayaan3" className="github-link">
            Code
          </a>
        </div>
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

      User
 <div className="contact" id="contact">
      <div className="contact-box">
        <div className="icon">
             <a href="mailto:adapaanjani567@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} style={{ color:  "#4a0a52" }} size="lg" />  </a>
              <a href="https://github.com/Adapaanjani">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a href="https://www.linkedin.com/in/anjani-naga-sai-satya-sri-adapa-520236223/">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
          
              </div>
       
        <div className="text-box">
          <h1 align="center">Contact Me</h1>
          {/* Add more content or components within the text-box */}
        </div>
      </div>
    </div>
     

      
    </div>
  );
};

export default Projects;