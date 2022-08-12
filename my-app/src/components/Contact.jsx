import React from "react";

const Contact = () => {
  return <div id="contact" className="w-full h-full bg-[#2C3639] text-[#BECACE] pt-[1rem] pb-[25vh] sm:pb-[30vh]">
    <div className="max-w-[1000px]  text-center mx-auto p-3 flex flex-col justify-center w-full h-full">
      <div>
        <div>
          <span id="num" className=" text-center text-xl sm:text-2xl font-bold text-[#A27B5C]">
            04.
          </span>
          <span> </span>
          <p className="text-[#A27B5C] text-center text-xl sm:text-2xl font-bold inline ">
            Let's Chat
          </p>
          <p className="text-[#DCD7C9] font-bold text-3xl sm:text-5xl py-[15px]">Say Hello</p>
          <p className=" sm:mx-[190px] text-[17px] py-[5px]">I am always looking for new oppurtunities to expand on my education and career. Whether you have questions or just want to drop by, I will try my best to get back to!  </p>
          <a className=""
            href="mailto:maitrasheehan@gmail.com"
            target="_blank"
            rel="noreferrer"><button className=" text-center text-[#A27B5C] ease-in-out text-bold border-[#A27B5C] hover:-translate-y-[.4rem] duration-[450ms] border-[2px] px-6 py-3 my-[30px] rounded-xl hover:bg-[#A27B5C] hover:bg-opacity-20"> Get In Touch</button></a>
        </div>
      </div>
    </div>
  </div>;
};

export default Contact;
