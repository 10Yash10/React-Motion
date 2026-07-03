import React from "react";
import Header from "../components/Header";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

const L15 = () => {
  const scrollY = useScroll().scrollY;
  const x = useMotionValue(0);
  const drag = useMotionValue(0);
  const slide = useMotionValue(0);

  const scale = useTransform(x, [0, 300], [1, 1.35]);
  const rotate = useTransform(x, [0, 300], [0, 90]);
  const opacity = useTransform(x, [0, 300], [1, 0.7]);
  const background = useTransform(
    x,
    [0, 300],
    ["oklch(68.5% 0.169 237.323)", "oklch(64.5% 0.246 16.439)"],
  );

  // drag and rotate;
  const rotateOnDrag = useTransform(() => drag.get() * 0.72);

  // slide
  const slideRight = useTransform(() => slide.get() * 5);
  const slideRotate = useTransform(() => {
    return Math.sin(slide.get() / 15) * 45;
  });

  const scaleY = useTransform(scrollY, [0, 500], ["0%", "100%"]);

  const smoothScaleY = useSpring(scaleY, {
    stiffness: 400,
    damping: 35,
  });

  const smoothX = useSpring(x, {
    stiffness: 400,
    damping: 35,
  });
  const smoothScale = useSpring(scale, {
    stiffness: 400,
    damping: 35,
  });
  const smoothRotate = useSpring(rotate, {
    stiffness: 400,
    damping: 35,
  });
  const smoothOpacity = useSpring(opacity, {
    stiffness: 400,
    damping: 35,
  });

  return (
    <>
      <Header text="Lesson 15: useTransform" />

      <div className="flex flex-col gap-6 p-6 h-[2000px]">
        <motion.div
          style={{
            x: smoothX,
            scale: smoothScale,
            rotate: smoothRotate,
            opacity: smoothOpacity,
            background,
            // radius,
          }}
          className="box bg-blue-500"
        >
          Box 1
        </motion.div>
        <motion.button
          style={{
            background,
          }}
          onClick={() => (x.get() === 300 ? x.set(0) : x.set(300))}
          className="btn  text-white hover:bg-blue-500/10 active:bg-blue-500/20"
        >
          Toggle Scale
        </motion.button>

        <hr />

        <motion.div
          style={{
            scale: smoothScaleY,
            // scale: scaleY,
          }}
          className="box bg-emerald-500 fixed right-5 bottom-5"
        >
          Chatbot
        </motion.div>

        <motion.div
          className="box bg-green-500 hover:cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{
            left: 0,
            right: 500,
          }}
          style={{
            x: drag,
            rotate: rotateOnDrag,
          }}
        >
          Box 3
        </motion.div>

        <hr />

        <motion.input
          type="range"
          min="0"
          max="100"
          onChange={(e) => slide.set(e.target.value)}
        />

        <motion.div
          className="box bg-violet-500"
          style={{
            x: slideRight,
            rotate: slideRotate,
          }}
        >
          Box 4
        </motion.div>
      </div>
    </>
  );
};

export default L15;
