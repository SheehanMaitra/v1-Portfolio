import React from "react";
import PFP from "../assests/pfp.png"
const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#1A1D3D] text-[#BFBDE8]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-left pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#CDA715]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 px-3">
          <div className="sm:text-left text-4xl font-bold ">
            <p>Hi. I'm Sheehan, nice to meet you. Feel free to take a look around.</p>
          </div>
          <div>
          </div>
          <div><p className="item-body py-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis,
              error minus sint a consequuntur beatae veniam, explicabo nihil
              nisi placeat accusamus dolorem dolore, ex fugiat.
            </p></div>
            <div>
            <img className="w-90 h-90"src={PFP} alt="profilepicture" />  
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
