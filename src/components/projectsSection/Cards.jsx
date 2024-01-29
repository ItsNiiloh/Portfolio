import React from "react";
import { IoIosLink } from "react-icons/io";

const ProjectCards = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div className="z-10 shadow-lg">
      <div
        className="h-52 md:h-64 w-full rounded-t-2xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      >
        <div className="absolute overlay top-0 left-0 w-full h-full bg-[#202020] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 items-center justify-center group-hover:rounded-t-2xl">
          <a
            href={gitUrl}
            target="_blank"
            className="relative h-16 w-16 border-2 border-[#ADB7BE] rounded-full flex items-center justify-center hover:border-[#04FE94] group/link"
          >
            <IoIosLink className="h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover/link:text-[#04FE94]"></IoIosLink>
          </a>
        </div>
      </div>
      <div className="text-white bg-[#202020] rounded-b-2xl py-3 px-4 h-32">
        <h5 className="md:text-xl font-bold mb-2">{title}</h5>
        <p className="text-[#bbbbbb]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCards;
