import Header from "../components/Header";
import { motion } from "motion/react";

const L9 = () => {
  return (
    <>
      <Header text="Lesson 9: Viewport" />

      <div className="flex flex-col p-6 gap-6 mb-12 h-[4000px]">
        <div className="h-[1000px]"></div>

        <hr />
        <motion.div
          className="card"
          initial={{
            y: 40,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true, // only animate one time
            amount: 0.4, //  0.1 means when the element is 10% visible from top start animation
          }}
        >
          Card 1
        </motion.div>

        <motion.div
          className="card"
          initial={{
            x: -100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >
          Card 2
        </motion.div>

        <motion.div
          className="card"
          initial={{
            scale: 0.7,
            y: 40,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            y: 0,
            opacity: 1,
          }}
          viewport={{
            amount: 0.2,
          }}
        >
          Card 3
        </motion.div>
      </div>
    </>
  );
};

export default L9;
