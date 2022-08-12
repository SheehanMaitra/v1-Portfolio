import React from "react";
import Resume from "../assets/Resume.pdf";

const Home = () => {
  return (
    <div id="home" className="w-full h-[120vh] bg-[#2C3639]">
      <link rel="stylesheet" href="./index.css" />
      <div className=" md:pl-[20vw] pl-[12.5vw] px-8 flex flex-col justify-center h-full py-[60vh] sm:py-[40vh]">
        <p className="text-[#A27B5C] text-[20px] ">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl font-bold text-[#DCD7C9] py-3 pt-[1.5rem]">
          Sheehan Maitra.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-[#DCD7C9] ">
          I create things.
        </h2>
        <p className="text-[#BECACE] py-6 max-w-[600px] text-[16px]">
          I'm a senior at{" "}
          <span class="link link-underline link-underline-black">
            <a
              className="text-[#A27B5C]"
              href="https://www.chatham-nj.org/Domain/1095"
              target="_blank"
              rel="noreferrer"
            >
              Chatham High School
            </a>
          </span>{" "}
          and I am interested in web design and artificial intelligence.
          Currently, I am focused on learning more about Computer Science.
        </p>
        <div className="mb-[100px]">
          <a href={Resume} target="_blank" rel="noreferrer">
            {" "}
            <button className=" text-[#A27B5C] ease-in-out text-bold border-[#A27B5C] hover:-translate-y-[.4rem] duration-[450ms] border-[2px] px-6 py-3 my-1 flex items-center rounded-xl hover:bg-[#A27B5C] hover:bg-opacity-20">

              Resume

            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
