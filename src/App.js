import { useEffect, useRef, useState } from "react";
import Loader from "./components/Loader";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import gsap from "gsap";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

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

  return (
    <div className="h-full  ">
      <div className="absolute top-0 left-0 z-50 w-screen" ref={endRef}>
        <Loader setFinished={setFinished} />
      </div>
      <div className="flex gap-6 mb-12 z-20 relative">
        <NavLink to={"/projects"}>projects</NavLink>
        <NavLink to={"/contact"}>contacts</NavLink>
      </div>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
