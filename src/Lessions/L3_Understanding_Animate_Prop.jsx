import React from "react";
import Header from "../components/Header";
import { motion } from "motion/react";

const L3_Understanding_Animate_Prop = () => {
  return (
    <>
      <Header text="L3_Understanding_Animate_Prop" />

      {/* Basic animate */}
      <motion.div
        className="box bg-blue-400"
        animate={{ x: 100, y: 100, rotate: 180, scale: 1.07, opacity: 0.4 }}
      >
        Box 1
      </motion.div>

      {/* change shape using animate prop (borderRadius: "new radius") */}
      {/* <motion.div
        className="box bg-green-400"
        animate={{
          x: 1000,
          borderRadius: "50%",
          rotate: 360,
        }}
        transition={{
          duration: 2,
          delay: 1,
        }}
      >
        Box 2
      </motion.div> */}

      {/*  change background color of box using animate prop (backgroundColor: "new color") */}

      {/* <motion.div
        className="box bg-pink-500"
        animate={{
          backgroundColor: "#ef4444",
        }}
        transition={{
          duration: 2,
          delay: 1,
        }}
      >
        Box 3
      </motion.div> */}

      {/* <motion.h1
        className="font-bold font-2xl underline text-amber-300"
        animate={{
          color: "#3b82f6",
        }}
        transition={{
          duration: 2,
          delay: 1,
        }}
      >
        Hello world
      </motion.h1> */}

      {/* shadow  */}
      {/* <motion.div
        className="w-40 h-40 bg-white rounded-xl"
        animate={{
          boxShadow: "0px 20px 50px rgba(100, 100, 100)",
        }}
      ></motion.div> */}

      {/* Key frame animations */}
      {/* Bouncing Ball motion */}

      {/* <motion.div
        className="box rounded-full bg-amber-500"
        animate={{
          y: [0, -100, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      >
        Ball
      </motion.div> */}

      {/* zig zag motion */}
      {/* <motion.div
        className="box bg-purple-500"
        animate={{
          x: [0, 100, -100, 100, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      >
        Box 4
      </motion.div> */}

      {/* multi property key frame, glow, miggle  */}
      {/* <motion.div
        className="box bg-violet-700"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          repeat: Infinity,
        }}
      >
        Box 5
      </motion.div> */}

      {/* Notification wiggle */}

      {/* <motion.div
        animate={{
          rotate: [0, 8, -8, 8, 0],
        }}
        transition={{
          repeat: Infinity,
        }}
      >
        🔔
      </motion.div> */}

      {/* heart pulse */}
      {/* <motion.div
        animate={{
          scale: 1.2,
        }}
        transition={
          {
            //   repeat: Infinity,
          }
        }
      >
        ❤️Love
      </motion.div> */}

      {/* moving box */}
      <motion.div
        className="box bg-orange-500"
        animate={{
          x: [0, 100, 100, 0, 0],
          y: [0, 0, 100, 100, 0],
          scale: [1, 1.2, 1.2, 1],
        }}
      >
        Box 7
      </motion.div>
    </>
  );
};

export default L3_Understanding_Animate_Prop;
