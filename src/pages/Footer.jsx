import { FaArrowLeftLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-img" style={{ display: "inline-block" }}>
          <div className="footer-right">
            <img
              src="https://ashutosh-portfolio.onrender.com/imgs/Second.jpg"
              alt="img logo"
              style={{ display: "inline-block", borderRadius: "50%" }}
            />
            <h1 style={{ display: "inline-block" }}>Let's work,</h1>
            <h1>Together</h1>
          </div>
          <div className="footer-left">
            <FaArrowLeftLong />
          </div>
        </div>
        <hr className="footer-hr" />
        <div className="footer-child3">
          <div className="footer-btn">
            <button className="middleText-btn">
              ashutoshparihar51@gmail.com
            </button>
            <button className="middleText-btn">+917248099165</button>
          </div>
          <div className="circle">Get In Touch</div>
        </div>
      </div>
      <div className="footer-below">
        <div className="below-text">
          <p>VIRSION</p>
          <br />
          <span>2023 @Edition</span>
        </div>
        <div className="below-text">
          <p>LOCAL TIME</p> <br />
          <span>6am/mumbai</span>
        </div>

        <div className="below-text">
          <p>SOCIAL</p>
          <div className="footer-icons">
            <span id="navaa">Instagram</span>
            <span id="navaa">Linkldn</span>
            <span id="navaa">Facebook</span>
            <span id="navaa">Teligram</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
