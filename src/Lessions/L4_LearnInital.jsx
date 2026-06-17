import React from "react";
import Header from "../components/Header";
import { motion } from "motion/react";

const L4 = () => {
  return (
    <>
      <Header text="Lesson 4" />

      {/* slide up reveal animation  */}
      <motion.div
        className="box bg-emerald-500"
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          delay: 0.5,
        }}
      >
        Box 1
      </motion.div>

      {/* heading */}
      <motion.h1
        className="text-2xl font-bold text-center"
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          delay: 0.5,
        }}
      >
        Frontend Developer
      </motion.h1>

      {/* zoom reveal */}
      <motion.div
        className="box bg-red-500"
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        Box 2
      </motion.div>

      <motion.div
        className="box bg-violet-500"
        initial={false}
        animate={{
          x: 100,
        }}
      />

      <motion.div
        className="box bg-blue-500"
        initial={{
          x: -200,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
        }}
      />
    </>
  );
};

export default L4;
