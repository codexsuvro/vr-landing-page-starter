import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white text-center py-8 justify-center items-center container mx-auto" data-aos='fade-up' data-aos-delay='400'>
            <h5 className='mb-5 font-bold'>Copyright &copy; CodexSuvro | All rights reserved {currentYear}.</h5>
        </footer>
    );
};

export default Footer;