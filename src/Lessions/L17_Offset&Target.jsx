import React, { useRef } from "react";
import Header from "../components/Header";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Cartoon from "../assets/cartoon.png";

const L17 = () => {
  return (
    <>
      <Header text="Lesson 17: Offset & Target" />
      <main style={{ height: "700vh" }} className="flex flex-col gap-6 p-6">
        <div style={{ height: "100vh" }} />
        <HeroSection />
        <Section2 />
        <Projects />
      </main>
    </>
  );
};

const HeroSection = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,

    offset: ["center end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -20]);
  return (
    <section
      ref={heroRef}
      style={{ height: "100vh" }}
      className="border-2 border-white rounded-xl flex items-center justify-center"
    >
      <div className="flex items-center">
        <div>
          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.4,
            }}
          >
            Person
          </motion.h1>
          <motion.h2
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.4,
            }}
          >
            sub heading
          </motion.h2>
        </div>
        <motion.img style={{ scale, rotate }} src={Cartoon} />
      </div>
    </section>
  );
};

const Section2 = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,

    offset: ["start center", "end center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section
      ref={targetRef}
      style={{ height: "100vh" }}
      className="border-2 border-white rounded-xl"
    >
      <ProgressBar progress={scrollYProgress} color={"blue"} />
      <motion.p style={{ opacity: scrollYProgress, scale }}>
        Hi i am text that fade in
      </motion.p>
    </section>
  );
};

const Projects = () => {
  const projectRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["start center", "end center"],
  });
  return (
    <section
      ref={projectRef}
      className="h-[200vh] relative p-6 border-2 border-white rounded-2xl"
    >
      <ProgressBar progress={scrollYProgress} />
      <div className="flex gap-2 flex-wrap">
        {Array.from({ length: 8 }).map((item, index) => (
          <motion.div
            className="card"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.4,
            }}
            viewport={{
              //   amount: 0.4,
              once: true,
              margin: "-100px",
            }}
          ></motion.div>
        ))}
      </div>
    </section>
  );
};

const ProgressBar = ({ progress, color = "orange" }) => {
  const bgColor = `bg-${color}-500`;
  const height = useTransform(progress, [0, 1], ["0%", "100%"]);
  const smoothHeight = useSpring(height, {
    stiffness: 400,
    damping: 35,
  });
  return (
    <div className="w-full mb-6 h-4 bg-white rounded-full overflow-clip sticky top-0">
      <motion.div
        style={{
          width: smoothHeight,
          height: "100%",
        }}
        className={`w-full ${bgColor} origin-left rounded-full`}
      ></motion.div>
    </div>
  );
};

export default L17;
