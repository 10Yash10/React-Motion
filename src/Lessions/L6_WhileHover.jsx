import Header from "../components/Header";
import { motion, spring } from "motion/react";
import Cartoon from "../assets/cartoon.png";

// till now animation were starting as soon as the screen is mounted
// until user interacts, animation won't happen

const L6 = () => {
  return (
    <>
      <Header text="Lesson 6: While Hover" />
      <div className="flex flex-col gap-6 p-6 mb-12">
        <motion.div
          className="box bg-green-500"
          whileHover={{
            // mouse enters, scale up => mouse leave => scale down
            scale: 1.1,
          }}
          transition={{
            duration: 0.15,
          }}
        >
          Box 1
        </motion.div>

        <motion.button
          className="text-blue-500 border-2 border-blue-500 rounded-md w-32 py-3"
          whileHover={{
            scale: 1.05,
          }}
          tansition={{
            duration: 0.15,
          }}
        >
          Hover Me
        </motion.button>

        <motion.div
          className="card"
          whileHover={{
            y: -10,
            scale: 1.07,
          }}
        >
          Card 1
        </motion.div>

        <motion.div
          className="box bg-pink-500"
          whileHover={{
            rotate: 45,
          }}
        >
          Box 1
        </motion.div>

        <div className="card overflow-hidden">
          <motion.img
            src={Cartoon}
            alt="cartoon img"
            className="w-50"
            whileHover={{
              scale: 2,
              opacity: 0.7,
            }}
          />
        </div>

        <motion.div
          className="box bg-green-500"
          whileHover={{
            backgroundColor: "red",
            borderRadius: "50%",
          }}
        >
          Box 3
        </motion.div>

        <motion.div
          className="card"
          whileHover={{
            y: -10,
            scale: 1.02,
            boxShadow: "0px 20px 40px rgba(255, 255, 255, 0.25)",
          }}
          tansition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          Card 2
        </motion.div>

        <motion.button
          className="btn border-2 border-red-500 text-red-500 rounded-lg"
          whileHover={{
            y: -2,
            scale: 1.05,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 15,
          }}
        >
          Hover Me
        </motion.button>
      </div>
    </>
  );
};

export default L6;
