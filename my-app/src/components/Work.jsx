import React from "react";

const Work = () => {
  return (
    <div id="work" className="w-full h-full pt-[30vh] sm:pt-[17vh] text-[#51557E] bg-[#1B2430]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
        <div className="pb-4">
          <p className="sm:text-3xl text-xl font-bold inline text-[#D6D5A8]"><span id="num" className="text-[#816797]">03.</span> Few Things I've Created</p>
        </div>
        <div className="grid grid-cols-1 grid-rows-3">
          <div className="grid grid-cols-3 grid-rows-3 my-[2rem]">
            <div className="pt-[50px]">
              <span className="text-[14px] text-[#816797]">Featured Project</span>
              <p className="py-1 text-[#D6D5A8] text-2xl">Project Name</p>
            </div>


            <div className=" col-span-2 row-span-3 bg-white flex w-[600px] h-[400px]">

            </div>
            <div>
              <ul className="pb-[px] flex flex-row">
                <li className="cursor-default" >React</li>
                <li className="cursor-default">React</li>
                <li className="cursor-default">React</li>
                <li className="cursor-default">React</li>
                <li className="cursor-default">React</li>
              </ul>
            </div>

            <div className="shadow-sm text-[#D6D5A8] shadow-black z-2 row-start-2 w-[400px] h-[120px] bg-[#816797] mr-[100px]">
              <p className="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corrupti quisquam ut quo blanditiis assumenda aliquid. Veniam voluptatem eos aperiam?</p>
            </div>
            <div>
              azfsf

            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default Work;
