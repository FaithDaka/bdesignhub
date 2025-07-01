import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageOne from "assets/svg/PortfolioPage/Product Design/ImageOne.svg";
import ImageTwo from "assets/svg/PortfolioPage/Product Design/ImageTwo.svg";
import ImageThree from "assets/svg/PortfolioPage/Product Design/ImageThree.svg";
import ImageFour from "assets/svg/PortfolioPage/Product Design/ImageFour.svg";
import ImageFive from "assets/svg/PortfolioPage/Product Design/ImageFive.svg";
import ImageSix from "assets/svg/PortfolioPage/Product Design/ImageSix.svg";
import ImageSeven from "assets/svg/PortfolioPage/Product Design/ImageSeven.svg";
import ImageEight from "assets/svg/PortfolioPage/Product Design/ImageEight.svg";
import ImageNine from "assets/svg/PortfolioPage/Product Design/ImageNine.svg";

const ProductDesignPortfolioComponent = () => {
  const images = [
    ImageOne,
    ImageTwo,
    ImageThree,
    ImageFour,
    ImageFive,
    ImageSix,
    ImageSeven,
    ImageEight,
    ImageNine,
  ];
  return (
    <div className="product-design web-development">
      <div className="container">
        <div className="content">
          <div className="desc">
            <h2>Product Design</h2>
            <p>
              <a
                href="https://www.behance.net/bfaithdaka"
                target="_blank"
                className="link-button underline"
              >
                Case Studies
              </a>
            </p>
            <h4 className="description-text">Timeline: 2-8 weeks</h4>
          </div>
        </div>
        <div className="images">
          <div className="carousel">
            {images &&
              images.map((image) => (
                <LazyLoadImage src={image} alt="" effect="blur" />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDesignPortfolioComponent;
