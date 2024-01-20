import React from "react";

const Footer = () => {
  return (
    <div>
      <hr />
      <div id="Footer" className="container">
        <div className="footer">
          <div className="img-icon">
            <div className="main-img">
              <p>
                <img src="imgs/simple.jpg" width={50} alt="logos" /> INBIO
              </p>
            </div>

            <div className="footer-icons">
              <a
                href="https://www.instagram.com/ashutosh_parihar___/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="imgs/icons8-instagram-48.png"
                  width={60}
                  alt="instagram icon"
                />
              </a>
              <a href="https://www.facebook.com/ab.devilear.10" rel="noreferrer" target="_blank">
                <img
                  src="imgs/icons8-facebook-48.png"
                  width={60}
                  alt="facebook icon"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/ashutosh-parihar-110916281/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="imgs/icons8-linkedin-48.png"
                  width={60}
                  alt="linkedin icon"
                />
              </a>
            </div>
          </div>
          <div className="footer-text">
            <div className="quik">
              <span>QUICK LINK</span>
              <p>About</p>
              <p>Portfolio</p>
              <p>Services</p>
              <p>Blog</p>
              <p>Contact</p>
            </div>
            <div className="rebor">
              <div className="quik">
                <span>RESOURCES</span>
                <p>Authentication</p>
                <p>System Status</p>
                <p>Terms of Service</p>
                <p>Pricing</p>
                <p>Over Right</p>
              </div>
            </div>
            <div className="quik">
              <span>DEVELOPERS</span>
              <p>Documentation</p>
              <p>Authentication</p>
              <p>API Reference</p>
              <p>Support</p>
              <p>Open Source</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="lover-text">
          <p>
            <img src="imgs/copyright.jpg" width={30} alt="copywrite imgs" />
            2023 All rights reserved by ASHUTOSH PARIHAR
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;