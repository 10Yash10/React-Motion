import React, { useEffect } from "react";
import Header from "../components/Header";
import { motion, useMotionValue } from "motion/react";

const L13 = () => {
  const x = useMotionValue(0);
  const valX = useMotionValue(0);
  const valY = useMotionValue(0);
  const rotate = useMotionValue(0);
  const opacity = useMotionValue(1);
  const scale = useMotionValue(1);

  useEffect(() => {
    const moveCursor = (e) => {
      valX.set(e.clientX - 8);
      valY.set(e.clientY - 8);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mouseMove", moveCursor);
    };
  }, [valX, valY]);

  return (
    <>
      <Header text="Lesson 13: Use Motion Value hook" />

      <div className="flex flex-col gap-6 p-6">
        <motion.div className="box bg-blue-500" style={{ x }}>
          Box 1
        </motion.div>

        <button onClick={() => x.set(200)}>click to move right</button>
        <button onClick={() => x.set(0)}>click to move left</button>

        <hr></hr>

        <motion.div
          style={{ x: valX, y: valY }}
          className="pointer-events-none fixed top-0 left-0 h-4 w-4 rounded-full border-2 border-red-500 z-50"
        ></motion.div>

        <motion.div
          style={{
            rotate,
          }}
          className="box bg-violet-500"
        >
          Box 2
        </motion.div>

        <button onClick={() => rotate.set(300)}>rotate</button>

        <hr></hr>

        <motion.div style={{ opacity }} className="box bg-green-500">
          Box 3
        </motion.div>

        <button onClick={() => opacity.set(0.2)}>opacity</button>

        <hr />

        <motion.div style={{ scale }} className="box bg-yellow-500">
          Box 4
        </motion.div>

        <div className="flex relative right-0 gap-3">
          <button
            onClick={() => {
              const prevValue = scale.get();
              scale.set(prevValue - 0.5);
            }}
            className="btn border-2 border-blue-500 text-blue-500 active:bg-blue-500/40 hover:bg-blue-500/10"
          >
            -
          </button>
          <button
            onClick={() => {
              const prevValue = scale.get();
              scale.set(prevValue + 0.5);
            }}
            className="btn border-2 border-blue-500 text-blue-500 active:bg-blue-500/40 hover:bg-blue-500/10"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default L13;
