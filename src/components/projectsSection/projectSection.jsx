import React, { useRef, useEffect } from "react";
import ProjectCards from "./Cards";
import { motion, useInView, useAnimation } from "framer-motion";
import TextSpan from "../utils/TextSpan";
import { useTranslation } from "react-i18next";

const ProjectSection = () => {
  const { t, i18n } = useTranslation("global");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      id: 1,
      title: t("projectsSection.projects.project_1.title"),
      description:
        t("projectsSection.projects.project_1.description"),
      image: "images/cards/discordbot.png",
      gitUrl: "https://www.github.com/ItsNiiloh/Discord-YT-Music-Bot",
    },
    {
      id: 2,
      title: t("projectsSection.projects.project_2.title"),
      description:
        t("projectsSection.projects.project_2.description"),
      image: "images/cards/cs50finance.png",
      gitUrl: "https://www.github.com/ItsNiiloh/finance",
    },
    {
      id: 3,
      title: t("projectsSection.projects.project_3.title"),
      description:
        t("projectsSection.projects.project_3.description"),
      image: "images/cards/tictactoe.png",
      gitUrl: "https://www.github.com/T-PRAT/tictactoe",
    },
  ];

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

  const renderText = (text) => {
    return text.map((letter, index) => (
      <TextSpan key={index}>{letter === " " ? "\u00A0" : letter}</TextSpan>
    ));
  };

  return (
    <motion.div initial={{ scale: 0 }} animate={controls}>
      <section className="md:grid md:grid-cols-1 gap-8 items-center py-8 px-4 xl:gap-16 relative">
        <div className="rounded-xl border border-[#2d2d2d] py-8 px-4 xl:py-16 xl:px-16 bg-gradient-to-br from-[#181818] to-[#0A0A0A] relative overflow-hidden shadow-xl">
          <div id="projectSection" className="flex gap-4 justify-center z-10">
            <h2 className="text-[#04FE94] font-bold text-4xl lg:text-5xl text-center mt-4 mb-8 md:mb-16 cursor-default">
              {renderText(t("projectsSection.title_1").split(""))}
            </h2>
            <h2 className="text-white font-bold text-4xl lg:text-5xl text-center mt-4 mb-8 md:mb-16 cursor-default">
              {renderText(t("projectsSection.title_2").split(""))}
            </h2>
          </div>
          <div
            ref={ref}
            className="grid md:grid-cols-3 lg:gap-12 gap-8 md:pb-8 z-10"
          >
            {projects.map(({ id, title, description, image, gitUrl }) => (
              <ProjectCards
                key={id}
                title={title}
                description={description}
                imgUrl={image}
                gitUrl={gitUrl}
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
