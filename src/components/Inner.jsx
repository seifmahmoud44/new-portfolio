import { motion, AnimatePresence, cubicBezier } from "framer-motion";
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
  const location = useLocation();

  return (
    <div className="inner h-screen">
      {/* first transition */}
      {/* <motion.div
        initial={{ top: "100vh", opacity: 1 }}
        animate={{ top: "100vh", opacity: 1 }}
        exit={{
          top: "0",
          transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
        }}
        className=" slide "
      >
        <div className="h-full w-full flex justify-center items-center">
          {location.pathname.slice(1)}
        </div>
      </motion.div>
      <motion.div
        className="page h-full"
        initial={{ y: 0, scale: 1, opacity: 1 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{
          opacity: 0.5,
          y: -100,
          scale: 0.9,
          transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
        }}
      >
        <motion.div>{children}</motion.div>
      </motion.div> */}

      <motion.div className="colum-container flex  z-0">
        {[...Array(5)].map((_, i) => {
          return (
            <motion.div
              initial={{ top: 0 }}
              animate={{
                top: "100vh",

                transition: { duration: 0.5, delay: 0.05 * (5 - i) },
                transitionEnd: { height: 0, top: 0 },
              }}
              exit={{
                height: "100vh",
                transition: { duration: 0.5, delay: 0.05 * (5 - i) },
              }}
              key={i}
              className="wow w-full h-full bg-textDark relative"
            />
          );
        })}
      </motion.div>
      <motion.div>{children}</motion.div>
    </div>
  );
};

export default Inner;
