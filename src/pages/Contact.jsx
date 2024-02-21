import React, { useEffect, useRef } from "react";
import Inner from "../components/Inner";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Inner>
      {/* <div className="flex gap-6 mb-12">
        <NavLink to={"/projects"}>projects</NavLink>
        <NavLink to={"/contact"}>contacts</NavLink>
      </div> */}
      <div className="overflow-hidden">
        <motion.p
          initial={{ y: -100 }}
          animate={{ y: 0, transition: { duration: 1, ease: "easeInOut" } }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          asperiores odit ducimus doloremque, accusamus quibusdam explicabo eius
          reiciendis officia dicta quam blanditiis facere unde culpa. Magni
          perspiciatis sunt voluptas perferendis?
        </motion.p>
      </div>
    </Inner>
  );
};

export default Contact;
