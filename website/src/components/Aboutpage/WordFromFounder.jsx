import React from "react";
import FounderImage from "assets/svg/AboutPage/FounderImage.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const WordFromFounderComponent = () => {
  return (
    <div className="word-from-founder">
      <div className="container">
        <div className="section-label">A WORD FROM THE FOUNDER</div>
        <div className="content">
          <div className="image">
            <a
              href="https://www.linkedin.com/in/busigufaithdaka"
              target="_blank"
              rel="noreferrer noopener"
            >
              <LazyLoadImage src={FounderImage} alt="Faith" effect="blur" />
            </a>
          </div>
          <div className="word">
            <h4 className="purple-text">
              Hey there, I’m Faith, the proud CEO and founder of B Design Hub!
            </h4>
            <p className="paragraph-text description-text">
              My tech journey began back at university starting my career as a
              full stack developer in 2019, where I found myself drawn to the
              art of crafting user interfaces and engineering solutions to make
              users’ experiences easier. In 2020, I decided to specialise as a
              frontend engineer which was a significant milestone in my career. <br/><br/>
              Since then, I've immersed myself in a diverse range of projects
              spanning various sectors, including healthcare, e-commerce,
              agriculture, and environmental sustainability. Each project
              presented its own set of challenges and opportunities, further
              enriching my experience and broadening my expertise. <br/><br/>
              Ironically,
              my impatience with designers led me to discovering my knack for UI
              design and UX research. And so, here I am, a proud techie with a
              heart for crafting delightful user experiences.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordFromFounderComponent;
