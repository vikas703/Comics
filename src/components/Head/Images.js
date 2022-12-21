import React from "react";
import thanos from "../../assets/thanos2.png";
import avengers from "../../assets/avengers.png";
import { motion, Variants } from "framer-motion";

const imageAnimate = {
  offscreen: { x: -300, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

const textAnimate = {
  offscreen: { y: -300, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 3,
    },
  },
};

const Images = () => {
  return (
    <motion.div
      className="Images"
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.9 }}
      transition={{ staggerChildren: 0.2 }}>
      <motion.div variants={imageAnimate}>
        <img src={avengers} alt="all" className="Images1" />
      </motion.div>
      <motion.div variants={textAnimate}>
        <img src={thanos} alt="all" className="Images1" />
      </motion.div>
    </motion.div>
  );
};

export default Images;
