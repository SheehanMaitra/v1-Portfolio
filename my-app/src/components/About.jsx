import React from "react";
import PFP from "../assets/pfp.png";
import "../index.css";
const About = () => {
  return (
    <div
      id="about"
      className="w-full h-full bg-[#2C3639] text-[#BECACE] "
    >
      <link rel="stylesheet" href="index.css" />
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-left pb-8 pl-4">
            <span
              id="num"
              className="text-xl sm:text-3xl font-bold inline text-[#A27B5C]"
            >
              01.{""}
            </span>
            <span> </span>
            <p className="text-[#DCD7C9] text-xl sm:text-3xl font-bold inline">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 px-3">
          <div>
            <p className=" text-[#DCD7C9] text-xl sm:text-left sm:text-3xl font-bold">
              Hey! I am Sheehan. Nice to meet you. Explore this page to know
              more about me!
            </p>
            <p className="text-[16px] py-6">
              I am a senior in high school interested in computer science. My interest in programming grew when I first opened up the inspect element page of google.
              Tinkering with the lines of code, I thought I had become a hacker and was able to change the webpage. My hopes and dreams were crushed when I reloaded the page, but it taught me HTML and CSS.
            </p>
            <p className="text-[16px] py-1">
              Today, I am focused on artificial intelligence, web development, and computer engineering.
              I hope to learn from many people including my peers, teachers, and professors while I transition into university.{" "}
            </p>

            <p className="py-4 text-lg font-bold text-[#DCD7C9]">
              Current Techonologies I am working with:{" "}
            </p>
            <ul className="grid grid-rows-1 grid-cols-4 sm:grid-cols-4 pb-[2.3rem]">
              <div>
                <li className="text-[#A27B5C] text-[11px] sm:text-[15px] cursor-default">
                  ▹<span className="text-[#DCD7C9] "> Python</span>
                </li>
              </div>
              <div className="hidden sm:flex"></div>
              <li className="text-[#A27B5C] text-[11px] sm:text-[15px] cursor-default">
                ▹<span className="text-[#DCD7C9]"> React</span>
              </li>
              <div className="hidden sm:flex"></div>
              <li className="text-[#A27B5C] text-[11px] sm:text-[15px] cursor-default">
                ▹<span className="text-[#DCD7C9]"> Java</span>
              </li>
              <div className="hidden sm:flex"></div>
              <li className="text-[#A27B5C] text-[11px] sm:text-[15px] cursor-default">
                ▹<span className="text-[#DCD7C9] "> Node</span>
              </li>
            </ul>
          </div>
          <div className="pl-[20%] sm:pl-[4vw] pt-[0] sm:pt-[5vh]">
            <img
              className="flex w-[200px]  sm:w-[250px] rounded-md border-opacity-50 border-[2px] border-[#A27B5C] "
              src={PFP}
              alt="profilepicture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
