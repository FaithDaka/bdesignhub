import React from 'react'
import FooterImage from 'assets/svg/footer-vector.svg'

const FooterComponent = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="title left">UI Designer</div>
        <div className="center">
          <span className="email">
            <a
              href="mailto:faithux.co@gmail.com?subject=INQUIRY FROM WEBSITE"
              target="_blank"
              rel="noreferrer noopener"
            >
              faithux.co@gmail.com
            </a>
          </span>
          <img src={FooterImage} alt="" width={150} />
          <span className="tagline">Be Engineered, B Design</span>
        </div>
        <div className="title right">SW Engineer</div>
        <div className='font-weight-300 purple-text'>Based in Uganda.</div>
      </div>
    </div>
  );
}

export default FooterComponent;