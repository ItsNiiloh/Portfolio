"use client";
import TextSpan from "./TextSpan";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import { TypeAnimation } from "react-type-animation";

const tabContent = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold mb-4">Front End</h3>
          <ul className="text-base lg:text-lg">
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
          <ul className="text-base lg:text-lg">
            <li>Python</li>
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
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold mb-4">Fullstack Web Developer</h3>
        <TextSpan
          text="Full Stack Academy"
          link="https://www.fullstackacademy.com/"
        />
        <p className="text-base lg:text-lg">
          I am currently enrolled in the Fullstack Web Developer Program at 3W
          Academy. I am learning the fundamentals of full stack web development
          including JavaScript, React, Node.js, MySQL, HTML, CSS, and Git.
        </p>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold mb-4">Computer Science 50</h3>
        <p className="text-base lg:text-lg">
          - 2023 | CS50’s Introduction to Programming with Python
        </p>
        <h3 className="text-2xl pt-4 font-bold mb-4">
          Université Pasquale Paoli
        </h3>

        <p className="text-base lg:text-lg">
          - 2021/2022 | Licence Economie et Gestion
        </p>
        <h3 className="text-2xl pt-4 font-bold mb-4">
          Lycée Jean Paul de Rocca-Serra
        </h3>

        <p className="text-base lg:text-lg">
          - 2017/2018 | BAC-Sciences et Technologies du management et de la
          Gestion
        </p>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab) => {
    startTransition(() => {
      setTab(tab);
    });
  };

  return (
    <section className="text-white py-8">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img src="/skills.png" alt="skills" width={700} height={700} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full lg:pt-20">
          <TypeAnimation 
            className="text-5xl font-bold text-white mb-6"             
            sequence={[
                "About me! :)",
                2000,
                "About me!",
                500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}/>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Python, Node.js, Express, SQL,
            HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row mt-8">
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
              Experience{" "}
            </TabButton>
            <TabButton
              setTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {isPending ? (
              <p className="text-base lg:text-lg">Loading...</p>
            ) : (
              tabContent.find((content) => content.id === tab).content
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
