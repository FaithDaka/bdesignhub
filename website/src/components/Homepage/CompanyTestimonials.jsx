import React from 'react'
import FirstLogo from "assets/svg/Company Logos/firstlogo.svg"
import SecondLogo from "assets/svg/Company Logos/secondlogo.svg";
import ThirdLogo from "assets/svg/Company Logos/thirdlogo.svg";
import FourthLogo from "assets/svg/Company Logos/fourthlogo.svg";
import FifthLogo from "assets/svg/Company Logos/fifthlogo.svg";

const CompanyTestimonials = () => {
  return (
    <div className="company-logos">
      <div className="container">
        <div className="title">
          <h1>Worked with</h1>
        </div>
        <div className="logos">
          <div className="logo">
            <img src={FirstLogo} alt="" />
          </div>
          <div className="logo">
            <img src={SecondLogo} alt="" />
          </div>
          <div className="logo">
            <img src={ThirdLogo} alt="" />
          </div>
          <div className="logo">
            <img src={FourthLogo} alt="" />
          </div>
          <div className="logo">
            <img src={FifthLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyTestimonials;