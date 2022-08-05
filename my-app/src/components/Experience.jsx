import React from "react";
import "../index.css";
const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full h-screen bg-[#0a192f] text-[#8892b0] pb-[25rem]"
    >
      <link rel="stylesheet" href="index.css" />
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
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
          <div className="p-4 w-[150%] h-[500px] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="backdrop-blur-lg bg-[url('https://canaan-creative.com/wp-content/uploads/2020/05/8b66da7e76c48e3eb6f7b0099b0dc090.png')] shadow-sm rounded-lg bg-[] shadow-[#8892b0] duration-[200ms] ease">
              <p className="text-2xl font-bold">What I have done</p>
              <ul className="pt-[2rem]">
                <li className="cursor-default">hi</li>
              </ul>
            </div>
            <div className="group bg-white shadow-xl rounded-xl shadow-[#8892b0] duration-[200ms] ease">
              <ul className="pt-[2rem]">
                <li className="cursor-default">hi</li>
              </ul>
            </div>
            <div className="group bg-white shadow-xl rounded-xl shadow-[#8892b0] duration-[200ms] ease">
              <ul className="pt-[2rem]">
                <li className="cursor-default">hi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
