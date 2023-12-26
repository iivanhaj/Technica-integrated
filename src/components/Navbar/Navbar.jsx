import React, { useState, useEffect } from 'react';
import { NavMobile } from './NavMobile';
import { NavDesktop } from './NavDesktop';

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth < 768 ? ( <NavMobile /> ) : ( <NavDesktop /> )}
    </>
  );
};

export default Navbar;
