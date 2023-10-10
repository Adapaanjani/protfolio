import React, { useState, useEffect } from "react";
import "./styles/Header.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    // Add a scroll event listener to determine when to show the navbar
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`navbar ${menuOpen ? "active" : ""} ${showNavbar ? "fixed-navbar" : ""}`}>
        <div className="n-wrapper" id="Navbar">
          <div className="n-left">
            {/* Move the name to the right */}
            <div className="n-name">
              <div className="text-with-background" style={{ textAlign: "right" }}>Adapa Anjani</div>
            </div>
          </div>
          <div className="n-right">
            <div className="hamburger-container">
              <div className="hamburger-icon" onClick={toggleMenu}>
                <div className={`bar ${menuOpen ? "open" : ""}`}></div>
                <div className={`bar ${menuOpen ? "open" : ""}`}></div>
                <div className={`bar ${menuOpen ? "open" : ""}`}></div>
              </div>
            </div>

            {/* Hidden menu for links */}
            <div className={`n-list ${menuOpen ? "open" : ""}`}>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <Link activeClass="active" to="Intro" spy={true} smooth={true} className="text-with-background">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="about" spy={true} smooth={true} className="text-with-background">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="Skills" spy={true} smooth={true} className="text-with-background">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link to="projects" spy={true} smooth={true} className="text-with-background">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="contact" spy={true} smooth={true} className="text-with-background">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



