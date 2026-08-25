import React from 'react'
import { Link } from 'react-router-dom';
import MediaContext from 'assets/svg/AboutSection/media_context.svg'
import { FaChevronRight } from 'react-icons/fa6';

const AboutSectionComponent = ({ openLink }) => {
  return (
    <div className="about-section bg-subtle-grid" id="about">
      <section className="px-6 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[clamp(3rem,5.5vw,3.25rem)] font-medium leading-[1.15] tracking-tight text-slate-900 text-3xl">
            Creating digital experiences
            <br />
            <span className="italic">
              for{" "}
              <em className="scribble-circle not-italic font-medium">impact</em>
            </span>
          </h2>

          <div className="mx-auto mt-10 max-w-md space-y-5 text-left leading-relaxed text-slate-600 sm:text-base">
            <p className="font-medium text-slate-800 text-2xl bg-white">
              I&apos;m your creative partner from zero to digital!
            </p>
            <p className="text-slate-500 text-lg">
              Starting out my journey as a frontend engineer allowed me to fully
              integrate my technical knowledge within UX design. <br></br>In
              this creative space, I have refined my skill and made it my
              mission to continuously bridge the gap through human-centred
              design, technical expertise and a focus on user experience. <br />
              <br />
              I&apos;ve become really good at making clients happy{" "}
              <span aria-hidden="true">:)</span>
            </p>
            <p className="flex flex-row flex-wrap font-medium text-slate-900 text-2xl bg-white">
              Let&apos;s get your project{" "}
              <button
                type="button"
                onClick={openLink}
                className="p-0 px-2 font-medium text-slate-900 text-2xl"
                title="Send an email"
              >
                <span className="underline decoration-brand-blue-mid decoration-2 underline-offset-4">
                  DONE
                </span>
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSectionComponent