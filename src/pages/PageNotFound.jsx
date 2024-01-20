import { NavLink } from "react-router-dom";
import Lottie from 'lottie-react';
import animationData from "../assets/lottie/404.json";

const PageNotFound = () => {
  return (
    <div>
      <div className="content">
        <div className="err-container">
         
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="animate-charcter">SORRY! PAGE NOT FOUND</h3>
            </div>
            <p> Opps! It seems like the page you're trying to access doesn't
              exist, If you believe there's an issue, feel free to report it,
              and we'll look into it.</p>
          </div>
         
        </div>
        <div className="lotti-right">
            <Lottie animationData={animationData}/>
        </div>
      </div>
      <div className="btns">
            <button style={{ backgroundColor: '#4681f4', }}>
            <NavLink id="navaa" to="/">Return home</NavLink> <br />
            </button>
            <button style={{ border: '2px solid #4681f4'}}>
            <NavLink id="navaa" to="/contact">Report problem</NavLink>
            </button>
          </div>
    </div>
  );
};

export default PageNotFound;
