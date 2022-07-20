import React from "react";
import "../index.css";
import Python from "../assests/python-logo.png";
import Html from "../assests/html-logo.png";
import JavaScript from "../assests/js.png";
import CSS from "../assests/css-3.png";
import JAVA from "../assests/java.png";
const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full h-screen bg-[#0a192f] text-[#8892b0] pl-[250px] pb-[800px]"
    >
      <link rel="stylesheet" href="index.css" />
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <div>
            <span className="text-4xl text-[#64ffda]">II. </span>
            <span></span>
            <p className="text-[#ccd6f6] text-4xl font-bold inline ">
              Experience
            </p>
            <p className="pt-4 font-bold">
              Current Technologies I am Working With:
            </p>
          </div>
          <div className="p-4 w-full h-[200px] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="group shadow-md rounded-xl shadow-[#8892b0] hover:scale-110 duration-[200ms] ease">
              <span className="group-hover:hidden duration-[200ms]">
                <img
                  className="mt-5 w-20 mx-auto "
                  src={Python}
                  alt="Python IMG"
                />
                <p>PYTHON</p>
              </span>
              <p className="hidden group-hover:flex mx-auto py-[20px] text-[14px]">
                Beginner: Self taught from learning Java
              </p>
            </div>
            <div className="group shadow-md rounded-xl shadow-[#8892b0] hover:scale-110 duration-[200ms] ease">
              <span className="group-hover:hidden duration-[200ms]">
                <img className="mt-5 w-20 mx-auto " src={Html} alt="Html IMG" />
                <p>HTML</p>
              </span>
              <p className="hidden group-hover:flex mx-auto py-[20px] text-[14px]">
                Intermediate: Self taught because I was interested in web design
                and wanted to know how make websites.
              </p>
            </div>
            <div className="group shadow-md rounded-xl shadow-[#8892b0] hover:scale-110 duration-[200ms] ease">
              <span className="group-hover:hidden duration-[200ms]">
                <img
                  className="mt-5 w-20 mx-auto "
                  src={JavaScript}
                  alt="JavaScript IMG"
                />
                <p>JAVASCRIPT</p>
              </span>
              <p className="hidden group-hover:flex mx-auto py-[20px] text-[14px]">
                Beginner: Learned from Java and I am able to code a basic react
                website or small java script applications
              </p>
            </div>
            <div className="group shadow-md rounded-xl shadow-[#8892b0] hover:scale-110 duration-[200ms] ease">
              <span className="group-hover:hidden duration-[200ms]">
                <img className="mt-5 w-20 mx-auto " src={CSS} alt="CSS IMG" />
                <p>CSS</p>
              </span>
              <p className="hidden group-hover:flex mx-auto py-[20px] text-[14px]">
                Intermediate: Learned through lots of trial and error to get the
                right styling. I learned this side by side with HTML
              </p>
            </div>
            <div className="group shadow-md rounded-xl shadow-[#8892b0] hover:scale-110 duration-[200ms] ease">
              <span className="group-hover:hidden duration-[200ms]">
                <img className="mt-5 w-20 mx-auto " src={JAVA} alt="JAVA IMG" />
                <p>JAVA</p>
              </span>
              <p className="hidden group-hover:flex mx-auto py-[20px] text-[14px]">
                Intermediate: This the primary language my highschool uses, so I
                learned it from my teacher and through my school curriculum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
