import React from "react";

const Footer = () => {
  return (
      <div className="box">
        <h3
        >
          Learn more about us!
        </h3>
        <div className="footer-container">
          <div className="row">
            <div className="column">
              <p className="heading">About Me</p>
              <a href="#" className="footer-link">
                Aim
              </a>
              <a href="#" className="footer-link">
                Vision
              </a>
              <a href="#" className="footer-link">
                Testimonials
              </a>
            </div>
            <div className="column">
              <p className="heading">Services</p>
              <a href="#" className="footer-link">
                Writing
              </a>
              <a href="#" className="footer-link">
                Internships
              </a>
              <a href="#" className="footer-link">
                Coding
              </a>
            </div>
            <div className="column">
              <p className="heading">Contact Me</p>
              <a href="#" className="footer-link">
                My journey as a indie hacker
              </a>
            </div>
            <div className="column">
              <p className="heading">Social Media</p>
              <a href="mailto:marionlouis1@gmail.com?Subject= Demande de contact" className="footer-link">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>Mail</span>
                </i>
              </a>
              <a href="https://www.instagram.com/louismarion94/" className="footer-link">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>Instagram</span>
                </i>
              </a>
              <a href="https://twitter.com/louismrn0" className="footer-link">
                <i className="fab fa-twitter">
                  <span style={{ marginLeft: "10px" }}>Twitter</span>
                </i>
              </a>
              <a href="https://linkedin.com/in/louis-marion" className="footer-link">
                <i className="fab fa-youtube">
                  <span style={{ marginLeft: "10px" }}>Linkedin</span>
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Footer;
