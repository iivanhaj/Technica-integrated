import React, { useEffect, useRef } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Aos from 'aos';
import 'aos/dist/aos.css';

function Footer() {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <footer className="relative w-full mt-6" id="footer" data-aos="fade-up">
      <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
        <div
          className="mt-12 flex w-full flex-col items-center justify-center py-12 md:flex-row md:justify-between"
        >
          <p className="mb-4 text-center text-sm font-normal text-white md:mb-0">
            <a href="#" className="text-white">
              Made with {"\u2764"} by ISTE-VIT
            </a>
          </p>
          <div
            className="flex gap-4 text-white sm:justify-center"
            data-aos="fade-up"
          >
            <a
              href="#"
              className="hover:text-[#27A5EF] transition-all duration-300"
            >
              <BsTwitterX className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="hover:text-[#27A5EF] transition-all duration-300"
            >
              <FaFacebook className="h-8 w-8" />
            </a>
            <a
              href="#"
              className="hover:text-[#27A5EF] transition-all duration-300"
            >
              <FaInstagram className="h-8 w-8" />
            </a>
            <a
              href="#"
              className="hover:text-[#27A5EF] transition-all duration-300"
            >
              <FaLinkedin className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
