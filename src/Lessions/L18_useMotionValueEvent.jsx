import React, { use, useEffect, useState } from "react";
import Header from "../components/Header";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

const L18 = () => {
  const x = useMotionValue(0);
  const { scrollY, scrollYProgress } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [percentage, setPercentage] = useState(0);

  //   useEffect(() => {
  //     const unsubscribe = x.on("change", (latest) => {
  //       console.log(latest);
  //     });

  //     return unsubscribe;
  //   }, [x]);

  //   the above can be written in this way as well, we don't have to specifically create subscribers and unsubscribe them and use react useEffect, all can be done by using simple useMotionValueEvent hook.

  //   Aslo we can write our own custom js code upon changing of any motion value

  useMotionValueEvent(x, "change", (latest) => {
    console.log(latest);
  });

  //  use case senario 1: hide and show nav bar upon scrolling.

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();

    if (latest > prev) {
      console.log("scrolling down");
      setHidden(true);
    } else {
      console.log("scrolling up");
      setHidden(false);
    }
  });

  // senario 2: show go to top button
  useMotionValueEvent(scrollY, "change", (latest) => {
    // const previous = useScroll.getPrevious();

    if (latest > 200) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  });

  // Real Use Case #3 — Navbar Background

  // Real Use Case #4 — Progress Percentage
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setPercentage(Math.round(latest * 100));
  });

  return (
    <>
      <Header text="Lesson 18: useMotionValueEvent hook" />

      <div
        id="top"
        style={{ height: "200vh" }}
        className="flex flex-col gap-6 p-6"
      >
        <motion.div style={{ x }} className="box bg-blue-500">
          Box 1
        </motion.div>
        <button
          onClick={() => x.set(x.get() + 50)}
          className="btn border-2 border-blue-500 text-blue-500 hover:bg-blue-500/20 duration-300"
        >
          Move Right
        </button>

        <motion.nav
          animate={{
            y: hidden ? -100 : 0,
            opacity: hidden ? 0 : 1,
          }}
          className="bg-white h-20 w-full text-black"
        >
          navbar
        </motion.nav>

        <motion.a
          href="#"
          animate={{
            opacity: showBackToTop ? 1 : 0,
          }}
          className="border-2 border-white fixed p-3 right-5 bottom-5 cursor-pointer"
        >
          Back to Top
        </motion.a>
      </div>

      <motion.p className="fixed top-5 right-5">{percentage}%</motion.p>
    </>
  );
};

export default L18;
