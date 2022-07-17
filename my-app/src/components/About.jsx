import React from "react";
import PFP from "../assests/pfp.png";
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
          <div>
            <p className="sm:text-left text-4xl font-bold">
              Hi. I'm Sheehan, nice to meet you. Feel free to take a look
              around.
            </p>
            <p className="item-body py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              expedita corporis eaque nobis enim harum ut repudiandae obcaecati.
              Et dicta nostrum minus mollitia deleniti maiores rerum nam est
              officiis magni cupiditate, at quibusdam qui id. Porro maxime magni
              fuga omnis a exercitationem consectetur quas architecto, obcaecati
              perspiciatis molestias reiciendis ipsam numquam, hic id. Sit quis
              beatae provident mollitia reiciendis quia pariatur soluta, ad
              debitis dolores veritatis? Error natus modi vero sapiente quaerat,
              aperiam eos hic consequuntur quas corrupti assumenda sint qui
              cupiditate accusamus suscipit possimus facere earum, omnis,
              expedita ullam maxime delectus nostrum dignissimos recusandae.
              Veniam tenetur quibusdam optio itaque!
            </p>
          </div>
          <div>
            <span class='tint'>
            <img className="w-[250px]" src={PFP} alt="profilepicture" />
            </span>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;
