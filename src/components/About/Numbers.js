import React from "react";
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

const Numbers = () => {
  return (
    <div className="In_numbers">
      <div className="numbers1">
        <h1>16,000+</h1>
        <h3>PUBLISHED BOOKS</h3>
        <p>
          From creators and publishers in
          <br /> 75+ countires.
        </p>
      </div>

      <div className="numbers1">
        <h1>175+</h1>
        <h3>PUBLISHERS</h3>
        <p>
          We're trusted by a ton of
          <br />
          publishers both big and small.
        </p>
      </div>

      <div className="numbers1">
        <h1>800K+</h1>
        <h3>UNIQUES</h3>
        <p>
          Represnting fans from all the
          <br />
          major comic countires.
        </p>
      </div>
    </div>
  );
};

export default Numbers;
