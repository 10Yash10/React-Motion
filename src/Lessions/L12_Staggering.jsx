import React from "react";
import Header from "../components/Header";
import { motion } from "motion/react";

const L12 = () => {
  const mainContainer = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        when: "beforeChildren",
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const itemContainer = {
    hidden: {
      opacity: 0,
      y: 40,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        // delay: 1.5,  // adding this will break the staggering effect
        duration: 1,
      },
    },
  };

  const links = [
    {
      name: "Home",
      icon: "",
      route: "/",
    },
    {
      name: "About",
      icon: "",
      route: "/about",
    },
    {
      name: "Contact",
      icon: "",
      route: "/contact-us",
    },
    {
      name: "Service",
      icon: "",
      route: "/services",
    },
  ];

  const navContainerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        when: "beforeChildren",
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const navItemVariant = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
    },

    transition: {
      duration: 0.6,
    },
  };

  return (
    <>
      <Header text="Lesson 12: Stagger in Variant Propogation" />

      <motion.nav
        variants={navContainerVariant}
        initial="hidden"
        animate="visible"
        className="flex items-center justify-center gap-6 p-6 m-2 mt-12 border-2 border-white rounded-xl"
      >
        {links.map((item) => (
          <motion.ul variants={navItemVariant}>
            <li className="cursor-pointer hover:text-blue-500 duration-300">
              <a href={item.route}>{item.name}</a>
            </li>
          </motion.ul>
        ))}
      </motion.nav>

      <motion.section
        className="flex flex-col gap-6 p-6 border-2 border-white m-3 rounded-xl"
        variants={mainContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemContainer}>Heading</motion.h1>
        <motion.h2 variants={itemContainer}>Sub Heading</motion.h2>
        <motion.p variants={itemContainer}>paragraph</motion.p>
        <motion.button variants={itemContainer}>button</motion.button>
      </motion.section>

      <motion.section
        variants={mainContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-6 p-6 m-3 rounded-xl border-2 border-white"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.div className="card " variants={itemContainer}>
            Card {index + 1}
          </motion.div>
        ))}
      </motion.section>
    </>
  );
};

export default L12;
