import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Loader = ({ setFinished }) => {
  gsap.registerPlugin(TextPlugin);
  const textWrapper = useRef(null);
  const text = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power3",
        stagger: 0.2,
        color: "white",
        fontWeight: "bold",
      },
    });
    tl.to(text.current, {
      y: 0,
      fontFamily: "media",
      delay: 1,
    });
    tl.to(text.current, {
      text: "Hola",
      y: 0,
      fontFamily: "media",
    });
    tl.to(text.current, { text: "Bonjour", fontFamily: "media" });
    tl.to(text.current, { text: "こんにちは", fontWeight: "bold" });
    tl.to(text.current, { text: "नमस्ते", fontFamily: "media" });
    tl.to(text.current, { text: "السلام عليكم", fontFamily: "kaman" });
    tl.to(text.current, {
      y: 50,
      fontFamily: "kaman",
      onComplete: () => {
        setFinished(true);
      },
    });
  }, [setFinished]);

  return (
    <div className="flex justify-center items-center h-screen bg-textDark">
      <div className="h-11 flex-col flex justify-center items-center overflow-hidden w-fit text-center ">
        <div className=" " ref={textWrapper}>
          <h1
            className="  p-2 text-4xl -translate-y-12 text-textColor"
            ref={text}
          >
            Hello
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Loader;
