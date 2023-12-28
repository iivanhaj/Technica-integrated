import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar/Navbar";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";

function Landing() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE: THREE,
          color: 0x000000,
          waveHeight: 20,
          shininess: 20,
          waveSpeed: 1.5,
          zoom: 0.75
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className="text-center h-screen" ref={vantaRef}>
      <Navbar />
      <div className=" flex  justify-center items-center">
        <img
          src="./images/Logo.webp"
          className="md:h-72 h-64"
          alt="logo of website"
        />
      </div>
      <h1 className="text-white md:text-6xl text-4xl p-4 font-poppi ns">
        T E C H <span className="text-[#27A5EF]">N I C A</span>
      </h1>
      <div className="p-3">
        <h2 className="text-white md:text-3xl text-2xl p-4">
          Initiate | <span className="text-[#27A5EF]">Innovate</span> | Inspire
        </h2>
      </div>
      <h3 className="text-white text-2xl">11th - 13th January 2023</h3>
      <div className="p-5 ">
        <button
          type="button"
          name="Register"
          className="bg-transparent hover:bg-[#27A5EF] text-white font-semibold hover:text-black py-2 px-4 border border-[#27A5EF] hover:border-transparent rounded"
        >
          REGISTER NOW
        </button>
      </div>
    </div>
  );
}

export default Landing;
