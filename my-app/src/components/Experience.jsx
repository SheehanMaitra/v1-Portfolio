import React from "react";
import "../index.css";
const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full h-screen bg-[#2C3639] text-[#BECACE] pt-[10rem] sm:pb-[45vh] sm:pl-[5vw]"
    >
      <link rel="stylesheet" href="index.css" />
      <div className="max-w-[1000px] mx-auto p-3 flex flex-col justify-center w-full h-full">
        <div>
          <div>
            <span id="num" className="text-xl sm:text-3xl font-bold text-[#A27B5C]">
              02.
            </span>
            <span> </span>
            <p className="text-[#DCD7C9] text-xl sm:text-3xl font-bold inline ">
              Experience
            </p>
          </div>
          <div className="sm:mt-[2vh] mt-0 p-4 rounded-md duration-[500ms] w-[100%] h-[550px] grid grid-row-3 sm:grid-cols-3 gap-[15px] text-center py-8">
            <div className="hover:-translate-y-[10px] duration-[250ms] shadow-md shadow-black ease-linear border-[#A27B5C] border-[1px] hover:animate-none hover:shadow-lg rounded-md hover:shadow-black">
              <p className="sm:text-2xl text-[17px] text-[#DCD7C9] pt-[3vh] sm:pt-[10vh] font-bold overflow-hidden">
                <span className="">Accomplished</span></p>
              <ul className="sm:pt-[2rem] pt-[1rem]">
                <li className="cursor-default py-1 "><span className="text-[#A27B5C]">▹</span> Learned and made simple alogrithms to write things for me using python</li>
                <li className="cursor-default sm:pb-1 pb-[20px] "><span className="text-[#A27B5C]">▹</span> Created my first working webpage with proper html and css</li>

              </ul>
            </div>
            <div className="hover:-translate-y-[10px] duration-[250ms] ease-linear shadow-black shadow-md border-[#A27B5C] border-[1px] hover:animate-none hover:shadow-lg rounded-md hover:shadow-black">
              <p className="sm:text-2xl text-[16px] text-[#DCD7C9] pt-[3vh] sm:pt-[10vh] font-bold overflow-hidden">
                <span className="">Focused On</span></p>
              <ul className="sm:pt-[2rem] pt-[1rem]">
                <li className="cursor-default py-1"><span className="text-[#A27B5C]">▹</span>Learning react.js </li>
                <li className="cursor-default py-1 "><span className="text-[#A27B5C]">▹</span> Learning java in-depth</li>
                <li className="cursor-default sm:pb-1 pb-[20px] "><span className="text-[#A27B5C]">▹</span> Learning basic artificial intelligence</li>

              </ul>
            </div>
            <div className="hover:-translate-y-[10px] duration-[250ms] shadow-md shadow-black ease-linear border-[#A27B5C] border-[1px] hover:animate-none hover:shadow-lg rounded-md hover:shadow-black">
              <p className="sm:text-2xl text-[17px] text-[#DCD7C9] pt-[3vh] sm:pt-[10vh] font-bold overflow-hidden">
                <span className="">Planned</span></p>
              <ul className="sm:pt-[2rem] pt-[1rem]">
                <li className="cursor-default py-1"><span className="text-[#A27B5C]">▹</span> To become professional in artificial intelligence</li>
                <li className="cursor-default sm:pb-1 pb-[20px]"><span className="text-[#A27B5C]">▹</span> To be able to create adaptive models and implement them into live world problems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
