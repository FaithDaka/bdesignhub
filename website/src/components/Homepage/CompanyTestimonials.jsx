import React from 'react'
import FirstLogo from "assets/svg/Company Logos/firstlogo.svg"
import SecondLogo from "assets/svg/Company Logos/secondlogo.svg";
import ThirdLogo from "assets/svg/Company Logos/thirdlogo.svg";
import FourthLogo from "assets/svg/Company Logos/fourthlogo.svg";
import FifthLogo from "assets/svg/Company Logos/fifthlogo.svg";

const CompanyTestimonials = () => {
  return (
    <div className="company-logos overflow-hidden">
      <div className="container">
        <div className="title">
          <h1>Worked with</h1>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />
          <div className="logos animate-marquee overflow-hidden flex w-max items-center">
            <div className="mx-8 flex shrink-0 items-center justify-between gap-2 sm:mx-12">
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
      </div>
    </div>
  );
}

export default CompanyTestimonials;