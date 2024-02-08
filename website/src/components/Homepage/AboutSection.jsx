import React from 'react'
import Illustration from 'assets/svg/illustration.svg'

const AboutSectionComponent = () => {
  return (
    <div className="about-section">
      <div className="container">
        <div className="text-div">
          <h2 className='title-lato title-text'> Our Story </h2>
          <p className='paragraph-text'>
            Established in 2023, B Design Hub seeks to bridge the gap between
            ideators and their next tech solution. <br/> We cut out the tech lingo &
            meet you halfway. <br/> Digital solutions are only as relevant as the
            dream behind it!
          </p>
        </div>
        <div className='image-div'>
            <img src={Illustration} alt='Woman designing user interface svg illustration' width={600}/>
        </div>
      </div>
    </div>
  );
}

export default AboutSectionComponent