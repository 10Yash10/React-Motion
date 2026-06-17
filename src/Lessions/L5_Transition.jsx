import React from "react";
import Header from "../components/Header";
import { motion } from "motion/react";

// use easeout for entrance animations => Professional
// use spring with stiffness high and damping low for hover animation => Professional

const L5 = () => {
  return (
    <>
      <Header text="Lesson 5" />

      <motion.div
        className="box bg-blue-500"
        animate={{
          x: 1000,
        }}
        transition={{
          // type: "tween",  // reach destination in exactly "duration" (0.7) seconds
          type: "spring", // behaves like a spring, bounces back.
          stiffness: 300, // lower stiffness has soft and loose effect, while higher stiffness has fast and snappy effect.
          damping: 20, // controls bounce reduction, low damping means lower more bounce, higher damping means less bounce.

          duration: 0.7,
          delay: 0.5,
          // ease: "linear", // constant speed.
          // ease: "easeIn", // slow -> fast
          // ease: "easeOut", // fast -> slow
          ease: "easeInOut", // slow -> fast -> slow
        }}
      >
        Box 1
      </motion.div>

      <div className="w-full flex items-center justify-center">
        <motion.button
          className="border-2 border-blue-500 text-blue-500 rounded-lg w-20 h-10 cursor-pointer"
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 0.7,
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
        >
          Hire Me
        </motion.button>
      </div>

      {/* Property specific transition */}

      <motion.div
        className="box bg-pink-500"
        animate={{
          x: 1000,
          rotate: 360,
        }}
        transition={{
          x: {
            duration: 0.7,
          },
          rotate: {
            duration: 1.5,
          },
        }}
      >
        Box 2
      </motion.div>
    </>
  );
};

export default L5;
