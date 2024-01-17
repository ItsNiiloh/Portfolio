import React, { useEffect } from "react";
import TextSpan from "./TextSpan";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {

  const sentence = "Hi,".split("");
  const sentence2 = "I'm José,".split("");
  const sentence3 = "web developer".split("");

  return (
    <section>
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
          <h1 className="font-extrabold text-5xl md:text-6xl xl:text-8xl mb-4 cursor-default text-white tracking-tight md:tracking-tighter">
            {sentence2.map((letter, index) => {
              return (
                <TextSpan key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </TextSpan>
              );
            })}
            <br />
            {sentence3.map((letter, index) => {
              return (
                <TextSpan key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </TextSpan>
              );
            })}
          </h1>
          <br />
          <TypeAnimation
            className="font-semi-bold text-2xl lg:text-4xl mb-6 text-gray-400 tracking-tighter uppercase"
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
          <div>
            <button className="font-bold px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200">
              Contact Me!
            </button>
            <button className="font-bold px-6 py-3 rounded-full bg-transparent border text-white border-white hover:bg-slate-600 mt-4">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center ml-4 mt-8 lg:mt-0">
          <div className="min-[320px]:w-[300px] min-[320px]:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] relative">
            <img
              className="rounded-full shadow-xl absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/me.svg"
              alt="Profile photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
