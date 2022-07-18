import React from "react";
import "../index.css";
import Python from "../assests/python-logo.png";
import Html from "../assests/html-logo.png"
const Experience = () => {
  return (
    <div name="experience" className="w-full h-screen bg-[#1A1D3D] text-[#BFBDE8]">
      <link rel="stylesheet" href="index.css" />
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-[#CDA715]">
              Experience
            </p>
            <p className="pt-4 font-bold">Current Technologies I am Working With:</p>
          </div>
          <div className="p-4 w-full h-[200px] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div
              class="python"
              className="group shadow-md border-[1px] border-[#CDA715] rounded-xl shadow-[#CDA715] hover:scale-110 duration-[200ms] ease"
            >
              <span className="group-hover:hidden duration-[200ms]">
                <img
                  className="mt-5 w-20 mx-auto "
                  src={Python}
                  alt="Python IMG"
                />
                <p>PYTHON</p>
              </span>
              <p className="hidden group-hover:flex mx-auto py-[20px] text-[14px]">Beginner: Self taught from learning Java</p>
            </div>
            <div
              class="python"
              className="group shadow-md border-[1px] border-[#CDA715] rounded-xl shadow-[#CDA715] hover:scale-110 duration-[200ms] ease"
            >
              <span className="group-hover:hidden duration-[200ms]">
                <img
                  className="mt-5 w-20 mx-auto "
                  src={Html}
                  alt="Html IMG"
                />
                <p>HTML</p>
              </span>
              <p className="hidden group-hover:flex mx-auto py-[20px] text-[14px]">I self taught this language during quaritine and am able to code in beginner levels.</p>
            </div>
            <div
              class="python"
              className="group shadow-md border-[1px] border-[#CDA715] rounded-xl shadow-[#CDA715] hover:scale-110 duration-[200ms] ease"
            >
              <span className="group-hover:hidden duration-[200ms]">
                <img
                  className="mt-5 w-20 mx-auto "
                  src={Python}
                  alt="Python IMG"
                />
                <p>PYTHON</p>
              </span>
              <p className="hidden group-hover:flex mx-auto py-[20px] text-[14px]">I self taught this language during quaritine and am able to code in beginner levels.</p>
            </div>
            <div
              class="python"
              className="group shadow-md border-[1px] border-[#CDA715] rounded-xl shadow-[#CDA715] hover:scale-110 duration-[200ms] ease"
            >
              <span className="group-hover:hidden duration-[200ms]">
                <img
                  className="mt-5 w-20 mx-auto "
                  src={Python}
                  alt="Python IMG"
                />
                <p>PYTHON</p>
              </span>
              <p className="hidden group-hover:flex mx-auto py-[20px] text-[14px]">I self taught this language during quaritine and am able to code in beginner levels.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
