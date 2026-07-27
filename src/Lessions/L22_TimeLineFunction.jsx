import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

export const timelineData = [
  {
    id: 1,
    year: "2021",
    title: "Started Programming",
    description:
      "Started learning HTML, CSS and JavaScript while building small personal projects.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    year: "2022",
    title: "Frontend Developer",
    description:
      "Started working with React and built responsive websites with TailwindCSS.",
    technologies: ["React", "TailwindCSS", "Vite"],
  },
  {
    id: 3,
    year: "2023",
    title: "MERN Stack Developer",
    description:
      "Worked on production applications using React, Node.js, Express and MongoDB.",
    technologies: ["React", "Node", "Express", "MongoDB"],
  },
  {
    id: 4,
    year: "2024",
    title: "React Native Developer",
    description:
      "Built cross-platform mobile applications with animations and API integrations.",
    technologies: ["React Native", "Redux", "Firebase"],
  },
  {
    id: 5,
    year: "2025",
    title: "Team Lead",
    description:
      "Led development, mentored junior developers and managed client projects.",
    technologies: ["Leadership", "Architecture", "Code Review"],
  },
  {
    id: 6,
    year: "Future",
    title: "Senior Full Stack Engineer",
    description: "Building scalable products and world-class user experiences.",
    technologies: ["System Design", "Cloud", "AI"],
  },
];

const L22 = () => {
  return (
    <main
      className="
      min-h-screen
      bg-neutral-950
      text-white
      "
    >
      {/* Hero */}

      <section
        className="
        h-screen
        flex
        items-center
        justify-center
        "
      >
        <div className="text-center">
          <h1
            className="
            text-7xl
            font-black
            "
          >
            Yash Sharma
          </h1>

          <p
            className="
            mt-6
            text-neutral-400
            text-xl
            "
          >
            Full Stack Developer
          </p>
        </div>
      </section>

      <Timeline />

      <section
        className="
        h-screen
        flex
        items-center
        justify-center
        "
      >
        <h2
          className="
          text-5xl
          font-bold
          "
        >
          Contact Me
        </h2>
      </section>
    </main>
  );
};

export default L22;

// ================================= useTimelineProgress
const useTimelineProgress = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const smoothHeight = useSpring(lineHeight, {
    stiffness: 180,
    damping: 30,
  });

  return {
    sectionRef,
    scrollYProgress,

    lineHeight: smoothHeight,
  };
};

// ================================= useTimelineItemProgress
const useTimelineItemProgress = (index, total, progress) => {
  console.log(index, total, progress);
  const start = index / total;
  const end = (index + 1) / total; // end here is basically the next range
  const threshold = start + (end - start) * 0.4;

  // example:
  // index = 2 and total = 4 so start = 0.5 and end = 0.75.
  // this whole is now dynamic.

  //   circle scale
  const circleScale = useTransform(
    progress,
    [start, threshold, end],
    [1, 1.2, 1],
  );

  //   card opacity
  const cardOpacity = useTransform(progress, [start, end], [0, 1]);

  //   card y
  const cardY = useTransform(progress, [start, end], [60, 0]);

  //   circle color
  const circleColor = useTransform(
    progress,
    [start, end],
    ["#525252", "#3b82f6"],
  );

  return {
    start,
    end,
    threshold,

    circleScale,
    circleColor,

    cardOpacity,
    cardY,
  };
};

// ================================= TimelineProgress
const TimelineProgress = ({ lineHeight }) => {
  return (
    <>
      {/* Background Line */}
      <div
        className="
        absolute
        left-6
        top-0
        h-full
        w-[3px]
        rounded-full
        bg-neutral-700
        "
      />

      {/* Animated Progress */}
      <motion.div
        className="
        absolute
        left-6
        top-0
        w-[3px]
        rounded-full
        bg-gradient-to-b
        from-blue-500
        via-cyan-400
        to-indigo-500
        origin-top
        "
        style={{
          height: lineHeight,
        }}
      />
    </>
  );
};

// ================================= TimeLineItem
const TimelineItem = ({ key, item, index, totalItems, scrollYProgress }) => {
  console.log(index, totalItems, scrollYProgress);
  const { circleScale, circleColor, cardOpacity, cardY } =
    useTimelineItemProgress(index, totalItems, scrollYProgress);

  return (
    <div
      className="
      relative
      flex
      gap-8
      min-h-[250px]
      "
    >
      {/* Left Side */}

      <div
        className="
        relative
        flex
        flex-col
        items-center
        w-12
        "
      >
        <motion.div
          style={{
            scale: circleScale,
            backgroundColor: circleColor,
          }}
          className="
          h-12
          w-12
          rounded-full
          border-4
          border-white
          shadow-xl
          flex
          items-center
          justify-center
          text-sm
          font-bold
          text-white
          z-10
          "
        >
          {String(item.id).padStart(2, "0")}
        </motion.div>
      </div>

      {/* Card */}

      <motion.div
        style={{
          opacity: cardOpacity,
          y: cardY,
        }}
        className="
        flex-1
        rounded-2xl
        border
        border-neutral-700
        bg-neutral-900
        p-8
        shadow-xl
        "
      >
        <p className="text-blue-400 font-semibold">{item.year}</p>

        <h2
          className="
          mt-2
          text-2xl
          font-bold
          text-white
          "
        >
          {item.title}
        </h2>

        <p
          className="
          mt-4
          text-neutral-400
          leading-relaxed
          "
        >
          {item.description}
        </p>

        <div
          className="
          mt-6
          flex
          flex-wrap
          gap-3
          "
        >
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="
              rounded-full
              bg-neutral-800
              px-4
              py-2
              text-sm
              text-neutral-300
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// ================================= TimeLine

const Timeline = () => {
  const { timelineRef, scrollYProgress, lineHeight } = useTimelineProgress();

  return (
    <section
      ref={timelineRef}
      className="
      relative
      max-w-6xl
      mx-auto
      py-32
      px-8
      "
    >
      <TimelineProgress lineHeight={lineHeight} />

      <div
        className="
        flex
        flex-col
        gap-24
        "
      >
        {timelineData.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            index={index}
            totalItems={timelineData.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};

// ================================= useTimelineProgress
