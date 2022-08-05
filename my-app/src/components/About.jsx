import React from "react";
import PFP from "../assets/pfp.png";
import "../index.css";
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#0a192f] text-[#8892b0] pt-[10rem] sm:py-[25vh]"
    >
      <link rel="stylesheet" href="index.css" />
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-left pb-8 pl-4">
            <span
              id="num"
              className="text-2xl sm:text-4xl font-bold inline text-[#64ffda]"
            >
              01.{""}
            </span>
            <span></span>
            <p className="text-[#ccd6f6] text-2xl sm:text-4xl font-bold inline">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 px-3">
          <div>
            <p className=" text-[#ccd6f6] text-2xl sm:text-left sm:text-4xl font-bold">
              Hey! I am Sheehan. Nice to meet you. Explore this page to know
              more about me!
            </p>
            <p className="py-6">
              I am currently a senior interested in computer science. Growing
              up, I always wondered how computers worked. At the age of 12, I
              self taught myself HTML and CSS. I was able to make my first
              webpage as a simple project. It was not my best work. Now, I am
              able to make basic react.js websites.
            </p>
            <p className="item-body py-1">
              Today, I focus on two main areas of computer science. One of which
              is artificial intelligence and the other is web design.
              Self-teaching is my main method of learning and I hope to learn
              more from peers, university and through myself{" "}
            </p>

            <p className="py-4 text-lg font-bold ">
              Current Techonologies I am working with:{" "}
            </p>
            <ul className="grid grid-cols-4 pb-[2.3rem]">
              <div>
                <li className="text-[#64ffda] text-[13px] sm:text-[1em] font-bold cursor-default">
                  ▹<span className="text-[#ccd6f6] "> Python</span>
                </li>
              </div>
              <div></div>
              <li className="text-[#64ffda] text-[13px] sm:text-[1em] font-bold cursor-default">
                ▹<span className="text-[#ccd6f6]"> React.js</span>
              </li>
              <div></div>
              <li className="text-[#64ffda] text-[13px] sm:text-[1em] font-bold cursor-default">
                ▹<span className="text-[#ccd6f6]"> Java</span>
              </li>
              <div></div>
              <li className="text-[#64ffda] text-[13px] sm:text-[1em] font-bold cursor-default">
                ▹<span className="text-[#ccd6f6] "> Node.js</span>
              </li>
            </ul>
          </div>
          <div className="pl-[4rem] pt-[5vh]">
            <img
              className="flex w-[250px] rounded-lg "
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
