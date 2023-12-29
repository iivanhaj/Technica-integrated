import React, { useState, useEffect } from "react";
import Rover1 from "../imageForWebsite/combi_desk.webp";
import Rover2 from "../imageForWebsite/combi_mob.webp";
import TrackCard from "./TrackCard";
import scholar from "../imageForWebsite/scholar.webp";
import medical from "../imageForWebsite/medical.webp";
import education from "../imageForWebsite/education.webp";
import currency from "../imageForWebsite/currency.webp";
import p3 from "../imageForWebsite/comets/p3.png";

function Tracks() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative h-screen mb-8 " id='tracks'>

      <div className="relative inset-0 flex justify-left ">
        <img
          src={isMobile ? Rover2 : Rover1}
          alt="Rover"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div
        className={`absolute ${
          isMobile
            ? "top-[22%] right-[40%] w-1 h-1/4"
            : "top-[15%] left-2/3 h-1/2 md:top-[30%] md:left-3/4 md:transform md:-translate-x-1/2 md:h-1/4 lg:left-[80%] lg:h-1/8 lg:top:[30%"
        } flex flex-col gap-0 md:gap-4 lg:gap-0`}
      >
        <TrackCard title="TRACK 01" icon={scholar} positionRight={true} />
        <TrackCard title="TRACK 02" icon={medical} positionRight={false} />
        <TrackCard title="TRACK 03" icon={education} positionRight={true} />
        <TrackCard title="TRACK 04" icon={currency} positionRight={false} />
      </div>
      <img
            src={p3}
            alt="Comet"
            className="comet absolute bottom-16 max-md:bottom-56 max-md:left-24 left-56 md:w-5/12/12 w-2/12"
          />
    </div>
  );
}

export default Tracks;
