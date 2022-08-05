import React from "react";
import "../index.css";
const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full h-screen bg-[#0a192f] text-[#8892b0] pt-[10rem] sm:py-[10vh]"
    >
      <link rel="stylesheet" href="index.css" />
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <div>
            <span id="num" className="text-4xl font-bold text-[#64ffda]">
              02.
            </span>
            <span></span>
            <p className="text-[#ccd6f6] text-4xl font-bold inline ">
              Experience
            </p>
          </div>
          <div className="p-4 w-[150%] h-[500px] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="  shadow-sm rounded-lg bg-[] shadow-[#8892b0] duration-[200ms] ease">
              <p className="text-2xl text-[#ccd6f6] pt-[10vh] font-bold overflow-hidden">
                <span className="">Accomplished</span></p>
              <ul className="pt-[2rem]">
                <li className="cursor-default py-1 pr-[110px]"><span className="text-[#64ffda]">▹</span> Learned python</li>
                <li className="cursor-default py-1 pr-[110px]"><span className="text-[#64ffda]">▹</span> Learned python</li>

              </ul>
            </div>
            <div className="  shadow-sm rounded-lg bg-[] shadow-[#8892b0] duration-[200ms] ease">
              <p className="text-2xl text-[#ccd6f6] pt-[10vh] font-bold overflow-hidden">
                <span className="">Focused On</span></p>
              <ul className="pt-[2rem]">
                <li className="cursor-default py-1 pr-[110px]"><span className="text-[#64ffda]">▹</span> Learned python</li>
                <li className="cursor-default py-1 pr-[110px]"><span className="text-[#64ffda]">▹</span> Learned python</li>

              </ul>
            </div>
            <div className="  shadow-sm rounded-lg bg-[] shadow-[#8892b0] duration-[200ms] ease">
              <p className="text-2xl text-[#ccd6f6] pt-[10vh] font-bold overflow-hidden">
                <span className="animate-pulse duration-1000">Planned</span></p>
              <ul className="pt-[2rem]">
                <li className="cursor-default py-1 pr-[110px]"><span className="text-[#64ffda]">▹</span> Learned python</li>
                <li className="cursor-default py-1 pr-[110px]"><span className="text-[#64ffda]">▹</span> Learned python</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
