import React from 'react'
import { Link } from 'react-router-dom';

const ServicesHeaderComponent = () => {
  return (
    <div className="services-header">
      <div className="container">
        <div className="content">
          <h1 className='display-text'>Services</h1>
          <p className="body-text">
            Discover the full spectrum of services
            offered by B Design Hub. With a focus on user-centric design and
            robust frontend development, our team of skilled professionals is
            dedicated to delivering exceptional quality and value.
          </p>
          {/* <Link to="/contact"><button className="secondary-button">Book Consultation</button></Link> */}
        </div>
      </div>
    </div>
  );
}

export default ServicesHeaderComponent