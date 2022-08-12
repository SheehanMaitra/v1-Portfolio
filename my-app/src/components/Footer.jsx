import React from 'react'
import { RiGithubLine } from 'react-icons/ri'
import { FiLinkedin } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
const Footer = () => {
    return (
        <div className=' w-full h-full  px-4 bg-[#2C3639] text-[#DCD7C9] text-[14px]'>
            <div className="">
                <ul className='flex-row flex xl:hidden content-center justify-center items-center pb-[1vh]'>
                    <li className="text-[#DCD7C9] hover:text-[#A27B5C] duration-[450ms] flex justify-center items-center ">
                        <a
                            href="https://github.com/SheehanMaitra"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <RiGithubLine size={25} className="grid" />
                        </a>
                    </li>
                    <div></div>
                    <li className="text-[#DCD7C9] hover:text-[#A27B5C] duration-[450ms] flex justify-center items-center ">
                        <a
                            href="https://www.linkedin.com/in/sheehanmaitra/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiLinkedin size={25} className="grid" />
                        </a>
                    </li>
                    <div></div>
                    <li className="text-[#DCD7C9]  hover:text-[#A27B5C] duration-[450ms] flex justify-center items-center  ">
                        <a
                            href="mailto:maitrasheehan@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <HiOutlineMail size={25} className="grid" />
                        </a>
                    </li>

                </ul>
                <div><a className="flex text-center text-[#A27B5C] py-[1vh] text-[13px] content-center justify-center items-center self-center" href="/">Designed & Crafted by Sheehan Maitra</a></div>
            </div>
        </div >
    )
}

export default Footer