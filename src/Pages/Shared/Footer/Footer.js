import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <footer className='text-center mt-5'>
            <p w-50 d-block mx-auto mt-3 ><small> copyright   @{new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;