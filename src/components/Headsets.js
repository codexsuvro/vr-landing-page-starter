import React from 'react';

// import images
import Headset1 from '../assets/img/headset-1.png';
import Headset2 from '../assets/img/headset-2.png';
import Headset3 from '../assets/img/headset-3.png';
import Headset4 from '../assets/img/headset-4.png';

const Headsets = () => {
  return (
    <section className='py-12 lg:py-24'>
      <div className="container mx-auto">
        {/* Title */}
        <h2 className='text-3xl font-bold mb-8' data-aos='fade-down' data-aos-offset='300'>Mixed Reality Headsets</h2>
        {/* Grid */}
        <div className='grid gap-y-4 lg:grid-cols-2 lg:gap-9'>
          {/* Item */}
          <div className='relative' data-aos='zoom-in' data-aos-offset='300' data-aos-delay='500'>
            <img src={Headset1} alt="" />
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h4 className='font-semibold text-xl mb-2'>Metaverse</h4>
              <p>Unlock the Metaverse's boundless realms, where reality meets imagination in an unforgettable virtual odyssey!</p>
            </div>
          </div>
          {/* Item */}
          <div className='relative' data-aos='zoom-in' data-aos-offset='300' data-aos-delay='700'>
            <img src={Headset2} alt="" />
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h4 className='font-semibold text-xl mb-2'>AIoT</h4>
              <p>Experience the future with AIoT, where artificial intelligence and the Internet of Things converge for seamless innovation.</p>
            </div>
          </div>
          {/* Item */}
          <div className='relative' data-aos='zoom-in' data-aos-offset='300' data-aos-delay='900'>
            <img src={Headset3} alt="" />
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h4 className='font-semibold text-xl mb-2'>HoloLens</h4>
              <p>See beyond reality with HoloLens, where holographic wonders blend with the tangible world, reshaping your senses.</p>
            </div>
          </div>
          {/* Item */}
          <div className='relative' data-aos='zoom-in' data-aos-offset='300' data-aos-delay='1200'>
            <img src={Headset4} alt="" />
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h4 className='font-semibold text-xl mb-2'>TPCASTT</h4>
              <p>Navigate literature's depths with TPCASTT, a roadmap that unveils the layers of poetry's beauty and meaning.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;
