// import React from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import ImageOne from "assets/svg/PortfolioPage/Product Design/ImageOne.svg";
// import ImageTwo from "assets/svg/PortfolioPage/Product Design/ImageTwo.svg";
// import ImageThree from "assets/svg/PortfolioPage/Product Design/ImageThree.svg";
// import ImageFour from "assets/svg/PortfolioPage/Product Design/ImageFour.svg";
// import ImageFive from "assets/svg/PortfolioPage/Product Design/ImageFive.svg";
// import ImageSix from "assets/svg/PortfolioPage/Product Design/ImageSix.svg";
// import ImageSeven from "assets/svg/PortfolioPage/Product Design/ImageSeven.svg";
// import ImageEight from "assets/svg/PortfolioPage/Product Design/ImageEight.svg";
// import ImageNine from "assets/svg/PortfolioPage/Product Design/ImageNine.svg";
// import CaseStudyCard from "./CaseStudy";

// const ProductDesignPortfolioComponent = () => {
//   const images = [
//     ImageThree,
//     ImageOne,
//     ImageTwo,
//     ImageFour,
//     ImageFive,
//     ImageSix,
//     ImageSeven,
//     ImageEight,
//     ImageNine,
//   ];
//   return (
//     <div className="product-design web-development">
//       <div className="container">
//         <div className="content">
//           <div className="desc">
//             <h2 className="heading-text">Product Design</h2>
//             <p className="black-text-light font-weight-300">
//               {/* <a
//                 href="https://www.behance.net/bfaithdaka"
//                 target="_blank"
//                 className="link-button underline"
//               >
//                 Case Studies
//               </a> */}
//               Case Studies | UX Research | Redesigns | Web | Mobile
//             </p>
//             <p className="description-text font-weight-400">
//               Usual Timeline: 2-8 weeks
//             </p>
//           </div>
//           <div className="case-studies">
//             <div className="row">
//               <CaseStudyCard
//                 title={
//                   "Parenting App: How I redesigned a cross-platform app for Kuwaiti parents"
//                 }
//                 link={
//                   "https://www.behance.net/gallery/221880699/Dayem-UX-Case-Study-MobileApp"
//                 }
//                 image={ImageOne}
//                 tags={[
//                   "Design Thinking",
//                   "Strategy & Leadership",
//                   "Mobile-first Design",
//                   "End-to-End",
//                 ]}
//               />
//               <CaseStudyCard
//                 title={
//                   "Climate Studies: Keeping rural farmers in Central and South Africa ahead of their changing climate"
//                 }
//                 link={
//                   "https://www.behance.net/gallery/202635635/UX-Case-Study-PICSA-Direct-to-Farmer-App"
//                 }
//                 image={ImageFour}
//                 tags={[
//                   "Design Systems",
//                   "UX Research",
//                   "Cross-platform Design",
//                   "Low digital literacy",
//                 ]}
//               />
//             </div>
//             <div className="row">
//               <CaseStudyCard
//                 title={
//                   "Boosting the reading culture by re-designing a Bookshop Website"
//                 }
//                 link={
//                   "https://www.behance.net/gallery/202192363/UI-Redesign-Uganda-Bookshop"
//                 }
//                 image={ImageTwo}
//                 tags={["Re-design", "Web Design", "UI", "Grid Systems"]}
//               />
//               <CaseStudyCard
//                 title={
//                   "Speech-to-text App: Making it as easy as Speak - Transcribe - Export "
//                 }
//                 link={
//                   "https://www.behance.net/gallery/203531843/Talksy-Speech-to-Text-app-Mobile-Design"
//                 }
//                 image={ImageSix}
//                 tags={["Design Thinking", "UI Design", "Mobile Design"]}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="images">
//           <div className="carousel">
//             {images &&
//               images.map((image) => (
//                 <LazyLoadImage src={image} alt="" effect="blur" />
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDesignPortfolioComponent;
