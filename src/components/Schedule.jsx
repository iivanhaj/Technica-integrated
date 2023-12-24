import React from "react";
import bulletin from "../imageForWebsite/bulletin.png";
import blackhole from "../imageForWebsite/blackhole.png";

function Schedule() {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="Mainapp flex flex-col text-white ml-4 md:ml-16">
          <div className="Schtitle font-Michroma text-3xl md:text-5xl flex justify-center pt-8 md:pt-40 pr-4 md:pr-80">
            <span>SCHE</span>
            <span className="text-[#27A5EF]">DULE</span>
          </div>
          <div className="mainBody flex justify-center items-center pt-8 md:pt-40 pr-4 md:pr-64 pb-8 md:pb-44">
            <div className="daycon flex flex-col md:w-4/5">
              <div className="day1 flex flex-col mb-8 md:mb-32">
                <div className="daytitle font-Changa text-4xl md:text-7xl text-slate-200 underline underline-offset-4 font-thin hover:text-7xl md:hover:text-8xl duration-300 delay-100 mb-4">
                  DAY1
                </div>
                <div className="daycon flex flex-col">
                  {Array.from({ length: 3 }, (_, index) => (
                    <div
                      key={index}
                      className="content flex text-sm md:text-base md:hover:text-lg duration-200 delay-100 mb-2"
                    >
                      <div className="p-2 shrink-0">
                        <img
                          src={bulletin}
                          alt="bulletin"
                          className="h-5 animate-spin-slow hover:animate-spin delay-150"
                        />
                      </div>
                      <div className="p-2">This place is for content</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="day2 flex flex-col mt-4 md:mt-0">
                <div className="daytitle font-Changa text-4xl md:text-7xl text-slate-200 underline underline-offset-4 font-thin hover:text-7xl md:hover:text-8xl duration-200 delay-100 mb-4">
                  DAY2
                </div>
                <div className="daycon flex flex-col">
                  {Array.from({ length: 3 }, (_, index) => (
                    <div
                      key={index}
                      className="content flex text-sm md:text-base md:hover:text-lg duration-200 delay-100 mb-2"
                    >
                      <div className="p-2 shrink-0">
                        <img
                          src={bulletin}
                          alt="bulletin"
                          className="h-5 animate-spin-slow hover:animate-spin-slow delay-150"
                        />
                      </div>
                      <div className="p-2">This place is for content</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blackhole-container hidden md:flex justify-end items-end relative right-0">
        <img src={blackhole} alt="blackhole" className="h-full w-140%" />
      </div>
    </>
  );
}

export default Schedule;
