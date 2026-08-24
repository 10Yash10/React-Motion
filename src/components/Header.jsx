import { motion } from "motion/react";
const Header = ({ text, sticky = false }) => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.7 }}
      className={`w-[80%] justify-self-center h-12 border-b-2 border-white/55 ${sticky ? "sticky top-0" : ""}`}
    >
      <h1 className="font-semibold text-4xl text-center">{text}</h1>
    </motion.div>
  );
};

export default Header;
