import React, { useEffect } from "react";
import Header from "../components/Header";
import { motion, useMotionValue, useSpring } from "motion/react";

// The main drawback of using useMotionValue is that it directly jumps to the value, rather than going smoothly, so we need to use useSpring, useTransition hooks to make it move more smoothly.

const L14 = () => {
  // initializing motion values by useMotionValue hook;

  const x = useMotionValue(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotate = useMotionValue(0);

  // setting it to spring by using useSpring;
  const springX = useSpring(x, {
    stiffness: 300,
    damping: 25,
  });
  const springMouseX = useSpring(mouseX, {
    stiffness: 300,
    damping: 30,
  });
  const springMouseY = useSpring(mouseY, {
    stiffness: 300,
    damping: 30,
  });
  const smoothRotate = useSpring(rotate, {
    stiffness: 300,
    damping: 25,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      mouseX.set(e.clientX + 10);
      mouseY.set(e.clientY + 10);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => window.removeEventListener("mousemove", mouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <Header text="Lesson 14: useSpring" />

      <motion.div
        style={{
          x: springMouseX,
          y: springMouseY,
        }}
        className="fixed pointer-events-none left-0 top-0 w-4 h-4 rounded-full border-2 border-emerald-500 shadow-xl shadow-emerald-500/20 "
      ></motion.div>

      <div className="flex flex-col gap-6 p-6 ">
        <motion.div style={{ x: springX }} className="box bg-blue-500">
          Box 1
        </motion.div>

        <div className="flex gap-3">
          <button
            onClick={() => x.get() > 0 && x.jump(x.get() - 250)}
            className="btn border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 active:bg-blue-500/20"
          >
            Left
          </button>
          <button
            onClick={() => x.get() < 500 && x.jump(x.get() + 250)}
            className="btn border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 active:bg-blue-500/20"
          >
            Right
          </button>
        </div>

        <hr />

        <motion.div
          className="box bg-orange-500"
          style={{ rotate: smoothRotate }}
        >
          Box 2
        </motion.div>

        <button
          className="btn border-2 border-orange-400 text-orange-400 hover:bg-orange-500/10 active:bg-orange-500/20"
          onClick={() => rotate.set(rotate.get() + 30)}
        >
          Rotate
        </button>
      </div>
    </>
  );
};

export default L14;
