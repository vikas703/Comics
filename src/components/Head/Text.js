import React from "react";
import thunder from "../../assets/thunder.png";
import { motion, Variants } from "framer-motion";

const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 1, 0],
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1,
    },
  },
};

const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1,
    },
  },
};

const Text = () => {
  return (
    <motion.div
      className="In_Text"
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.7 }}
      transition={{ staggerChildren: 0.2 }}>
      <motion.div className="img1" variants={textAnimate}>
        <img src={thunder} alt="thunder" className="thunder" />
      </motion.div>

      <motion.div className="text" variants={imageAnimate}>
        <h1>COMICS</h1>
        <h3>WORLD</h3>
      </motion.div>

      <motion.div className="img2" variants={textAnimate}>
        <img src={thunder} alt="thunder" className="thunder1" />
      </motion.div>
    </motion.div>
  );
};

export default Text;

/* 
 initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ staggerChildren: 0.2 }}
variants={textAnimate} */
