import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#1A1D3D]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#CDA715] text-[22px] ">Hi, my name is</p>
        <h1 className="text-5xl sm:text-8xl font-bold text-[#BFBDE8]">
          Sheehan Maitra.
        </h1>
        <h2 className="text-5xl sm:text-8xl font-bold text-[#777791]">
          I am a Student.
        </h2>
        <p className="text-[#F1F1E6] py-4 max-w-[600px] text-[20px]">
          I'm a student who is interested in computer Science, especially in web
          design and artificial intelligence. Currently, I am focused on
          building a porfolio of programs   .
        </p>
        <div>
          <button className="text-[#CDA715] text-bold border-[#CDA715] border-[2px] px-4 py-2 my-1 flex items-center rounded hover:bg-[#CDA715] hover:bg-opacity-20">
            View Work <HiArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
