import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <link rel="stylesheet" href="./index.css" />
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#64ffda] text-[20px] ">Hi, my name is</p>
        <h1 className="text-5xl sm:text-7xl font-bold text-[#ccd6f6] py-3">
          Sheehan Maitra.
        </h1>
        <h2 className="text-5xl sm:text-7xl font-bold text-[#8892b0]">
          I build things.
        </h2>
        <p className="text-[#8892b0] py-6 max-w-[600px] text-[18px]">
          I'm a senior at{" "}
          <span class="link link-underline link-underline-black">
            <a
              className="text-[#64ffda]"
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
          <button className="text-[#64ffda] group text-bold border-[#64ffda] border-[2px] px-4 py-2 my-1 flex items-center rounded-xl hover:bg-[#64ffda] hover:bg-opacity-20">
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
