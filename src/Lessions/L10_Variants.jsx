import React from "react";
import Header from "../components/Header";
import { motion } from "motion/react";

const L_10 = () => {
  const show = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        delay: 2,
        duration: 1,
      },
    },
  };

  const reveal = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        delay: 0.5,
        duration: 0.7,
      },

      viewport: {
        amount: 0.75,
        once: true,
      },
    },
  };

  //   Most teams use:

  // hidden
  // visible

  // for reveals.

  // closed
  // open

  // for menus.

  // idle
  // hover
  // tap

  // for interactions.

  // collapsed
  // expanded

  // for accordions.
  return (
    <>
      <Header text="Lesson 10: Variants" />

      <div className="flex flex-col p-6 gap-6 mb-12">
        <motion.div
          className="box bg-green-400"
          variants={show}
          initial="hidden"
          animate="visible"
        >
          Box 1
        </motion.div>

        <div className="h-[500px]"></div>

        <motion.div
          className="box bg-blue-500"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
        >
          Box 2
        </motion.div>
      </div>
    </>
  );
};

export default L_10;
