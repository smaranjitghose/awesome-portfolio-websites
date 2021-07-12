import React, { useState, useEffect, useRef } from "react";
import { AnimateOnChange } from "react-animation";

import './textAnimation.scss'
// NOTE:
// Sometimes the text animation doesent load (some problem with the library i guess so reload the page)
const Textanimate = () => {
  const words = [
    "Designing",
    "UI/UX",
    "Cloud Computing",
    "Web Development",
    "Open Source",
    "Mentoring",
  ];

  const [current, setCurrent] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(0);
  const [currentTextStyle, setCurrentTextStyle] = useState({});
  const currentTextRef = useRef();
  const nextTextRef = useRef();

  const nextItem = (current) => {
    if (current === words.length - 1) {
      return 0;
    } else {
      return current + 1;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(nextItem(current));
      nextTextRef.current.innerText = words[nextItem(current)];      
      setCurrentWidth(nextTextRef.current.offsetWidth);
      setCurrentTextStyle({
        opacity: 0,
      });
      setTimeout(() => {
        setCurrentTextStyle({
          opacity: 1,
        });
      }, 500);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>      
      <h3>
        I'm into
        <AnimateOnChange className="foo" durationOut={500}>
          <div
            className="container"
            style={{ width: currentWidth ? currentWidth + "px" : "auto" }}
          >
            <div
              className="text-width-wrapper"
              style={currentTextStyle}
              ref={currentTextRef}
            >
              {words[current]}
            </div>
          </div>
        </AnimateOnChange>
      </h3>
      <h3 className="hidden-text" ref={nextTextRef} />
    </div>
  );
};

export default Textanimate;
