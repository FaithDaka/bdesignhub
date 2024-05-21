import React from 'react';
import { Link } from 'react-router-dom';


const PriceModelsComponent = () => {
  return (
    <div className="price-section">
      <div className="container">
        <div className="section-label">/ PRICE MODELS</div>
        <div className="models">
          <div className="basic-model model">
            <div className="top-frame">For ongoing projects</div>
            <div className="model-content">
              <h4>Hours Worked</h4>
              <h6>/per hour</h6>
              <p className="paragraph-text">
                The hourly pricing model offers flexibility and is perfect for
                projects with evolving requirements. Clients are billed
                according to the actual hours worked on their project. This
                model is suitable for tasks that require continuous development,
                maintenance, or support. It allows for adaptability, making it
                easy to accommodate changes or new requests as the project
                progresses. Clients receive detailed time reports to keep track
                of the work being done.
              </p>
            </div>
            <Link to="#">
              <button className="link-button underline">Get in touch</button>
            </Link>
          </div>
          <div className="recommended-model model">
            <div className="top-frame blue-accent-background">
              Pay for exactly what you need
            </div>
            <div className="model-content">
              <h4>Product Based</h4>
              <h6>/per feature</h6>
              <p className="paragraph-text">
                With our product-based pricing model, clients are billed per
                feature. This approach is ideal for projects with clearly
                defined requirements and specific functionalities. Each feature
                is scoped, estimated, and priced individually, providing
                transparency and allowing clients to prioritise features based
                on their budget and needs. This model ensures you pay for
                exactly what you need.
              </p>
            </div>
            <Link to="#">
              <button className="primary-button">Request Quote</button>
            </Link>
          </div>
          <div className="basic-model model">
            <div className="top-frame">For long-term projects</div>
            <div className="model-content">
              <h4>Retainer Based</h4>
              <h6>/per month</h6>
              <p className="paragraph-text">
                With retainer-based pricing, clients maintain a reliable and
                consistent partnership with us. By paying a retainer fee, you
                secure our services and expertise for a set period. This model
                is ideal for ongoing projects or long-term collaborations. While
                the retainer ensures our availability, clients are still billed
                for the actual work done or hours worked, providing a balance of
                predictability and accountability. It’s a great way to ensure
                priority access to our team while managing costs effectively.
              </p>
            </div>
            <Link to="#">
              <button className="link-button underline">Get in touch</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceModelsComponent