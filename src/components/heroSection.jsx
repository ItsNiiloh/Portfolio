import React from "react";
import TextSpan from "./utils/TextSpan";
import { TypeAnimation } from "react-type-animation";
import JoseFerreiraCV_FR from "../assets/JoseFerreiraCV_FR.pdf";
import JoseFerreiraCV_EN from "../assets/JoseFerreiraCV_EN.pdf";
import JoseFerreiraCV_PT from "../assets/JoseFerreiraCV_PT.pdf";
import { FiPaperclip } from "react-icons/fi";
import { useTranslation } from 'react-i18next';
import i18next from "i18next";
import me from "/images/me.jpg";

function HeroSection() {
  const renderSentence = (sentence) => {
    return sentence.map((letter, index) => (
      <TextSpan key={index}>{letter === " " ? "\u00A0" : letter}</TextSpan>
    ));
  };
  const { t } = useTranslation("global");

  const currentLanguage = i18next.language.split("-")[0];

  const CurriculumDownload = () => {
    if (currentLanguage === "fr") {
      return JoseFerreiraCV_FR;
    } else if (currentLanguage === "en") {
      return JoseFerreiraCV_EN;
    } else if (currentLanguage === "pt") {
      return JoseFerreiraCV_PT;
    }
  };

  return (
    <>
      <section id="heroSection" className="mb-8 pt-40 md:pt-24 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:py-44 overflow-hidden">
          <div className="not_copy col-span-7 place-self-center">
            <h1 className="font-extrabold text-6xl md:text-7xl xl:text-9xl mb-4 cursor-default text-white tracking-tight md:tracking-tighter">
              {renderSentence("Hello,".split(""))}
            </h1>
            <h2 className="font-extrabold text-3xl md:text-5xl xl:text-7xl mb-4 cursor-default text-white tracking-tight md:tracking-tighter">
              {renderSentence("José Ferreira,".split(""))}
            </h2>
            <h2 className="font-extrabold text-2xl md:text-4xl xl:text-6xl mb-4 cursor-default text-[#04FE94] tracking-tight md:tracking-tighter">
              {renderSentence("fullstack web developer.".split(""))}
            </h2>
            <TypeAnimation
              className="font-semi-bold text-lg lg:text-3xl my-4 md:my-8 text-[#bbbbbb] tracking-tighter uppercase"
              sequence={[
                "Bienvenue sur mon portfolio.",
                1000,
                "Welcome to my portfolio.",
                1000,
                "Bem-vindo ao meu portfólio.",
                1000,
                "Bienvenido a mi portafolio.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity} />
            <div className="flex justify-center lg:justify-start items-center">
              <a
                href="mailto:zeferreira1458@hotmail.com"
                target="_blank"
                className="flex justify-center items-center h-12 w-44 font-bold px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200"
                aria-label="Email"
              >
                {t("heroSection.message")}
              </a>
              <a
                href={CurriculumDownload()}
                target="_blank"
                download="JoseFerreiraCV.pdf"
                className="flex justify-center items-center gap-3 font-bold px-6 py-3 rounded-full bg-transparent border text-white border-white hover:bg-slate-600"
                aria-label="Curriculum Vitae"
              >
                CV
                <FiPaperclip />
              </a>
            </div>
          </div>
          <div className="col-span-5 place-self-center ml-4 my-8 lg:mt-0">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] relative">
              <img
                className="rounded-[4rem] shadow-xl absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"

                src=".\src\assets\me.jpg"
                alt="Profile photo" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
