import Header from "../components/Header";
import { motion } from "motion/react";

// variant propagation is when only main parent animation is run, and all the child animation runs after parent start

const L11 = () => {
  const parentVariant = {
    hidden: {},
    visible: {},
  };

  const childVariant = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        delay: 1,
        duration: 0.5,
      },
    },
  };

  // Card Grid

  const containerGrid = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        delay: 1.5,
        duration: 1,
      },

      viewport: {
        once: true,
      },
    },
  };

  const itemGrid = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,

      transition: {
        delay: 2,
        duration: 1,
      },
    },
  };

  //  hero section

  const heroMainContainer = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,

      transition: {
        delay: 0.7,
        duration: 1,
      },

      viewport: {
        amount: 0.5,
      },
    },
  };

  const heroItemContainer = {
    hidden: {
      opacity: 0,
      y: 40,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        delay: 1.5,
        duration: 1,
      },

      viewport: {
        once: true,
        amount: 0.3,
      },
    },
  };

  return (
    <>
      <Header text="Lesson 11: Parent Child" />

      <motion.section
        className="flex flex-col gap-6 p-6 mb-6"
        variants={parentVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="box bg-blue-500" variants={childVariant}>
          Box 1
        </motion.div>

        <motion.h1 variants={childVariant}>Welcome</motion.h1>

        <motion.p className="text-white" variants={childVariant}>
          paragraph
        </motion.p>

        <motion.button
          className="btn border-2 border-blue-500 text-blue-500"
          variants={childVariant}
        >
          Start
        </motion.button>
      </motion.section>

      <motion.section
        variants={containerGrid}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-6 p-6 mb-6 border-2 border-white rounded-xl m-3"
      >
        <motion.h1 className="text-center font-semibold text-2xl">
          Card Grid
        </motion.h1>

        <div className="flex flex-wrap gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <motion.div className="card" variants={itemGrid}>
              Card {index + 1}
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="flex flex-col gap-6 p-6 border-2 border-white rounded-xl m-3"
        variants={heroMainContainer}
        initial="hidden"
        whileInView="visible"
      >
        <motion.h1 variants={heroItemContainer}>Heading</motion.h1>
        <motion.h2 variants={heroItemContainer}>Sub title</motion.h2>
        <motion.p variants={heroItemContainer}>paragraph</motion.p>
        <motion.button
          variants={heroItemContainer}
          className="border-2 border-green-500 text-green-500"
        >
          button
        </motion.button>
        <motion.img variants={heroItemContainer} src="../assets/cartoon.png" />
      </motion.section>
    </>
  );
};

export default L11;
