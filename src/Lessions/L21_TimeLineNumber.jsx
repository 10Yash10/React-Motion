import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

const L21 = () => {
  const educationRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: educationRef,
  });

  // show heading
  const educationHeadingOpacity = useTransform(
    scrollYProgress,
    [0, 0.2],
    [0, 1],
  );
  const educationHeadingY = useTransform(scrollYProgress, [0, 0.2], [40, 0]);

  const educationHeadingOpacitySmooth = useSpring(educationHeadingOpacity);
  const educationHeadingYSmooth = useSpring(educationHeadingY);

  // 1st education
  const height1 = useTransform(scrollYProgress, [0.2, 0.37], ["0%", "100%"]);
  const scale1 = useTransform(scrollYProgress, [0.37, 0.4], [1, 1.15]);
  const bg1 = useTransform(
    scrollYProgress,
    [0.37, 0.4],
    ["#fff", "oklch(62.3% 0.214 259.815)"],
  );
  const color1 = useTransform(scrollYProgress, [0.37, 0.4], ["#000", "#fff"]);
  const contentOpacity1 = useTransform(
    scrollYProgress,
    [0.2, 0.37, 1],
    [0, 1, 1],
  );
  const contentY1 = useTransform(scrollYProgress, [0.2, 0.37, 1], [40, 0, 0]);

  // 2nd Education
  const height2 = useTransform(scrollYProgress, [0.4, 0.57], ["0%", "100%"]);
  const scale2 = useTransform(scrollYProgress, [0.57, 0.6], [1, 1.15]);
  const bg2 = useTransform(
    scrollYProgress,
    [0.57, 0.6],
    ["#fff", "oklch(62.7% 0.194 149.214)"],
  );
  const color2 = useTransform(scrollYProgress, [0.57, 0.6], ["#000", "#fff"]);

  const contentOpacity2 = useTransform(
    scrollYProgress,
    [0.4, 0.57, 1],
    [0, 1, 1],
  );
  const contentY2 = useTransform(scrollYProgress, [0.4, 0.57, 1], [40, 0, 0]);

  // 2nd Education
  const height3 = useTransform(scrollYProgress, [0.6, 0.77], ["0%", "100%"]);
  const scale3 = useTransform(scrollYProgress, [0.77, 0.8], [1, 1.15]);
  const bg3 = useTransform(
    scrollYProgress,
    [0.77, 0.8],
    ["#fff", "oklch(70.5% 0.213 47.604)"],
  );
  const color3 = useTransform(scrollYProgress, [0.77, 0.8], ["#000", "#fff"]);

  const contentOpacity3 = useTransform(
    scrollYProgress,
    [0.6, 0.77, 1],
    [0, 1, 1],
  );
  const contentY3 = useTransform(scrollYProgress, [0.6, 0.77, 1], [40, 0, 0]);

  // 2nd Education
  const height4 = useTransform(scrollYProgress, [0.8, 0.97], ["0%", "100%"]);
  const scale4 = useTransform(scrollYProgress, [0.97, 1], [1, 1.15]);
  const bg4 = useTransform(
    scrollYProgress,
    [0.97, 1],
    ["#fff", "oklch(60.6% 0.25 292.717)"],
  );
  const color4 = useTransform(scrollYProgress, [0.97, 1], ["#000", "#fff"]);

  const contentOpacity4 = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const contentY4 = useTransform(scrollYProgress, [0.8, 1], [40, 0]);

  return (
    <>
      <section className="h-screen"></section>
      <section
        ref={educationRef}
        className="relative"
        style={{ height: "400vh" }}
      >
        <div className="sticky z-0 top-0 h-screen bg-neutral-900">
          <motion.h1
            style={{
              y: educationHeadingYSmooth,
              opacity: educationHeadingOpacitySmooth,
            }}
            className="text-center mt-4 text-6xl font-extrabold font-mono"
          >
            Education
          </motion.h1>

          <motion.div
            className="absolute left-4"
            style={{
              x: educationHeadingYSmooth,
              opacity: educationHeadingOpacitySmooth,
            }}
          >
            <div className="flex flex-col items-center gap-2">
              {/* 1st education */}
              <div className="w-1 h-30 rounded-full overflow-hidden bg-white mt-2 ">
                <motion.div
                  className="h-full w-full rounded-full bg-blue-500 origin-top"
                  style={{ height: height1 }}
                ></motion.div>
              </div>
              <motion.div
                style={{ backgroundColor: bg1, scale: scale1 }}
                className="h-6 w-6 rounded-full bg-white text-center"
              >
                <motion.span
                  style={{ color: color1 }}
                  className="text-black font-extrabold font-mono"
                >
                  1
                </motion.span>
              </motion.div>

              {/* 2nd education */}
              <div className="w-1 h-30 rounded-full overflow-hidden bg-white ">
                <motion.div
                  className="h-full w-full rounded-full bg-green-500 origin-top"
                  style={{ height: height2 }}
                ></motion.div>
              </div>
              <motion.div
                style={{ backgroundColor: bg2, scale: scale2 }}
                className="h-6 w-6 rounded-full bg-white text-center"
              >
                <motion.span
                  style={{ color: color2 }}
                  className="text-black font-extrabold font-mono"
                >
                  2
                </motion.span>
              </motion.div>

              {/* 3nd education */}
              <div className="w-1 h-30 rounded-full overflow-hidden bg-white ">
                <motion.div
                  className="h-full w-full rounded-full bg-orange-500 origin-top"
                  style={{ height: height3 }}
                ></motion.div>
              </div>
              <motion.div
                style={{ backgroundColor: bg3, scale: scale3 }}
                className="h-6 w-6 rounded-full bg-white text-center"
              >
                <motion.span
                  style={{ color: color3 }}
                  className="text-black font-extrabold font-mono"
                >
                  3
                </motion.span>
              </motion.div>

              {/* 3nd education */}
              <div className="w-1 h-30 rounded-full overflow-hidden bg-white ">
                <motion.div
                  className="h-full w-full rounded-full bg-violet-500 origin-top"
                  style={{ height: height4 }}
                ></motion.div>
              </div>
              <motion.div
                style={{ backgroundColor: bg4, scale: scale4 }}
                className="h-6 w-6 rounded-full bg-white text-center"
              >
                <motion.span
                  style={{ color: color4 }}
                  className="text-black font-extrabold font-mono"
                >
                  4
                </motion.span>
              </motion.div>

              {/* end */}
            </div>
          </motion.div>

          {/* main education section */}
          <div className="w-full h-full pl-14">
            <div className="w-full h-[86%] flex flex-col gap-6">
              <motion.div
                style={{ opacity: contentOpacity1, y: contentY1 }}
                className="w-full h-full flex items-center"
              >
                <div>
                  <h1 className="text-2xl font-bold font-mono text-blue-500">
                    High School
                  </h1>
                  <h2 className="text-lg font-mono text-white/40">
                    Scholar's Academic Home
                  </h2>
                  <span className="text-lg font-mono text-white/40">76.4%</span>
                </div>
              </motion.div>

              {/* 2nd */}
              <motion.div
                style={{ opacity: contentOpacity2, y: contentY2 }}
                className="w-full h-full flex items-center"
              >
                <div>
                  <h1 className="text-2xl font-bold font-mono text-green-500">
                    Senior Secondary School
                  </h1>
                  <h2 className="text-lg font-mono text-white/40">
                    Naini Valley
                  </h2>
                  <span className="text-lg font-mono text-white/40">72.6%</span>
                </div>
              </motion.div>

              {/* 3d */}
              <motion.div
                style={{ opacity: contentOpacity3, y: contentY3 }}
                className="w-full h-full flex items-center"
              >
                <div>
                  <h1 className="text-2xl font-bold font-mono text-orange-500">
                    Bachelor's of Computer Application
                  </h1>
                  <h2 className="text-lg font-mono text-white/40">
                    Amrapali Group of Institute and Technology
                  </h2>
                  <span className="text-lg font-mono text-white/40">70.6%</span>
                </div>
              </motion.div>
              {/* 4th */}
              <motion.div
                style={{ opacity: contentOpacity4, y: contentY4 }}
                className="w-full h-full flex items-center"
              >
                <div>
                  <h1 className="text-2xl font-bold font-mono text-violet-500">
                    Master in Computer Application
                  </h1>
                  <h2 className="text-lg font-mono text-white/40">
                    Galgotia's University
                  </h2>
                  <span className="text-lg font-mono text-white/40">85.5%</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen" />
    </>
  );
};

export default L21;
