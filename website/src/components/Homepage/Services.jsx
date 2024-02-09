import React from 'react'
import { PiPuzzlePiece } from "react-icons/pi";
import { LuWand2 } from "react-icons/lu";
import { BiChip } from "react-icons/bi";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { AiOutlineApi } from "react-icons/ai";
import { GrCloudSoftware } from "react-icons/gr";



const ServicesComponent = () => {
  return (
    <div className="services-section">
      <div className="container">
        <h1 className="title-lato">
          Services that will <span className="purple-text">Fuel</span> Your
          Success
        </h1>
        <div className="services">
          <div className="service">
            <div className='icon'><PiPuzzlePiece /></div>
            <div className="text">Product Design</div>
          </div>
          <div className="service">
            <div className='icon'><LuWand2 /></div>
            <div className="text">User Interface Design</div>
          </div>
          <div className="service">
            <div className='icon'><BiChip /></div>
            <div className="text">Software Development</div>
          </div>
        </div>
        <div className="services">
          <div className="service">
            <div className='icon'><HiOutlinePencilSquare /></div>
            <div className="text">Copy Writing & Design</div>
          </div>
          <div className="service">
            <div className='icon'><AiOutlineApi/></div>
            <div className="text">API Design & Documentation</div>
          </div>
          <div className="service">
            <div className='icon'><GrCloudSoftware/></div>
            <div className="text">DevOps Engineering</div>
          </div>
        </div>
        <div className="cta">
          <h3>Have a project in mind?</h3>
          <div className="cta-buttons">
            <a href="mailto:info@bdesignhub.com?subject=INQUIRY" rel='noreferrer noopener'>
              <button>Email</button>
            </a>
            <a
              href="https://wa.me/256753326280"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button>WhatsApp</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesComponent