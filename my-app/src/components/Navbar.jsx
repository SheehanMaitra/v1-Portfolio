import React, { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { FiLinkedin } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import "../index.css";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      id="nav"
      className="fixed w-full h-[70px] sm:h-[75px] flex justify-between items-center px-4 bg-[#1B2430] text-[#D6D5A8] text-[14px]"
    >
      <link rel="stylesheet" href="index.css" />
      <Link to='home' smooth={true} duration={400}>
        <div className="cursor-pointer border-2 px-2 py-[4px] mx-4 my-3 text-xl sm:text-2xl text-[#816797] border-[#816797] hover:bg-[#816797] hover:bg-opacity-20">
          S
        </div>
      </Link>
      {/*Menu*/}

      <ul className="hidden align-top md:flex flex-row ">

        <li>
          <span className="text-[#816797]">01.</span>
          <Link to="about" smooth={true} offset={-255} duration={400}>
            <span className="hover:text-[#816797] font-bold duration-300">
              {" "}
              About
            </span>
          </Link>
        </li>
        <li>
          <span className="text-[#816797]">02.</span>
          <Link to="experience" smooth={true} offset={-90} duration={400}>
            <span className="hover:text-[#816797] font-bold duration-300">
              {" "}
              Experience
            </span>
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} offset={0} duration={400}>
            <span className="text-[#816797]">03.</span>
            <span className="hover:text-[#816797] font-bold duration-300">
              {" "}
              Projects
            </span>
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={20} duration={400}>
            <span className="text-[#816797]">04.</span>
            <span className="hover:text-[#816797] font-bold duration-300">
              {" "}
              Contact
            </span>
          </Link>
        </li>

      </ul>
      {/*Hamburger*/}
      <div onClick={handleClick} className="md:hidden fixed right-[3%] z-10 ">
        <Hamburger onClick={handleClick} toggle={setNav} toggled={nav} size={25} color="#D6D5A8" duration={.2} direction="right" />
      </div>
      {/*Mobile-Menu*/}
      <ul
        id="navmenu"
        className={
          !nav
            ? "translate-x-[100%] duration-[200ms] ease-in-out top-0 right-[0] h-screen flex flex-col justify-center items-center fixed w-[50%]"
            : "fixed translate-x-[0%] transition-transform duration-[200ms] ease-in-out top-0 right-0 w-[50%] h-screen shadow-lg shadow-black bg-[#1B2430] md:hidden flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-2xl  ">
          <span className="text-[#816797] flex flex-col items-center justify-center text-[20px]">
            01.
          </span>{" "}
          <Link onClick={handleClick} to="about" offset={-80} smooth={true} duration={400}>
            <span className="font-bold hover:text-[#816797] duration-300">
              About
            </span>
          </Link>
        </li>
        <li className="py-6 text-2xl ">
          <span className="text-[#816797] flex flex-col items-center justify-center text-[20px]">
            02.
          </span>{" "}
          <Link onClick={handleClick} to="experience" offset={30} smooth={true} duration={400}>
            <span className="font-bold hover:text-[#816797] duration-300">
              Experience
            </span>
          </Link>
        </li>
        <li className="py-6 text-2xl">
          {" "}
          <span className="text-[#816797] flex flex-col items-center justify-center text-[20px]">
            03.
          </span>{" "}
          <Link onClick={handleClick} to="work" offset={110} smooth={true} duration={400}>
            <span className="font-bold hover:text-[#816797] duration-300">
              Projects
            </span>
          </Link>
        </li>
        <li className="py-6 text-2xl">
          {" "}
          <span className="text-[#816797] flex flex-col items-center justify-center text-[20px]">
            04.
          </span>{" "}
          <Link onClick={handleClick} to="contact" offset={20} smooth={true} duration={400}>
            <span className="hover:text-[#816797] duration-300 font-bold">
              Contact
            </span>
          </Link>
        </li>
      </ul>
      {/*Social Icons(Resume)*/}
      <div className="hidden xl:flex fixed flex-col top-[75%] left-3">
        <ul>
          <li className="text-[#D6D5A8] hover:-translate-y-[3px] hover:text-[#816797] duration-[450ms] flex justify-center items-center pb-[17px]">
            <a
              href="https://github.com/SheehanMaitra"
              target="_blank"
              rel="noreferrer"
            >
              <RiGithubLine size={25} className="" />
            </a>
          </li>
          <li className="text-[#D6D5A8] hover:-translate-y-[3px] hover:text-[#816797] duration-[450ms] flex justify-center items-center pb-[17px]">
            <a
              href="https://www.linkedin.com/in/sheehanmaitra/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin size={25} className="" />
            </a>
          </li>

          <li className="text-[#D6D5A8] hover:-translate-y-[3px] hover:text-[#816797] duration-[450ms] flex justify-center items-center pb-[17px] ">
            <a
              href="mailto:maitrasheehan@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <HiOutlineMail size={25} />
            </a>
          </li>
          <li className="cursor-auto flex justify-center items-center ">
            <div className="w-[2px] flex border-b-[170px] border-[#D6D5A8]"></div>
          </li>
        </ul>
      </div>
    </div >
  );
};

export default Navbar;
