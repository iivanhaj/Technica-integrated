import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer(){
  return (
    <footer className="relative w-full mt-6">
      <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
        <div className="mt-12 flex w-full flex-col items-center justify-center py-12 md:flex-row md:justify-between">
          <p className="mb-4 text-center text-sm font-normal text-white md:mb-0">
            <a href="#" className="text-white">
              Made with {'\u2764'} by ISTE-VIT
            </a>
          </p>
          <div className="flex gap-4 text-white sm:justify-center">
            <a href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <FaTwitter className="h-5 w-5" />
            </a>
            <a href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <FaFacebook className="h-5 w-5" />
            </a>
            <a href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <FaInstagram className="h-5 w-5" />
            </a>
            <a href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
