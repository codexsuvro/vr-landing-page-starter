import React from 'react';

// import images
import Img1 from '../assets/img/exp-img1.png';
import Img2 from '../assets/img/exp-img2.png';

const Experience = () => {
  return (
    <section className='mb-12 lg:mb-24'>
      <div className='container mx-auto'>
        <div className='flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row'>
          <div className='flex-1 flex space-x-6 items-center lg:space-x-12'>
            {/* Iamges */}
            <div className='self-start' data-aos='fade-down' data-aos-offset='300'>
              <img src={Img1} alt="" />
            </div>
            <div className='self-end' data-aos='fade-up'>
              <img src={Img2} alt="" />
            </div>
          </div>
          {/* Text */}
          <div className='flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0' data-aos='fade-left' data-aos-offset='500'>
            <h2 className='text-3xl font-bold mb-6'>New Experience In Playing Games</h2>
            <p className='font-secondary mb-6'>Dive into limitless worlds and redefine gaming with immersive virtual reality experiences that take you beyond the screen!</p>
            <button className='btn'>Get it now!</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
