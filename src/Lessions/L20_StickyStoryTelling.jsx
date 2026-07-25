import React, { useRef } from "react";
import Header from "../components/Header";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

const L20 = () => {
  const storyTellingRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: storyTellingRef,
    offset: ["start start", "end end"],
  });

  // About Heading Animation
  const showHeading = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const showHeadingSmooth = useSpring(showHeading, {
    stiffness: 400,
    damping: 35,
  });

  const headingY = useTransform(scrollYProgress, [0, 0.1], [40, 0]);
  const headingYSmooth = useSpring(headingY, {
    stiffness: 400,
    damping: 35,
  });

  // New Rotate show screen.
  const scaleNewScreen = useTransform(scrollYProgress, [0.12, 0.25], [0, 1]);
  const rotateNewScreen = useTransform(scrollYProgress, [0.12, 0.25], [-90, 0]);

  const scaleNewScreenSmooth = useSpring(scaleNewScreen, {
    stiffness: 400,
    damping: 35,
  });
  const rotateNewScreenSmooth = useSpring(rotateNewScreen);

  // Heading Animation
  const showHeadingProject = useTransform(
    scrollYProgress,
    [0.27, 0.39],
    [0, 1],
  );
  const showHeadingProjectSmooth = useSpring(showHeadingProject, {
    stiffness: 400,
    damping: 35,
  });

  const headingProjectY = useTransform(scrollYProgress, [0.27, 0.39], [40, 0]);
  const headingProjectYSmooth = useSpring(headingProjectY, {
    stiffness: 400,
    damping: 35,
  });

  // Image of project
  const showImage1 = useTransform(scrollYProgress, [0.4, 0.5, 1], [0, 1, 1]);
  const scaleImage1 = useTransform(scrollYProgress, [0.4, 0.5, 1], [0.8, 1, 1]);

  const showImage2 = useTransform(scrollYProgress, [0.5, 0.6, 1], [0, 1, 1]);
  const scaleImage2 = useTransform(scrollYProgress, [0.5, 0.6, 1], [0, 1, 1]);

  const showImage3 = useTransform(scrollYProgress, [0.6, 1], [0, 1]);
  const scaleImage3 = useTransform(scrollYProgress, [0.6, 1], [0, 1]);

  return (
    <>
      <section style={{ height: "100vh" }}>
        <Header text="Lesson 20: Sticky Scroll Story Telling" />
      </section>

      <section ref={storyTellingRef} style={{ height: "400vh" }}>
        <div className="bg-blue-500 w-full h-screen sticky top-0 overflow-clip">
          <motion.h1
            style={{ opacity: showHeadingSmooth, y: headingYSmooth }}
            className="mt-4 text-7xl font-bold text-center font-mono"
          >
            About
          </motion.h1>

          <motion.div
            style={{
              scale: scaleNewScreenSmooth,
              rotate: rotateNewScreenSmooth,
            }}
            className="w-full h-screen bg-rose-500 absolute top-0 left-0"
          >
            <motion.h1
              style={{
                opacity: showHeadingProjectSmooth,
                y: headingProjectYSmooth,
              }}
              className="mt-4 text-7xl font-bold text-center font-mono"
            >
              Project Images
            </motion.h1>

            <div className="w-full h-[87%] relative flex items-center justify-center overflow-hidden">
              <motion.img
                style={{
                  opacity: showImage1,
                  scale: scaleImage1,
                }}
                src="https://images.pexels.com/photos/3218443/pexels-photo-3218443.jpeg"
                className=" absolute w-[90%] h-[90%]"
              />
              <motion.img
                style={{
                  opacity: showImage2,
                  scale: scaleImage2,
                }}
                src="https://images.pexels.com/photos/12993550/pexels-photo-12993550.jpeg"
                className="absolute w-[90%] h-[90%]"
              />
              <motion.img
                style={{
                  opacity: showImage3,
                  scale: scaleImage3,
                }}
                src="https://images.pexels.com/photos/15847939/pexels-photo-15847939.jpeg"
                className="absolute w-[90%] h-[90%]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ height: "100vh" }}></section>
    </>
  );
};

export default L20;
