import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent,} from "framer-motion";
import NavItems from "./navItems";
import { useTranslation } from "react-i18next";

const variants = {
  open: {
    width: 350,
    height: 550,
    top: 25,
    left: 15,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: 110,
    height: 50,
    top: 50,
    left: 30,
    transition: { duration: 0.7, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
};

const NavBar = React.forwardRef(({ isActive, setIsActive }, ref) => {
  const { t } = useTranslation("global");
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latestScrollY) => {
    const prevScrollY = scrollY.getPrevious();
    if (latestScrollY > prevScrollY && latestScrollY > 150) setHidden(true);
    else setHidden(false);
  });

  return (
    <motion.nav
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 100 } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      ref={ref}
      className="sticky z-50"
    >
      <motion.div
        className="fixed overflow-hidden rounded-3xl bg-gradient-to-br from-[#1f1f1f] to-[#0a0a0a] border border-[#2d2d2d] opacity-95 shadow-lg"
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
        key={1}
      >
        <AnimatePresence>{isActive && <NavItems />}</AnimatePresence>
      </motion.div>
      <nav
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="fixed left-[30px] top-[50px] w-[110px] h-[50px] rounded-full cursor-pointer overflow-hidden shadow-sm"
      >
        <motion.div
          className="relative h-full w-full"
          animate={{ top: isActive ? "-100%" : "0" }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="h-full w-full flex justify-center items-center bg-white uppercase text-black text-lg font-semibold tracking-wide group">
            <NavbarText label={t("navbar.open")} />
          </div>

          <div className="h-full w-full flex justify-center items-center bg-black uppercase text-white text-lg font-semibold tracking-wide group">
            <NavbarText label={t("navbar.close")} />
          </div>
        </motion.div>
      </nav>
    </motion.nav>
  );
});

function NavbarText({ label }) {
  return (
    <>
      <p className="absolute scale-100 group-hover:scale-125 duration-300">
        {label}
      </p>
    </>
  );
}

export default NavBar;
