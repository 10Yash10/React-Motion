import Header from "../components/Header";
import { motion } from "motion/react";

const L25_WhileInView = () => {
  return (
    <>
      <Header text="Lesson 25: whileInView & viewport" />
      <div className="h-screen mt-6">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-center text-2xl font-bold mt-6"
        >
          Scroll down for more animation
        </motion.h1>
      </div>

      <div className="flex flex-col gap-6 p-6 h-screen overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="text-center text-2xl font-bold"
        >
          Hello motion
        </motion.h1>

        <motion.p
          initial={{ x: -40, opacity: 0, scale: 1.5 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
        >
          This text will only animate once.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          viewport={{ amount: 0.4 }} // range 0 - 1, can also use some, all
          className="box bg-blue-500"
          onViewportEnter={() => {
            console.log("entering viewport"); // starting counters
            // analytics
            // videos
            // loading expensive content
            // changing navigation state
            // triggering application state
          }}
          onViewportLeave={() => console.log("leaving viewport")}
        >
          Box 1
        </motion.div>
      </div>
    </>
  );
};

export default L25_WhileInView;
