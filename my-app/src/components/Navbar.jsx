import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { FiLinkedin } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import Resume from "../assests/Resume.pdf";
import { ImFileText } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import "../index.css";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      class="nav"
      className="sticky w-full h-[95px] flex justify-between items-center px-4 bg-[#0a192f] text-[#8892b0] text-[13px]"
    >
      <link rel="stylesheet" href="index.css" />
      <div className="cursor-pointer border-2 px-2 py-[4px] mx-4 my-3 text-2xl text-[#64ffda] border-[#64ffda] hover:bg-[#64ffda] hover:bg-opacity-20">
        S
      </div>
      {/*Menu*/}
      <ul className="hidden md:flex">
        <li>
          <span className="text-[#64ffda]">I.</span> About
        </li>
        <li>
          <span className="text-[#64ffda]">II.</span> Experience
        </li>
        <li>
          <span className="text-[#64ffda]">III.</span> Work
        </li>
        <li>
          <span className="text-[#64ffda]">IV.</span> Contact
        </li>
      </ul>
      {/*Hamburger*/}
      <div onClick={handleClick} className="md:hidden z-10 ">
        <Hamburger size={25} color="#F1F1E6" direction="left" />
      </div>
      {/*Mobile-Menu*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] md:hidden flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Experience</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
      {/*Social Icons(Resume)*/}
      <div className="hidden xl:flex fixed flex-col top-[65%] left-[1%]">
        <ul>
          <li className="text-[#8892b0] hover:-translate-y-[3px] hover:text-[#64ffda] duration-[300ms] flex justify-center items-center pb-[17px]">
            <a
              href="https://github.com/SheehanMaitra"
              target="_blank"
              rel="noreferrer"
            >
              <RiGithubLine size={23} className="" />
            </a>
          </li>
          <li className="text-[#8892b0] hover:-translate-y-[3px] hover:text-[#64ffda] duration-[300ms] flex justify-center items-center pb-[17px]">
            <a
              href="https://www.linkedin.com/in/sheehanmaitra/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin size={23} className="" />
            </a>
          </li>
          <li className="text-[#8892b0] hover:-translate-y-[3px] hover:text-[#64ffda] duration-[300ms] flex justify-center items-center pb-[17px]">
            <a href={Resume} target="_blank" rel="noreferrer">
              <ImFileText size={23} className="" />
            </a>
          </li>
          <li className="text-[#8892b0] hover:-translate-y-[3px] hover:text-[#64ffda] duration-[300ms] flex justify-center items-center pb-[17px] ">
            <a
              href="mailto:maitrasheehan@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <HiOutlineMail size={23} />
            </a>
          </li>
          <li className="cursor-auto flex justify-center items-center ">
            <div className="w-[1px] flex border-b-[220px]"></div>
          </li>
        </ul>
      </div>
      <div className="hidden xl:flex fixed flex-col  top-[69%] left-[92.5%]">
        <ul>
          <li className="text-[#8892b0] hover:translate-x-[3px] hover:text-[#64ffda] duration-[300ms] flex justify-center items-center pb-[28px] ">
            <a
              className="text-[16px] rotate-90 mb-[70px]"
              href="mailto:maitrasheehan@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              maitrasheehan@gmail
            </a>
          </li>
          <li className="cursor-auto flex justify-center items-center ">
            <div className="w-[1px] flex border-b-[220px]"></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
