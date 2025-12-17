import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import TextSpan from "./utils/TextSpan";
import { useTranslation } from "react-i18next";

// Icons
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { ToastContainer, toast } from "react-toastify";

const EmailSection = () => {
  const { t } = useTranslation("global");
  const form = useRef();
  const notify = () => toast(t("emailSection.form.success"));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          e.target.reset();
          notify();
        },
        (error) => {
          console.log(error.text);
        }
      );
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

  const renderSentence = (sentence) => {
    return sentence.map((letter, index) => (
      <TextSpan key={index}>
        {letter === " " ? "\u00A0" : letter}
      </TextSpan>
    ));
  };

  return (
    <motion.div initial={{ scale: 0 }} animate={controls}>
      <div id="contactSection" className="md:grid md:grid-cols-1 gap-8 items-center pb-8 px-4 xl:gap-16">
        <section className="grid md:grid-cols-2 my-12 gap-4 rounded-xl border border-[#2d2d2d] px-4 xl:py-16 xl:px-16 bg-gradient-to-br from-[#181818] to-[#0A0A0A] relative overflow-hidden shadow-xl">
          <div className="z-10">
            <h3 className="text-white font-bold text-4xl lg:text-5xl my-4 flex">
              {renderSentence(t("emailSection.title").split(""))}
            </h3>

            <p ref={ref} className="text-[#bbbbbb] mb-4 max-w-lg pt-6">
              {t("emailSection.description")}
            </p>
            <div className="flex flex-row gap-2 text-white items-center">
              <h4 className="text-[#04FE94]">{t("emailSection.links")}</h4>
              <GoArrowRight className="text-[#04FE94]" />
              <a href="https://www.linkedin.com/in/joseferreira-" target="_blank" rel="noopener noreferrer" className="text-4xl" aria-label="My LinkedIn">
                <FaLinkedin className="text-4xl" />
              </a>
              <a href="https://www.github.com/ItsNiiloh" target="_blank" rel="noopener noreferrer" aria-label="My Github">
                <FaSquareGithub className="text-4xl"/>
              </a>
            </div>
          </div>
          <form className="flex flex-col gap-4 text-white my-4 z-10" ref={form} onSubmit={sendEmail}>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="user_name"
                className="bg-[#2B2B2B] focus:outline-[#04FE94] focus:outline-none text-white p-3 shadow-lg placeholder:text-[#7B7B7B]"
                placeholder={t("emailSection.form.name")}
                required
              />
              <input
                type="email"
                name="user_email"
                className="bg-[#2B2B2B] focus:outline-[#04FE94] focus:outline-none text-white p-3 shadow-lg placeholder:text-[#7B7B7B]"
                placeholder={t("emailSection.form.email")}
                required
              />
            </div>
            <textarea
              name="message"
              placeholder={t("emailSection.form.message")}
              className="bg-[#2B2B2B] focus:outline-[#04FE94] focus:outline-none text-white p-3 pb-24 shadow-lg placeholder:text-[#7B7B7B]"
            />
            <div className="flex items-center justify-end pt-4">
              <input
                type="submit"
                value={t("emailSection.form.button")}
                className="border rounded-full shadow-lg hover:cursor-pointer hover:text-[#04FE94] hover:border-[#04FE94] py-2 px-6 text-white font-bold bg-transparent border-white transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110"
                required
              />
            </div>
            <ToastContainer
              progressClassName="bg-[#04FE94]"
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss={false}
              draggable
              pauseOnHover={false}
              theme="dark"
              transition:Bounce
            />
          </form>
          <img
            src="./images/03.svg"
            alt=""
            className="absolute -right-10 -bottom-24 h-72 xl:h-96 z-0"
          />
        </section>
      </div>
    </motion.div>
  );
};

export default EmailSection;
