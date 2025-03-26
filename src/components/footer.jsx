import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoLanguageSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation("global");

  const lng = i18n.language.split("-")[0];
  
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <div className="container border-t border-[#2c2c2c] p-8 flex justify-between">
        <span className="text-[#bbbbbb] font-semibold text-xs min-[430px]:text-base">
          © 2024 José Ferreira
        </span>
        <div className="grid grid-cols-8 min-[470px]:grid-cols-1 justify-center items-center">
          <div className="socials right-0 flex flex-row gap-2 col-span-7">
            <a
              href="https://www.linkedin.com/in/joseferreira-"
              target="_blank"
              aria-label="My LinkedIn"
            >
              <FaLinkedin className="text-2xl text-[#bbbbbb] hover:text-[#04FE94]" />
            </a>
            <a
              href="https://www.github.com/ItsNiiloh"
              target="_blank"
              aria-label="My Github"
            >
              <FaGithubSquare className="text-2xl text-[#bbbbbb] hover:text-[#04FE94]" />
            </a>
            <a
              href="mailto:zeferreira1458@hotmail.com"
              target="_blank"
              aria-label="Email"
            >
              <IoMail className="text-2xl text-[#bbbbbb] hover:text-[#04FE94]" />
            </a>
            <div className="flex items-center justify-center">
              <IoLanguageSharp className="text-2xl text-[#bbbbbb]"/>
              <select
                value={lng}
                onChange={handleLanguageChange}
                className="text-[#bbbbbb] bg-transparent border-none outline-none cursor-pointer"
                aria-label="Language Selector"
              >
                <option value="en">English</option>
                <option value="pt">Português</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;