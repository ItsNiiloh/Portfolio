import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const perspective = {
  initial: {
    rotateY: 90,
    opacity: 0,
  },
  enter: (i) => ({
    rotateY: 0,
    opacity: 1,
    transition: {
      delay: 0.6 + i * 0.15,
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { delay: 0.3 },
  },
};

const socials = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: { delay: 0.3 },
  },
};

const navItems = [
  {
    id: 0,
    name: "Home",
    number: "-00",
    to: "heroSection",
    spy: true,
    smooth: true,
    offset: -1600,
    duration: 1500,
  },
  {
    id: 1,
    name: "About",
    number: "-01",
    to: "aboutSection",
    spy: true,
    smooth: true,
    offset: -595,
    duration: 750,
  },
  {
    id: 2,
    name: "Projets",
    number: "-02",
    to: "projectSection",
    spy: true,
    smooth: true,
    offset: -350,
    duration: 750,
  },
  {
    id: 3,
    name: "Contact",
    number: "-03",
    to: "contactSection",
    spy: true,
    smooth: true,
    offset: 100,
    duration: 1500,
  },
];

const NavItems = () => {
  return (
    <div>
      <div className="pt-24 px-10 pb-12 h-full box-border flex flex-col gap-3">
        {navItems.map((item, i) => {
          return (
            <motion.div
              variants={perspective}
              animate="enter"
              initial="initial"
              exit="exit"
              custom={i}
              key={item.id}
            >
              <Link
                activeClass="active"
                to={item.to}
                spy={item.spy}
                smooth={item.smooth}
                offset={item.offset}
                duration={item.duration}
                className="relative font-medium uppercase text-[38px] text-[#bbbbbb] hover:text-white cursor-pointer after:content-[''] after:w-[0px] after:h-[3px] after:rounded-xl after:bg-[#04FE94] after:block after:duration-[0.5s] hover:after:w-full hover:after:delay-[0.15s] hover:after:duration-[0.5s] hover:after:ease-[easeInOut]"
              >
                {item.name}
                <span className="text-base">{item.number}</span>
              </Link>
            </motion.div>
          );
        })}
        <div>
          <motion.div
            variants={socials}
            animate="enter"
            initial="initial"
            exit="exit"
            className="flex justify-center items-center gap-16 absolute bottom-2 left-0 right-0 w-full h-24 border-t border-[#2d2d2d] border-opacity-50"
          >
            <a href="https://www.linkedin.com/in/joseferreira-" target="_blank">
              <FaLinkedin className="text-[52px] text-[#bbbbbb] hover:text-[#04FE94]" />
            </a>
            <a href="https://www.github.com/ItsNiiloh" target="_blank">
              <FaSquareGithub className="text-[52px] text-[#bbbbbb] hover:text-[#04FE94]" />
            </a>
            <a href="mailto:zeferreira1458@hotmail.com" target="_blank">
              <IoMail className="text-[52px] text-[#bbbbbb] hover:text-[#04FE94]" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NavItems;
