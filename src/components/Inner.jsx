import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
const Inner = ({ children }) => {
  // const anim = (variante) => {
  //   return {
  //     initial: "initial",
  //     animate: "animate",
  //     exit: "exit",
  //     variante,
  //   };
  // };

  // const opacity = {
  //   initial: {
  //     opacity: 0,
  //   },
  //   animate: {
  //     opacity: 1,
  //     transition: {
  //       duration: 5,
  //     },
  //   },
  //   exit: {
  //     opacity: 1,
  //   },
  // };

  return (
    <div>
      <motion.div
        initial={{ top: "100vh", opacity: 1 }}
        animate={{ top: "100vh", opacity: 1 }}
        exit={{ top: "0", transition: { duration: 5 } }}
        className=" slide "
      ></motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        exit={{ opacity: 0, duration: 8 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Inner;
