import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StickyScrollProjects() {
  const targetRef = useRef(null);

  // Track scroll progress of the outer container
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform 0-1 scroll progress into horizontal movement (adjust "-75%" based on content width)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <>
      <div className="h-screen" />
      <section
        ref={targetRef}
        className="relative h-[300vh] bg-neutral-900 text-white"
      >
        {/* Sticky container that stays in view */}
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8 px-12">
            {/* Project Cards */}
            <div className="h-[400px] w-[600px] flex-shrink-0 rounded-2xl bg-neutral-800 p-8 flex items-center justify-center text-3xl font-bold">
              Project One
            </div>
            <div className="h-[400px] w-[600px] flex-shrink-0 rounded-2xl bg-neutral-800 p-8 flex items-center justify-center text-3xl font-bold">
              Project Two
            </div>
            <div className="h-[400px] w-[600px] flex-shrink-0 rounded-2xl bg-neutral-800 p-8 flex items-center justify-center text-3xl font-bold">
              Project Three
            </div>
            <div className="h-[400px] w-[600px] flex-shrink-0 rounded-2xl bg-neutral-800 p-8 flex items-center justify-center text-3xl font-bold">
              Project Four
            </div>
          </motion.div>
        </div>
      </section>
      <div className="h-screen" />
    </>
  );
}
