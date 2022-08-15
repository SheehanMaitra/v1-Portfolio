import React from 'react'
import { RiGithubLine } from 'react-icons/ri'
import { FiLinkedin } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
const Footer = () => {
    return (
        <div className=' w-full h-full  px-4 bg-[#1B2430] text-[#D6D5A8] text-[14px]'>
            <div className="">
                <ul className='flex-row flex xl:hidden content-center justify-center items-center pb-[1vh]'>
                    <li className="text-[#D6D5A8] hover:text-[#816797] duration-[450ms] flex justify-center items-center ">
                        <a
                            href="https://github.com/SheehanMaitra"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <RiGithubLine size={25} className="grid" />
                        </a>
                    </li>
                    <div></div>
                    <li className="text-[#D6D5A8] hover:text-[#816797] duration-[450ms] flex justify-center items-center ">
                        <a
                            href="https://www.linkedin.com/in/sheehanmaitra/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiLinkedin size={25} className="grid" />
                        </a>
                    </li>
                    <div></div>
                    <li className="text-[#D6D5A8]  hover:text-[#816797] duration-[450ms] flex justify-center items-center  ">
                        <a
                            href="mailto:maitrasheehan@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <HiOutlineMail size={25} className="grid" />
                        </a>
                    </li>

                </ul>
                <div><a className="flex text-center text-[#816797] py-[1vh] text-[13px] hover:text-[#D6D5A8] duration-[400ms] content-center justify-center items-center self-center" href="https://github.com/SheehanMaitra/v1-Portfolio"
                    target="_blank"
                    rel="noreferrer">Developed by Sheehan Maitra</a></div>
            </div>
        </div >
    )
}

export default Footer