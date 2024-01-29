import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import TextSpan from "./utils/TextSpan";

// Icons
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { ToastContainer, toast } from "react-toastify";

const EmailSection = () => {
  const form = useRef();
  const notify = () => toast("Message envoyé! 🚀");
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

  const mecontacter = "Me contacter!".split("");

  return (
    <motion.div initial={{ scale: 0 }} animate={controls}>
      <div
        id="contactSection"
        className="md:grid md:grid-cols-1 gap-8 items-center pb-8 px-4 xl:gap-16"
      >
        <section className="grid md:grid-cols-2 my-12 gap-4 rounded-xl border border-[#2d2d2d] px-4 xl:py-16 xl:px-16 bg-gradient-to-br from-[#181818] to-[#0A0A0A] relative overflow-hidden shadow-xl">
          <div className="z-10">
            <h3 className="text-white font-bold text-4xl lg:text-5xl my-4 flex">
              {mecontacter.map((letter, index) => {
                return (
                  <TextSpan key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextSpan>
                );
              })}
            </h3>

            <p ref={ref} className="text-[#bbbbbb] mb-4 max-w-lg pt-6">
              Je suis actuellement à la recherche d'un stage pour ma formation
              FullStack Web Developer à la 3W Academy.
            </p>
            <div className="flex flex-row gap-2 text-white items-center">
              <h5 className="text-[#04FE94]">Mes liens </h5>
              <GoArrowRight className="text-[#04FE94]" />
              <a
                href="https://www.linkedin.com/in/joseferreira-"
                target="_blank"
                className="text-4xl"
              >
                <FaLinkedin className="text-4xl" />
              </a>
              <a href="https://www.github.com/ItsNiiloh" target="_blank">
                <FaSquareGithub className="text-4xl" />
              </a>
            </div>
          </div>
          <form
            className="flex flex-col gap-4 text-white my-4 z-10"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="user_name"
                className="bg-[#2B2B2B] focus:outline-[#04FE94] focus:outline-none text-white p-3 shadow-lg placeholder:text-[#7B7B7B]"
                placeholder="Votre nom"
                required
              />
              <input
                type="email"
                name="user_email"
                className="bg-[#2B2B2B] focus:outline-[#04FE94] focus:outline-none text-white p-3 shadow-lg placeholder:text-[#7B7B7B]"
                placeholder="Addresse courriel"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Votre message"
              className="bg-[#2B2B2B] focus:outline-[#04FE94] focus:outline-none text-white p-3 pb-24 shadow-lg placeholder:text-[#7B7B7B]"
            />
            <div className="flex items-center justify-end pt-4">
              <input
                type="submit"
                value="Envoyer!"
                className="border rounded-full shadow-lg hover:cursor-pointer hover:text-[#04FE94] hover:border-[#04FE94] py-2 px-6 text-white font-bold bg-transparent border-white transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110"
                required
              />
            </div>
            <ToastContainer
              progressClassName="bg-[#04FE94]"
              position="top-right"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition:Bounce
            />
          </form>
          <img
            src="/images/03.svg"
            alt=""
            className="absolute -right-10 -bottom-24 h-72 xl:h-96 z-0"
          />
        </section>
      </div>
    </motion.div>
  );
};

export default EmailSection;
