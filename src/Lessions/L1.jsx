import React from "react";
import { motion } from "motion/react";
import Header from "../components/Header";

const L1 = () => {
  return (
    <>
      <Header text="Lesson 1" />
      {/* <motion.div
        animate={{
          x: 200,
          rotate: 180,
          scale: 1.5,
          opacity: 0.5,
        }}
        transition={{
          duration: 2,
          delay: 1,
        }}
        className="text-4xl font-bold flex items-center justify-center w-50 h-50 bg-red-500"
      >
        Box
      </motion.div> */}

      <motion.div
        animate={{ x: 150 }}
        transition={{ duration: 2, delay: 1 }}
        className="box bg-blue-400"
      >
        Box 1
      </motion.div>

      <motion.div
        animate={{ y: 130, scale: 1.3 }}
        transition={{ duration: 2, delay: 1 }}
        className="box bg-pink-400"
      >
        Box 2
      </motion.div>

      <motion.div
        transition={{ duration: 2, delay: 1 }}
        animate={{ rotate: 360, opacity: 0 }}
        className="box bg-green-400"
      >
        Box 3
      </motion.div>
    </>
  );
};

export default L1;
