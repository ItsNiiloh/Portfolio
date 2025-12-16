import React, { useTransition, useState, useRef, useEffect } from "react";
import TabButton from "./TabButton";
import { TypeAnimation } from "react-type-animation";
import { motion, useInView, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t, i18n } = useTranslation("global");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const tabContent = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-4">Front End</h3>
            <ul className="text-base lg:text-lg text-[#bbbbbb]">
              <li>JavaScript</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Vite</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-4">Back End</h3>
            <ul className="lg:text-lg text-[#bbbbbb]">
              <li>Python</li>
              <li>Flask</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>SQL</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Experience",
      id: "experience",
      content: (
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2">3W Academy PRO</h3>
            <p className="text-base lg:text-lg text-[#bbbbbb]">
              {t("aboutSection.experience.FWD.description")}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              Harvard Computer Science 50
            </h3>
            <p className="text-base lg:text-lg text-[#bbbbbb]">
              CS50’s Introduction to Programming with Python
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-4">{t("aboutSection.education.school_1")}</h3>
          <li className="text-base lg:text-lg text-[#bbbbbb]">
            {t("aboutSection.education.degree_1")}
          </li>
          <h3 className="text-xl pt-4 font-bold mb-4">
            {t("aboutSection.education.school_2")}
          </h3>

          <li className="text-base lg:text-lg text-[#bbbbbb]">
            {t("aboutSection.education.degree_2")}
          </li>
        </div>
      ),
    },
  ];

  const handleTabChange = (tab) => {
    startTransition(() => {
      setTab(tab);
    });
  };

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

  return (
    <motion.div initial={{ scale: 0 }} animate={controls}>
      <section className="text-white pb-4">
        <div className="md:grid md:grid-cols-1 gap-8 items-center py-8 px-4 xl:gap-16">
          <div className="md:grid md:grid-cols-2 gap-8 justify-center items-center py-8 px-4 xl:gap-16 xl:px-16 relative bg-gradient-to-br from-[#181818] to-[#0A0A0A] rounded-xl border border-[#2d2d2d] overflow-hidden shadow-xl">
            <div className="flex justify-center items-center">
              <img
                className="hidden md:flex z-10 py-[95px]"
                src="Portfolio/images/skills.webp"
                alt="skills"
                width={550}
                height={550}
              />
            </div>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full lg:pt-10 relative z-10">
              <TypeAnimation
                className="text-4xl lg:text-5xl font-bold text-white mb-4"
                sequence={["Qui suis-je?", 1000, "About me!", 1000, "Sobre mim.", 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
              <p className="text-base lg:text-lg text-[#bbbbbb] pt-4" ref={ref}>
                {t("aboutSection.description")}
              </p>
              <div className="flex flex-row mt-8 justify-start">
                <TabButton
                  setTab={() => handleTabChange("skills")}
                  active={tab === "skills"}
                >
                  {" "}
                  Skills{" "}
                </TabButton>
                <TabButton
                  setTab={() => handleTabChange("experience")}
                  active={tab === "experience"}
                >
                  {" "}
                  {t("aboutSection.experience.title")}{" "}
                </TabButton>
                <TabButton
                  setTab={() => handleTabChange("education")}
                  active={tab === "education"}
                >
                  {" "}
                  {t("aboutSection.education.title")}{" "}
                </TabButton>
              </div>
              <div className="mt-8">
                {isPending ? (
                  <p className="text-base lg:text-lg cursor-wait">Loading...</p>
                ) : (
                  tabContent.find((content) => content.id === tab).content
                )}
              </div>
            </div>
            <img
              id="aboutSection"
              src="/images/01.svg"
              alt=""
              className="absolute -right-10 -bottom-24 h-72 xl:h-96 z-0"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutSection;
