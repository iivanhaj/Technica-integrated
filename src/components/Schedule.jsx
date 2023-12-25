import React from "react";
import bulletin from "../imageForWebsite/bulletin.png";
import blackhole from "../imageForWebsite/blackhole.png";

function Schedule() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:pt-14">
        <div className="Mainapp flex flex-col text-white ml-4 md:ml-20 ">
          <div className="Schtitle font-Michroma text-3xl md:text-5xl flex justify-center items-center pt-8 md:pt-40 pr-4 ">
            <span className="heading heading1">SCHE</span>
            <span className="text-[#27A5EF] heading heading2">DULE</span>
          </div>
          <div className="mainBody flex justify-center items-center pt-8 md:pt-40 pr-4 md:pr-64 pb-8 md:pb-44">
            <div className="daycon flex flex-col md:w-4/5">
              <div className="day1 flex flex-col mb-8 md:mb-32">
                <div className="daytitle font-Changa text-4xl md:text-7xl text-slate-200 underline underline-offset-4 font-thin hover:text-7xl md:hover:text-8xl duration-300 delay-100 mb-4">
                  <h1 className="text-left md:pb-10">DAY - 1</h1>
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
                <div className="daytitle font-Changa text-4xl md:text-7xl text-slate-200 underline underline-offset-4 font-thin hover:text-7xl md:hover:text-8xl duration-200 delay-100 mb-4 md:pt-40 md:mt-60">
                  <h1 className="text-left pb-10 md:pt-80">DAY - 2</h1>
                </div>
                <div className="daycon flex flex-col md:pb-96">
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
    </>
  );
}

export default Schedule;
