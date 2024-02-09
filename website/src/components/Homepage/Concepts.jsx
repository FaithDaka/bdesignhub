import React from "react";
import LeftIllustration from "assets/svg/left-illustration.svg";
import RightIllustration from "assets/svg/right-illustration.svg"

const ConceptsComponent = () => {
  return (
    <div className="concepts-section">
      <div className="container">
        <h1 className="title">From <span className="purple-text">Concepts</span> to <span className="purple-text">Code</span></h1>
        <div className="illustrations">
          <div className="left illustration">
            <div className="image">
            <img src={LeftIllustration} alt="" width={400} />
            </div>
            <div className="list">
              <ul>
                <li>Responsive Web design</li>
                <li>Design Wireframes</li>
                <li>Design Prototypes </li>
                <li>User Experience Research</li>
              </ul>
            </div>
          </div>
          <div className="right illustration">
            <div className="image">
            <img src={RightIllustration} alt="" width={400} />
            </div>
            <div className="list">
              <ul>
                <li>Software Documentation</li>
                <li>Software Implementation</li>
                <li>Software Deployment</li>
                <li>CI/CD Pipelines</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConceptsComponent;
