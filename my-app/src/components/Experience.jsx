import React from "react";
import "../index.css";
const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full h-screen bg-[#0a192f] text-[#8892b0] pt-[10rem] sm:py-[10vh]"
    >
      <link rel="stylesheet" href="index.css" />
      <div className="max-w-[1000px] mx-auto p-3 flex flex-col justify-center w-full h-full">
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
          <div className="mt-[1vh] p-4  duration-[500ms] w-[100%] h-[450px] grid grid-cols-2 sm:grid-cols-3 gap-[25px] text-center py-8">
            <div className="hover:-translate-y-[10px] animate-pulse duration-[250ms] ease-linear border-[#64ffda] border-[1px] blur-sm hover:animate-none hover:blur-none hover:shadow-lg rounded-md hover:shadow-black">
              <p className="text-2xl text-[#ccd6f6] pt-[10vh] font-bold overflow-hidden">
                <span className="">Accomplished</span></p>
              <ul className="pt-[2rem]">
                <li className="cursor-default py-1 pr-[110px]"><span className="text-[#64ffda]">▹</span> Learned python</li>
                <li className="cursor-default py-1 pr-[110px]"><span className="text-[#64ffda]">▹</span> Learned python</li>

              </ul>
            </div>
            <div className="hover:-translate-y-[10px] animate-pulse duration-[250ms] ease-linear border-[#64ffda] border-[1px] blur-sm hover:animate-none hover:blur-none hover:shadow-lg rounded-md hover:shadow-black">
              <p className="text-2xl text-[#ccd6f6] pt-[10vh] font-bold overflow-hidden">
                <span className="">Focused On</span></p>
              <ul className="pt-[2rem]">
                <li className="cursor-default py-1 pr-[110px]"><span className="text-[#64ffda]">▹</span> Learned python</li>
                <li className="cursor-default py-1 pr-[110px]"><span className="text-[#64ffda]">▹</span> Learned python</li>

              </ul>
            </div>
            <div className="hover:-translate-y-[10px] animate-pulse duration-[250ms] ease-linear border-[#64ffda] border-[1px] blur-sm hover:animate-none hover:blur-none hover:shadow-lg rounded-md hover:shadow-black">
              <p className="text-2xl text-[#ccd6f6] pt-[10vh] font-bold overflow-hidden">
                <span className="">Planned</span></p>
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
