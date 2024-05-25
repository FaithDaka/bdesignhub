import React from "react";
import ServiceComponent from "./Service";
import ProductDesign from "assets/svg/ServicesPage/ProductDesign.svg";
import SoftwareDevelopment from "assets/svg/ServicesPage/Software.svg";
import ApiEngineering from "assets/svg/ServicesPage/api.svg";
import Copywriting from "assets/svg/ServicesPage/CopyWriting.svg";

const serviceList = [
  {
    image: ProductDesign,
    heading: "Product Design",
    paragraph:
      "Our Product Design is dedicated to transforming your innovative ideas into functional, user-friendly software products. We focus on creating designs that not only look great but also provide an intuitive and seamless user experience. Whether you’re starting from scratch or looking to enhance an existing product, our team is here to bring your vision to life with precision and creativity.",
    showLink: true,
    linkText: "Check out Portfolio",
  },
  {
    isRowReverse: true,
    image: SoftwareDevelopment,
    heading: "Software Development",
    paragraph:
      "Software Development at B Design Hub is all about turning concepts into reality through robust, scalable, and efficient code. From web applications to mobile platforms to custom firmware, our development team is equipped to handle projects of any size and complexity, ensuring high-quality results every time.",
    showLink: true,
    linkText: "Check out Portfolio",
  },
  {
    image: ApiEngineering,
    heading: "API Design, DevOps Engineering",
    paragraph:
      "APIs are the backbone of modern software ecosystems, and our API Design service ensures your systems can communicate seamlessly and securely. We design and implement APIs that are reliable, scalable, and easy to integrate, enabling smooth data exchange and functionality across various platforms and services. <br/><br/> Streamline your development and deployment processes with our DevOps Engineering where we focus on automating workflows, improving collaboration between development and operations, and ensuring continuous integration and continuous delivery.",
  },
  {
    isRowReverse: true,
    image: Copywriting,
    heading: "Copy Writing, Storytelling",
    paragraph:
      "Words have the power to influence, engage, and convert. At B Design Hub, our Copywriting service delivers compelling and effective content tailored to your brand's voice and objectives. Whether you need website copy, marketing materials, or technical documentation, our talented writers craft messages that resonate with your audience and drive action. With the rise of helpful AI writing assistants, avoid the generic copy and elevate your communication with expertly written content.",
  },
];

const DetailedServicesComponent = () => {
  return (
    <div className="service-details">
      {serviceList.length > 0 ? (
        serviceList.map((service, number) => (
          <ServiceComponent
            isRowReverse={service.isRowReverse || false}
            image={service.image}
            heading={service.heading}
            paragraph={service.paragraph}
            showLink={service.showLink || false}
            linkText={service.linkText || null}
            number={`0${(number += 1)}`}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default DetailedServicesComponent;
