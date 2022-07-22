import React from "react";
import PFP from "../assests/pfp.png";
import "../index.css";
const About = () => {
  return (
    <div
      class="abo"
      name="about"
      className="w-full h-screen bg-[#0a192f] text-[#8892b0] pl-[125px] pb-[450px] pt-[150px] [500px]:pt-[350px]"
    >
      <link rel="stylesheet" href="index.css" />
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-left pb-8 pl-4">
            <span className="text-4xl font-bold inline text-[#64ffda]">
              I.{" "}
            </span>
            <span> </span>
            <p className="text-[#ccd6f6] text-4xl font-bold inline">About Me</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 px-3">
          <div>
            <p className=" text-[#ccd6f6] sm:text-left text-4xl font-bold">
              Hi. I'm Sheehan, nice to meet you. Feel free to take a look
              around.
            </p>
            <p className="py-6">
              I am currently a senior interested in computer science. Growing
              up, I always wondered how computers worked and ran the internet.
              As I got older, I learned basic HTML and CSS and was able to make
              my first webpage. It was a lot of trial and error and it did not
              look the best. I learned from my mistakes and was able to learn
              more and more code on my own and throught my school teachers.
            </p>
            <p className="item-body py-1">
              Today, I focus on two main areas of computer science. One of which
              is artificial intelligence and the other is web design.
              Self-teaching is my main method of learning and I hope to learn
              more from peers, university and through myself{" "}
            </p>
            <ul className="cursor-auto">
              <li className="text-[#64ffda] font-bold">
                ▹<span className="text-[#ccd6f6]"> Python</span>
              </li>
              <li className="text-[#64ffda] font-bold">
                ▹<span className="text-[#ccd6f6]"> React</span>
              </li>
              <li className="text-[#64ffda] font-bold">
                ▹<span className="text-[#ccd6f6]"> Java</span>
              </li>
              <li className="text-[#64ffda] font-bold">
                ▹<span className="text-[#ccd6f6]"> Node.js</span>
              </li>
            </ul>
          </div>
          <div className="pl-[100px]">
            <img
              className="flex w-[250px] rounded-xl "
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
