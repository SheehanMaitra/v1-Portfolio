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
      id="nav"
      className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-[#8892b0] text-[14px] "
    >
      <link rel="stylesheet" href="index.css" />
      <div className="cursor-pointer border-2 px-2 py-[4px]  mx-4 my-3 text-2xl text-[#64ffda] border-[#64ffda] hover:bg-[#64ffda] hover:bg-opacity-20">
        S
      </div>
      {/*Menu*/}
      <ul className="hidden align-top md:flex flex-row ">
        <li>
          <span className="text-[#64ffda]">01.</span>
          <span className="hover:text-[#64ffda] font-bold duration-300">
            {" "}
            About
          </span>
        </li>
        <li>
          <span className="text-[#64ffda]">02.</span>
          <span className="hover:text-[#64ffda] font-bold duration-300">
            {" "}
            Present
          </span>
        </li>
        <li>
          <span className="text-[#64ffda]">03.</span>
          <span className="hover:text-[#64ffda] font-bold duration-300">
            {" "}
            Projects
          </span>
        </li>
        <li>
          <span className="text-[#64ffda]">04.</span>
          <span className="hover:text-[#64ffda] font-bold duration-300">
            {" "}
            Contact
          </span>
        </li>
      </ul>
      {/*Hamburger*/}
      <div onClick={handleClick} className="md:hidden fixed right-[5%] z-10 ">
        <Hamburger size={25} color="#F1F1E6" direction="right" />
      </div>
      {/*Mobile-Menu*/}
      <ul
        id="navmenu"
        className={
          !nav
            ? "translate-x-[100%] duration-[110ms] ease-out top-0 right-0 h-screen flex flex-col justify-center items-center fixed"
            : "fixed translate-x-[0%] backdrop-blur-[45px] transition-transform duration-[400ms] ease top-0 right-0 w-[35%] h-screen shadow-lg shadow-black bg-[#0a192f] md:hidden flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-2xl hover:text-[#64ffda] duration-300 ">
          <span className="text-[#64ffda] flex flex-col items-center justify-center text-[20px]">
            I.
          </span>{" "}
          About
        </li>
        <li className="py-6 text-2xl hover:text-[#64ffda] duration-300">
          <span className="text-[#64ffda] flex flex-col items-center justify-center text-[20px]">
            II.
          </span>{" "}
          Experience
        </li>
        <li className="py-6 text-2xl hover:text-[#64ffda] duration-300">
          {" "}
          <span className="text-[#64ffda] flex flex-col items-center justify-center text-[20px]">
            III.
          </span>{" "}
          Work
        </li>
        <li className="py-6 text-2xl hover:text-[#64ffda] duration-300">
          {" "}
          <span className="text-[#64ffda] flex flex-col items-center justify-center text-[20px]">
            IV.
          </span>{" "}
          Contact
        </li>
      </ul>
      {/*Social Icons(Resume)*/}
      <div className="hidden xl:flex fixed flex-col top-[25%] left-[5px]">
        <ul>
          <li className="cursor-auto flex justify-center items-center ">
            <div className="w-[2px] flex border-t-[170px] mb-[15px] "></div>
          </li>
          <li className="text-[#8892b0] hover:-translate-y-[3px] hover:text-[#64ffda] duration-[300ms] flex justify-center items-center pb-[17px]">
            <a
              href="https://github.com/SheehanMaitra"
              target="_blank"
              rel="noreferrer"
            >
              <RiGithubLine size={25} className="" />
            </a>
          </li>
          <li className="text-[#8892b0] hover:-translate-y-[3px] hover:text-[#64ffda] duration-[300ms] flex justify-center items-center pb-[17px]">
            <a
              href="https://www.linkedin.com/in/sheehanmaitra/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin size={25} className="" />
            </a>
          </li>
          <li className="text-[#8892b0] hover:-translate-y-[3px] hover:text-[#64ffda] duration-[300ms] flex justify-center items-center pb-[17px]">
            <a href={Resume} target="_blank" rel="noreferrer">
              <ImFileText size={25} className="" />
            </a>
          </li>
          <li className="text-[#8892b0] hover:-translate-y-[3px] hover:text-[#64ffda] duration-[300ms] flex justify-center items-center pb-[17px] ">
            <a
              href="mailto:maitrasheehan@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <HiOutlineMail size={25} />
            </a>
          </li>
          <li className="cursor-auto flex justify-center items-center ">
            <div className="w-[2px] flex border-b-[170px]"></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
