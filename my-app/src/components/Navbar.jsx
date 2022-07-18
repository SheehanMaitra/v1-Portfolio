import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { FaLinkedinIn, FaGithubAlt, FaFileAlt } from "react-icons/fa";
import Resume from "../assests/Resume.pdf";
import { HiOutlineMail } from "react-icons/hi";
import '../index.css'
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="sticky w-full h-[70px] flex justify-between items-center px-4 bg-[#1A1D3D] text-[#F1F1E6] text-[15px]">
      <div className="cursor-pointer border-2 px-2 py-[4px] mx-4 my-3 text-2xl text-[#CDA715] border-[#CDA715] hover:bg-[#CDA715] hover:bg-opacity-20" >
        S
      </div>
      <link rel="stylesheet" href="index.css" />
      {/*Menu*/}
      <ul className="hidden md:flex">
        <li>About</li>
        <li>Experience</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
      {/*Hamburger*/}
      <div onClick={handleClick} className="md:hidden z-10">
        <Hamburger size={25} color="#F1F1E6" direction="left" />
      </div>
      {/*Mobile-Menu*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#1A1D3D] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Experience</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
      {/*Social Icons(Resume)*/}
      <div className="hidden xl:flex fixed flex-col top-[60%] left-0">
        <ul>
          <li className="w-[171px] h-[55px] flex justify-center items-center ml-[-111px] hover:ml-[-5px] duration-300 bg-[#0072b1]">
            <a
              className="flex justify-between items-center w-full text-[#F1F1E6] text-2xl"
              href="https://www.linkedin.com/in/sheehanmaitra/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin <FaLinkedinIn size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[55px] flex justify-center items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-[#171515]">
            <a
              className="flex justify-between items-center w-full text-[#F1F1E6] text-2xl"
              href="https://github.com/SheehanMaitra"
              target="_blank"
              rel="noreferrer"
            >
              Github <FaGithubAlt size={30} />
            </a>
          </li>
          <li className="w-[147px] h-[55px] flex justify-center items-center ml-[-87px] hover:ml-[-5px] duration-300 bg-[#00897C]">
            <a
              className="flex justify-between items-center w-full text-[#F1F1E6] text-2xl"
              href="mailto:maitrasheehan@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Gmail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[175px] h-[55px] flex justify-center items-center ml-[-115px] hover:ml-[-5px] duration-300 bg-[#6F3E3E]">
            <a
              className="flex justify-between items-center w-full text-[#F1F1E6] text-2xl"
              href={Resume}
              target="_blank"
              rel="noreferrer"
            >
              Resume <FaFileAlt size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
