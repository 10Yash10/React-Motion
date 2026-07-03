import React from "react";
import Header from "../components/Header";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Cartoon from "../assets/Cartoon.png";

const L16 = () => {
  const { scrollX, scrollXProgress, scrollY, scrollYProgress } = useScroll();

  //   old method
  //   const scaleY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  //   const smoothScaleY = useSpring(scaleY, {
  //     stiffness: 400,
  //     damping: 35,
  //   });

  // new method
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const smoothHeight = useSpring(height, {
    stiffness: 400,
    damping: 35,
  });

  const position = useTransform(
    scrollYProgress,
    [0, 0.3, 0.31],
    ["fixed", "fixed", "relative"],
  );

  const top = useTransform(
    scrollYProgress,
    [0, 0.3, 0.301],
    ["0px", "0px", "auto"],
  );

  //   const y = useTransform(scrollYProgress, [0.3, 1], [0, -300]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const skewX = useTransform(scrollYProgress, [0, 1], ["0deg", "20deg"]);

  const scaleImage = useTransform(scrollYProgress, [0, 0.03], [1, 1.5]);

  const textOpacity = useTransform(scrollYProgress, [0, 0.03], [1, 0]);

  return (
    <>
      <Header text="Lesson 16: useScroll" />

      {/* horizontal scrollbar */}
      <div className="flex flex-col gap-6 y-6 h-[2000px]">
        <div className="fixed top-0 left-0 h-2 w-full bg-white/5">
          <motion.div
            className="w-full h-full bg-blue-500"
            style={{
              width: smoothHeight,
            }}
          ></motion.div>
        </div>

        {/* vertical scrollbar */}
        <div className="fixed overflow-clip right-5 top-10 bottom-10 w-2 rounded-xl bg-white/5">
          <motion.div
            style={{
              //   scaleY: smoothScaleY,
              height: smoothHeight,
            }}
            className="w-full h-full origin-top bg-orange-400 rounded-full"
          ></motion.div>
        </div>

        {/* hero section */}
        <motion.div
          style={{
            // y,
            top,
            scale,
            skewX,
            position,
          }}
          className="w-full h-[600px] rounded-xl flex justify-center items-center border-2 m-3 border-white"
        >
          <motion.p
            style={{
              opacity: textOpacity,
            }}
          >
            Hero Section
          </motion.p>
          <motion.img
            style={{
              scale: scaleImage,
            }}
            className="w-50 h-50"
            src={Cartoon}
          />
        </motion.div>
      </div>
    </>
  );
};

export default L16;
