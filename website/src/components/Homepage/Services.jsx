import React, { useEffect, useState } from "react";
import { FaChevronRight, FaCircleChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ProductDesign from "assets/svg/ServicesPage/ProductDesign.svg";
import SoftwareDev from "assets/svg/ServicesPage/Software.svg";
import CopyWriting from "assets/svg/CopyWriting.svg";
import ImageOne from "assets/svg/PortfolioPage/Product Design/ImageOne.svg";
import ImageTwo from "assets/svg/PortfolioPage/Product Design/ImageTwo.svg";
import ImageThree from "assets/svg/PortfolioPage/Product Design/ImageThree.svg";
import ImageFour from "assets/svg/PortfolioPage/Product Design/ImageFour.svg";
import ImageSix from "assets/svg/PortfolioPage/Product Design/ImageSix.svg";
import { LuAsterisk } from "react-icons/lu";
import { HiArrowDownRight, HiArrowUpRight } from "react-icons/hi2";
import CaseStudyCard from "../PortfolioPage/CaseStudy";

const TITLE_PHRASES = [
  "Product Design",
  "UX Research",
  "Visual Design",
  "Design Systems",
  "AI Systems",
];

const ServicesComponent = ({ onCtaClick }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TITLE_PHRASES.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="services-section">
      {/* <div className="container">
        <div className="section-label">/ SERVICES FOR YOU</div>
        <div className="description">
          <h1 className="display-text">
            Create <span className="black-text-light">research-driven </span>
            digital products
          </h1>
          <p className="body-text">
            I enjoy working with clients and organisations whose objective is
            deploying accessible digital products using data-driven UX research,
            aesthetic inspirations, frontend engineering, and more. One of my
            services should be a good fit for your next project.
          </p>
          <Link to="/services">
            <button className="link-button">
              All Services <FaChevronRight />
            </button>
          </Link>
        </div>
        <div className="services">
          <div className="service">
            <LazyLoadImage src={ProductDesign} alt="" effect="blur" />
            <div className="card-details">
              <h4 className="heading-text">Product Design</h4>
              <p className="body-text">
                Product design service is all about turning your ideas into
                visually stunning and user-friendly products. Let your product
                stand out in the market.
              </p>
              <a
                href="https://www.behance.net/bfaithdaka"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="primary-button">See projects</button>
              </a>
            </div>
          </div>
          <div className="service">
            <LazyLoadImage src={SoftwareDev} alt="" effect="blur" />
            <div className="card-details">
              <h4 className="heading-text">Software Development</h4>
              <p className="body-text">
                From initial concept to deployment, let your project employ the
                latest technologies and best practices to ensure your software
                is reliable and efficient.
              </p>
              <a
                href="https://github.com/FaithDaka"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="primary-button">Github profile</button>
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <section
        id="services"
        className="relative px-6 pb-16 pt-20 text-white sm:px-10 sm:pt-28"
      >
        <div
          className="absolute right-8 top-10 text-brand-blue sm:right-16 sm:top-16"
          aria-hidden="true"
        >
          <LuAsterisk
            className="h-16 w-16 md:h-28 md:w-28 transform rotate-[75deg]"
            strokeWidth={1.8}
          />
        </div>
        <div className="mx-auto max-w-8xl">
          <div className="mb-1 flex items-start gap-3 mt-8">
            <span
              className="mt-2 hidden lg:h-[5.5rem] h-[3.5rem] w-0.5 bg-[#f5e0b6]/80 sm:block"
              aria-hidden="true"
            />
            <h2 className="font-serif text-[clamp(2.5rem,7vw,5.75rem)] font-medium leading-[0.95] tracking-tight text-white">
              <span
                className="block uppercase text-[#e4c372] animate-slide-up-enter"
                key={TITLE_PHRASES[index]}
              >
                {TITLE_PHRASES[index]}
              </span>
              <span className="mt-2 sm:mt-6 block uppercase">As A</span>
              <span className="mt-2 flex items-center gap-4 uppercase">
                Service
                <span
                  className="inline-flex h-10 w-10 items-center justify-center text-white sm:h-12 sm:w-12"
                  aria-hidden="true"
                >
                  <HiArrowDownRight className="h-20 w-20" strokeWidth={1.8} />
                </span>
              </span>
            </h2>
          </div>
          <div className="max-w-lg space-y-6 pb-2 lg:justify-self-end dv_section lg:mt-4 mt-1">
            <p className="text-[16px] font-semibold uppercase leading-relaxed tracking-[-0.01em] text-white/85 sm:text-md">
              Get your digital vision from zero to live!
              <br />
              Creating UX-driven experiences,
              <br />
              together<span>*</span>
            </p>
            <button
              type="button"
              onClick={onCtaClick}
              className="link-button underline"
              style={{ color: "#ffffff" }}
            >
              Free strategy call
              <HiArrowUpRight
                className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </button>
          </div>
        </div>
        <div id="work" className="mt-16 text-center sm:mt-16">
          <h2 className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-medium tracking-tight text-slate-100/95">
            The Work
          </h2>
        </div>
        <div className="mt-8 overflow-hidden rounded-t-[2rem] bg-white shadow-2xl sm:mt-16 sm:rounded-t-[2.5rem]">
          <div className="case-studies grid grid-cols-1 gap-4 sm:grid-cols-2 mx-8 my-8">
            <CaseStudyCard
              title={
                "Health and Parenting Platform: How I redesigned a cross-platform app for Kuwaiti parents"
              }
              link={
                "https://www.behance.net/gallery/221880699/Dayem-UX-Case-Study-MobileApp"
              }
              image={ImageOne}
              tags={[
                "Design Thinking",
                "Strategy & Leadership",
                "Mobile-first Design",
                "End-to-End",
              ]}
            />
            <CaseStudyCard
              title={
                "Climate Studies at scale: Keeping rural farmers in Central and South Africa ahead of their changing climate"
              }
              link={
                "https://www.behance.net/gallery/202635635/UX-Case-Study-PICSA-Direct-to-Farmer-App"
              }
              image={ImageFour}
              tags={[
                "Design Systems",
                "UX Research",
                "Cross-platform Design",
                "Low digital literacy",
              ]}
            />
            <CaseStudyCard
              title={
                "Hardware E-commerce: Making construction as easy as <Explore - Order - Buy>"
              }
              // link={
              //   "https://www.behance.net/gallery/203531843/Talksy-Speech-to-Text-app-Mobile-Design"
              // }
              image={ImageThree}
              tags={["Design System", "E-commerce", "UX Research"]}
            />
            <CaseStudyCard
              title={
                "Book Website: Boosting the reading culture by re-designing a Bookshop Website"
              }
              link={
                "https://www.behance.net/gallery/202192363/UI-Redesign-Uganda-Bookshop"
              }
              image={ImageTwo}
              tags={["Re-design", "Web Design", "UI", "Grid Systems"]}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesComponent;
