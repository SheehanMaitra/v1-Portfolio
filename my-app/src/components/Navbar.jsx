import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import {FaLinkedinIn, FaGithubAlt, FaFileAlt, FaMailBulk } from "react-icons/fa";
import Logo from "../assests/Logo.png";
import Resume from "../assests/Resume.pdf"
import {HiOutlineMail} from "react-icons/hi"
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#2E4962] text-[#E6F4F1]">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "60px" }} />
      </div>
      {/*Menu*/}
      <ul className="hidden md:flex">
        <li>About</li>
        <li>Experience</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
      {/*Hamburger*/}
      {/*<div onClick ={handleClick} className='md:hidden z-10 cursor-pointer '>
        {!nav ? <FaBars/> : <FaTimes/>}
  </div>*/}
      <div onClick ={handleClick} className='md:hidden z-10'>
        <Hamburger
          size={25} color='#E6F4F1' direction="left"
        />
      </div>
      {/*Mobile-Menu*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#2E4962] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Experience</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
      {/*Social Icons(Resume)*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[170px] h-[55px] flex justify-center items-center ml-[-110px] hover:ml-[-5px] duration-300 bg-[#0072b1]">
            <a className="flex justify-between items-center w-full text-[#E6F4F1] text-2xl" href="https://www.linkedin.com/in/sheehanmaitra/" target="_blank">
              Linkedin <FaLinkedinIn size={30}  />
            </a>
          </li>
          <li className="w-[150px] h-[55px] flex justify-center items-center ml-[-90px] hover:ml-[-5px] duration-300 bg-[#171515]">
            <a className="flex justify-between items-center w-full text-[#E6F4F1] text-2xl" href="https://github.com/SheehanMaitra" target="_blank">
              Github <FaGithubAlt size={30}  />
            </a>
          </li>
          <li className="w-[385px] h-[55px] flex justify-center items-center ml-[-325px] hover:ml-[-5px] duration-300 bg-[#00897C]">
            <a className="flex justify-between items-center w-full text-[#E6F4F1] text-2xl" href="mailto:maitrasheehan@gmail.com" target="_blank">
              maitrasheehan@gmail.com <HiOutlineMail size={30}  />
            </a>
          </li>
          <li className="w-[170px] h-[55px] flex justify-center items-center ml-[-110px] hover:ml-[-5px] duration-300 bg-[#01243A]">
            <a className="flex justify-between items-center w-full text-[#E6F4F1] text-2xl" href={Resume} target="_blank">
              Resume <FaFileAlt size={30}  />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
