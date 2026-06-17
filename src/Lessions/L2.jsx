import React from "react";
import Header from "../components/Header";
import { motion } from "motion/react";
import Cartoon from "../assets/cartoon.png";

const L2 = () => {
  return (
    <>
      {/* We can use motion on all the normal html elements */}
      <Header text="Lesson 2" />
      <motion.img
        src={Cartoon}
        className="h-50"
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 2,
          delay: 0.5,
          repeat: Infinity,
          ease: "anticipate",
        }}
      />
      <motion.button
        whileHover={{
          scale: 1.05,
        }}
      >
        Hire Me
      </motion.button>

      {/* practice */}
      <motion.div className="box bg-blue-400" animate={{ x: 250 }}>
        Box 1
      </motion.div>

      <motion.div className="box bg-pink-400" animate={{ rotate: 90 }}>
        Box 2
      </motion.div>

      <motion.div className="box bg-green-400" animate={{ scale: 2 }}>
        Box 3
      </motion.div>

      <motion.div className="box bg-yellow-400" animate={{ opacity: 0.3 }}>
        Box 4
      </motion.div>
    </>
  );
};

export default L2;
