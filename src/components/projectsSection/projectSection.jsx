import React, { useRef, useEffect } from "react";
import ProjectCards from "./Cards";
import { motion, useInView, useAnimation } from "framer-motion";
import TextSpan from "../utils/TextSpan";

const projects = [
  {
    id: 1,
    title: "Discord Youtube Bot",
    description:
      "Un bot Discord développé en Python pour lire l'audio des vidéos YouTube",
    image: "images/cards/discordbot.svg",
    gitUrl: "https://www.github.com/ItsNiiloh/Discord-YT-Music-Bot",
  },

  {
    id: 2,
    title: "CS50 Finance",
    description:
      "Clone d'une application d'investissement développée avec Python et Flask",
    image: "images/cards/cs50finance.svg",
    gitUrl: "https://www.github.com/ItsNiiloh/finance",
  },
  {
    id: 3,
    title: "Tic Tac Toe",
    description:
      "Projet de groupe réalisé avec JavaScript et HTML/CSS. Ma tâche consistait à manipuler le DOM",
    image: "images/cards/tictactoe.svg",
    gitUrl: "https://www.github.com/T-PRAT/tictactoe",
  },
];

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 260,
          damping: 20,
        },
      });
    }
  }, [isInView]);

  const mes = "Mes".split("");
  const projets = "Projets".split("");

  return (
    <motion.div initial={{ scale: 0 }} animate={controls}>
      <section className="md:grid md:grid-cols-1 gap-8 items-center py-8 px-4 xl:gap-16 relative">
        <div className="rounded-xl border border-[#2d2d2d] py-8 px-4 xl:py-16 xl:px-16 bg-gradient-to-br from-[#181818] to-[#0A0A0A] relative overflow-hidden shadow-xl">
          <div id="projectSection" className="flex gap-4 justify-center z-10">
            <h2 className="text-[#04FE94] font-bold text-4xl lg:text-5xl text-center mt-4 mb-8 md:mb-16 cursor-default">
              {mes.map((letter, index) => {
                return (
                  <TextSpan key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextSpan>
                );
              })}
            </h2>
            <h2 className="text-white font-bold text-4xl lg:text-5xl text-center mt-4 mb-8 md:mb-16 cursor-default">
              {projets.map((letter, index) => {
                return (
                  <TextSpan key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextSpan>
                );
              })}
            </h2>
          </div>
          <div
            ref={ref}
            className="grid md:grid-cols-3 lg:gap-12 gap-8 md:pb-8 z-10"
          >
            {projects.map((project) => (
              <ProjectCards
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                href={project.gitUrl}
                gitUrl={project.gitUrl}
              />
            ))}
          </div>
          <img
            src="/images/02.svg"
            alt=""
            className="absolute -right-10 -bottom-24 h-72 xl:h-96 z-0"
          />
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectSection;
