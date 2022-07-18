import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#1A1D3D]">
        <link rel="stylesheet" href="./index.css"/>
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#CDA715] text-[20px] ">Hi, my name is</p>
        <h1 className="text-5xl sm:text-7xl font-bold text-[#BFBDE8] py-3">
          Sheehan Maitra.
        </h1>
        <h2 className="text-5xl sm:text-7xl font-bold text-[#777791]">
          I build things.
        </h2>
        <p className="text-[#F1F1E6] py-6 max-w-[600px] text-[18px]">
          I'm a senior at{" "}
          <span class='link link-underline link-underline-black'>
            <a
              className="text-[#CDA715]"
              href="https://www.chatham-nj.org/Domain/1095"
              target="_blank"
              rel="noreferrer"
            >
              Chatham High School
            </a>
          </span>{" "}
          and I am interested in web design and artificial intelligence.
          Currently, I am focused on building a porfolio of programs.
        </p>
        <div>
          <button className="text-[#CDA715] group text-bold border-[#CDA715] border-[2px] px-4 py-2 my-1 flex items-center rounded-xl hover:bg-[#CDA715] hover:bg-opacity-20">
            View Work
            <span className="group-hover:rotate-90 group-hover:translate-x-2 group-hover:translate-y-[-5px] duration-150">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
