import React, { useEffect } from "react";
import Header from "../components/Header";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const L23 = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const mouseXsmooth = useSpring(mouseX, {
    stiffness: 400,
    damping: 35,
  });

  const mouseYsmooth = useSpring(mouseY, {
    stiffness: 400,
    damping: 35,
  });

  // card tilt
  const normalizedX = useTransform(
    mouseX,
    (val) => (val - window.innerWidth / 2) / (window.innerWidth / 2),
  );
  const normalizedY = useTransform(
    mouseY,
    (val) => (val - window.innerHeight / 2) / (window.innerHeight / 2),
  );

  const rotateY = useTransform(normalizedY, [-1, 1], [-15, 15]);
  const rotateX = useTransform(normalizedX, [-1, 1], [-15, 15]);

  const rotateYsmooth = useSpring(rotateY);
  const rotateXsmooth = useSpring(rotateX);

  return (
    <>
      <Header text="Lesson 23: Mouse Interaction" />
      <motion.div
        style={{
          x: mouseXsmooth,
          y: mouseYsmooth,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none fixed top-0 left-0 w-4 h-4 rounded-full bg-blue-500 z-50"
      />

      <div className="flex gap-6 p-6">
        <motion.div
          style={{
            rotateY: rotateYsmooth,
            rotateX: rotateXsmooth,
            perspective: 1000,
          }}
          className="card bg-blue-500/20 shadow-xl shadow-blue-500"
        >
          Card 1
        </motion.div>
      </div>
    </>
  );
};

export default L23;
