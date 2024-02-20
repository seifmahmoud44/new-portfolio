import { useEffect, useRef, useState } from "react";
import Loader from "./components/Loader";
import { NavLink, useLocation } from "react-router-dom";
import gsap from "gsap";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

function App() {
  const [finished, setFinished] = useState(false);
  const endRef = useRef(null);
  useEffect(() => {
    if (finished) {
      gsap.to(endRef.current, {
        transformOrigin: "top",
        scaleY: 0,
        duration: 1.5,
        ease: "expo.in",
      });
    }
  }, [finished]);
  const location = useLocation();
  const [show, setShow] = useState(true);
  return (
    <div className="h-full  ">
      {/* <div className="absolute top-0 left-0 z-50 w-screen" ref={endRef}>
        <Loader setFinished={setFinished} />
      </div> */}
      <AnimatePresence mode="wait">
        <motion.div>
          {show && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 5 } }}
              onClick={() => setShow(!show)}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              animi assumenda at, libero sed expedita fuga voluptatem molestias
              maxime mollitia quis? Perspiciatis, repellendus voluptas tenetur
              cumque amet quasi delectus assumenda.
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-6 mb-12">
        <NavLink to={"/projects"}>projects</NavLink>
        <NavLink to={"/contact"}>contacts</NavLink>
      </div>
      <AnimatePresence key={location.pathname}>
        <Outlet />
      </AnimatePresence>
    </div>
  );
}

export default App;
