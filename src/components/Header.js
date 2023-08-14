import React from 'react';

// import components
import Logo from '../assets/img/logo.svg';
import Nav from './Nav';
import VRLogo from '../assets/img/VRlogo-1.png';

// import icons
import { HiMenu } from 'react-icons/hi';

const Header = ({setNavMobile}) => {
  return (
    <header className='py-4' data-aos='fade-down' data-aos-duration='2000' data-aos-delay='150'>
      <div className="container mx-auto">
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <a href="#">
            <img className='h-[75px]' src={VRLogo} alt="" />
          </a>
          {/* Nav */}
          <Nav />
          {/* Nav mobile button */}
          <HiMenu onClick={() => setNavMobile(true)} className='lg:hidden text-3xl text-white cursor-pointer'/>
        </div>
      </div>
    </header>
  );
};

export default Header;
