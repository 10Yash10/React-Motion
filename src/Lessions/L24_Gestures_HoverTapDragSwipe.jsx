import React, { useRef } from "react";
import Header from "../components/Header";
import { motion, useMotionValue, useTransform } from "motion/react";

// Different types of gesutre are 1. whileHover 2. whileTap 3. whileFocus 4. whileDrag and drag.

const L24 = () => {
  const constraintRef = useRef(null);
  const sliderConstraintRef = useRef(null);
  const x = useMotionValue(0);

  const rotate = useTransform(x, [-200, 0, 200], [-30, 0, 30]);

  return (
    <>
      <Header text="Lesson 24: Gesutre-Hover,Tap,Drag,Swipe" />

      <div className="flex flex-col gap-6 p-6 mt-7">
        <motion.button
          whileHover={{ y: -5, scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 20,
          }}
          className="btn border-2 border-blue-500 active:bg-blue-500/20 hover:bg-blue-500/10 text-blue-500 cursor-pointer"
        >
          Hover Me
        </motion.button>

        <motion.input
          type="text"
          placeholder="type anything"
          className="border-b-2 border-blue-500 px-4 py-2 outline-none"
          whileFocus={{ scale: 1.05 }}
        />
      </div>

      <div ref={constraintRef} className="border h-[50vh] m-6 overflow-hidden">
        <motion.div
          drag
          // drag="x"
          // drag="y"
          whileDrag={{ scale: 0.8, rotate: 3 }}
          className="box bg-blue-500 cursor-grab"
          dragConstraints={constraintRef}
          dragElastic={0.2}
          dragMomentum={false} // when false stop immediately when drag release
          dragSnapToOrigin={false} // when true snaps back to original position
          onDragStart={() => {
            console.log("drag start...");
          }}
          onDrag={() => {
            console.log("dragging......");
          }}
          onDragEnd={() => {
            console.log("drag end...");
          }}
        >
          Box 1
        </motion.div>
      </div>

      <div className="m-6 flex flex-col gap-6">
        <motion.div style={{ rotate }} className="box bg-violet-500">
          Box 2
        </motion.div>

        <div
          ref={sliderConstraintRef}
          className="flex bg-white/10 rounded-full items-center justify-center"
        >
          <motion.div
            drag="x"
            // dragConstraints={sliderConstraintRef}
            dragConstraints={{
              left: -200,
              right: 200,
            }}
            dragElastic={0.2}
            dragMomentum={false}
            dragSnapToOrigin
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 1.5 }}
            className="w-4 h-4 rounded-full bg-violet-500 cursor-grab active:cursor-grabbing"
            style={{ x }}
          ></motion.div>
        </div>
      </div>
    </>
  );
};

export default L24;
