import React from "react";
import cloud from "../../assets/cloud.png";
import { motion, Variants } from "framer-motion";

const imageAnimate = {
  offscreen: { y: -150, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 1, 0],
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 3,
    },
  },
};

const textAnimate = {
  offscreen: { x: 100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1,
    },
  },
};

const Whovr = () => {
  return (
    <motion.div
      className="Whovr"
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ staggerChildren: 0.2 }}>
      <motion.div className="Whovr_text1" variants={imageAnimate}>
        <h1>
          YOUR DESTINATION FOR OVER <br />
          <b>3000 COMICS</b> THE ENTIRE <br />
          MARVEL UNIVERSE.
        </h1>
        <p>We are the platform for comic lover's</p>
      </motion.div>
      <motion.div className="Whovr_img" variants={textAnimate}>
        <img src={cloud} alt="cloud" className="cloud" />
      </motion.div>
    </motion.div>
  );
};

export default Whovr;
