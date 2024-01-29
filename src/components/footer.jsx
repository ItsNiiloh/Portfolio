import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="container border-t border-[#2c2c2c] p-8 flex justify-between">
        <span className="text-[#bbbbbb] font-semibold">
          © 2024 José Ferreira
        </span>
        <div className="socials right-0 flex flex-row gap-2">
          <a href="https://www.linkedin.com/in/joseferreira-" target="_blank">
            <FaLinkedin className="text-2xl text-[#bbbbbb] hover:text-[#04FE94]" />
          </a>
          <a href="https://www.github.com/ItsNiiloh" target="_blank">
            <FaSquareGithub className="text-2xl text-[#bbbbbb] hover:text-[#04FE94]" />
          </a>
          <a href="mailto:zeferreira1458@hotmail.com" target="_blank">
            <IoMail className="text-2xl text-[#bbbbbb] hover:text-[#04FE94]" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
