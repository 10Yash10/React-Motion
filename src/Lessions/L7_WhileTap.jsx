import Header from "../components/Header";
import { motion } from "motion/react";

// whileTap is like mouseDown on browser and tap on mobile

const L7 = () => {
  return (
    <>
      <Header text="Lesson 7: WhileTap" />

      <div className="flex flex-col p-6 mb-12 gap-6">
        <motion.button
          className="btn border-2 border-blue-500 rounded-lg text-blue-500"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
            boxShadow: "0px 10px 10px rgba(255, 255, 255, 0.25)",
          }}
        >
          Click Me
        </motion.button>

        <motion.button
          className="btn border-2 border-blue-500 rounded-lg text-blue-500"
          whileTap={{
            scale: 0.95,
            backgroundColor: "blue",
            borderColor: "transparent",
            color: "white",
          }}
        >
          Click Me
        </motion.button>

        <motion.div
          className="card"
          whileHover={{ y: -7 }}
          whileTap={{ scale: 0.98 }}
        >
          Card 1
        </motion.div>

        {/* <motion.div
          whileTap={{
            scale: 0.95,
            rotate: -5,
          }}
        >
          ❤️
        </motion.div> */}

        <motion.button
          className="btn border-2 border-blue-500 rounded-lg text-blue-500"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 15,
          }}
        >
          Get Started
        </motion.button>

        <motion.button
          className="btn border-2 border-white"
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          Download CV
        </motion.button>

        <motion.button
          className="btn border-2 border-white"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
            rotate: -2,
          }}
        >
          Click Me
        </motion.button>
      </div>
    </>
  );
};

export default L7;
