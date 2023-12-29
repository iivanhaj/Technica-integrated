import React, { useEffect, useRef } from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useInView } from 'react-intersection-observer';

function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures that the animation is triggered only once
  });

  useEffect(() => {
    if (inView) {
      Aos.init({ duration: 2000 });
    }
  }, [inView]);

  return (
    <footer className="relative w-full mt-6" id="footer" ref={ref} data-aos="fade-up">
      <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
        <div
          className="mt-12 flex w-full flex-col items-center justify-center py-12 md:flex-row md:justify-between"
          data-aos="fade-up"
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
              <FaTwitter className="h-8 w-8" />
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
