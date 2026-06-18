import Header from "../components/Header";
import { motion } from "motion/react";

// resuable pattern
// initial={{
//   opacity: 0,
//   y: 40
// }}

// whileInView={{
//   opacity: 1,
//   y: 0
// }}

// transition={{
//   duration: 0.6
// }}

// viewport={{
//   once: true
// }}

const L8 = () => {
  return (
    <>
      <Header text="Lesson 8: While In View" sticky />

      <div className="flex flex-col p-6 mb-12 gap-6 h-[20000px]">
        <div className="w-full h-[1000px] bg-blue-200"></div>

        <motion.div
          className="box bg-blue-500"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.4,
          }}
        >
          Box 1
        </motion.div>

        <motion.div
          className="box bg-green-500"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 0.4,
            type: "spring",
            stiffness: 400,
            damping: 20,
          }}
        >
          Box 2
        </motion.div>

        <motion.div
          className="box bg-pink-500"
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.4,
          }}
        >
          Box 3
        </motion.div>

        {Array.from({ length: 50 }).map((_, index) => (
          <motion.div
            className="box bg-violet-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
            }}
          >
            Box {index + 1}
          </motion.div>
        ))}

        <motion.div
          className="card"
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 0.4,
          }}
        >
          Card 1
        </motion.div>
      </div>
    </>
  );
};

export default L8;
