import React from "react";
import ProjectOne from "assets/svg/Portfolio Section/ProjectOne.svg";
import ProjectTwo from "assets/svg/Portfolio Section/ProjectTwo.svg";
import ProjectThree from "assets/svg/Portfolio Section/ProjectThree.svg";
import ProjectFour from "assets/svg/Portfolio Section/ProjectFour.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { HiArrowRight } from "react-icons/hi";

const SECTIONS = [
  {
    title: "How I work",
    body: "Discovery, strategy, design, and delivery. My design framework is tightly looped with real users and clear outcomes.",
  },
  {
    title: "What you get",
    body: "Research synthesis, product flows, high-fidelity UI, interactive prototypes and a design system your engineers will actually want to use.",
  },
  {
    title: "Who I partner with",
    body: "Founders, NGOs, research labs and product teams who care about impact as much as aesthetics.",
  },
];

const PortfolioSectionComponent = ({ onContactClick }) => {
  return (
    <div className="portfolio-section">
      {/* <div className="container">
        <div className="section-heading">
          <h1 className="heading-text">
            <span className="black-text-light">My </span>
            <span className="black-text">Work</span>
          </h1>
        </div>
        <div className="content">
          <div className="row">
            <div className="project">
              <a
                href="https://www.behance.net/gallery/221880699/Dayem-UX-Case-Study-MobileApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LazyLoadImage src={ProjectOne} alt="" effect="blur" />
              </a>
            </div>
            <div className="project">
              <a
                href="https://www.behance.net/gallery/203531843/Talksy-Speech-to-Text-app-Mobile-Design"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LazyLoadImage src={ProjectTwo} alt="" effect="blur" />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="project">
              <a
                href="https://www.behance.net/gallery/202635635/UX-Case-Study-PICSA-Direct-to-Farmer-App"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LazyLoadImage src={ProjectThree} alt="" effect="blur" />
              </a>
            </div>
            <div className="project">
              <a
                href="https://www.behance.net/gallery/202192363/UI-Redesign-Uganda-Bookshop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LazyLoadImage src={ProjectFour} alt="" effect="blur" />
              </a>
            </div>
          </div>
        </div>
        <div className="behance">
          <p className="body-text">
            More projects and case studies on my Behance profile
          </p>
          <a
            href="https://www.behance.net/bfaithdaka"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className="outlined-primary-button">
              Checkout my profile
            </button>
          </a>
        </div>
      </div> */}
      <section className="bg-white px-6 py-4 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-medium tracking-tight text-slate-900">
            The Process
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SECTIONS.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-slate-100 bg-slate-50/60 p-7 transition hover:border-[#193439]/20 hover:bg-white hover:shadow-lg hover:shadow-[#193439]/10"
            >
              <div className="mb-4 h-1 w-8 rounded-full bg-[#193439]" />
              <h3 className="font-serif text-xl font-medium text-slate-900">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {s.body}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-24 overflow-hidden rounded-3xl px-8 py-12 text-center text-white sm:px-12 bg-gradient-to-br from-[#947300] via-30%-[#516335] via-50%-[#0f5c6c] via-75%-[#416244] to-[#947300]">
          <h3 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl text-white">
            Have a project in mind?
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm text-slate-100/80 sm:text-base">
            Drop a note — I&apos;ll get back within a business day. Strategy
            calls are free and no-pressure.
          </p>
          <button
            type="button"
            onClick={onContactClick}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#fef9f0;] px-7 py-3 text-sm font-semibold text-slate-800 shadow-lg transition hover:bg-white"
          >
            faithux.co@gmail.com
            <HiArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default PortfolioSectionComponent;
