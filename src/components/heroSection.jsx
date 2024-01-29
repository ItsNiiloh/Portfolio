import React from "react";
import TextSpan from "./utils/TextSpan";
import { TypeAnimation } from "react-type-animation";
import CV from "../assets/CV.pdf";

const HeroSection = () => {
  const sentence = "Hello,".split("");
  const sentence2 = "José Ferreira,".split("");
  const sentence3 = "fullstack web developer.".split("");

  return (
    <section id="heroSection" className="mb-8 pt-40 md:pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 px-10 lg:py-44 overflow-hidden">
        <div className="col-span-7 place-self-center">
          <h1 className="font-extrabold text-6xl md:text-7xl xl:text-9xl mb-4 cursor-default text-white tracking-tight md:tracking-tighter">
            {sentence.map((letter, index) => {
              return (
                <TextSpan key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </TextSpan>
              );
            })}
          </h1>
          <h2 className="font-extrabold text-3xl md:text-5xl xl:text-7xl mb-4 cursor-default text-white tracking-tight md:tracking-tighter">
            {sentence2.map((letter, index) => {
              return (
                <TextSpan key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </TextSpan>
              );
            })}
          </h2>
          <h2 className="font-extrabold text-2xl md:text-4xl xl:text-6xl mb-4 cursor-default text-[#04FE94] tracking-tight md:tracking-tighter">
            {sentence3.map((letter, index) => {
              return (
                <TextSpan key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </TextSpan>
              );
            })}
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
            repeat={Infinity}
          />
          <div className="">
            <a
              href="mailto:zeferreira1458@hotmail.com"
              target="_blank"
              className="font-bold px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200"
            >
              Me Contacter!
            </a>
            <a
              href={CV}
              target="_blank"
              download="JoseFerreiraCV.pdf"
              className="font-bold px-6 py-3 rounded-full bg-transparent border text-white border-white hover:bg-slate-600 mt-4"
            >
              Mon CV!
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center ml-4 my-8 lg:mt-0">
          <div className="min-[320px]:w-[300px] min-[320px]:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] relative">
            <img
              className="rounded-[4rem] shadow-xl absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/me.svg"
              alt="Profile photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
