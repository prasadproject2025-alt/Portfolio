import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Development Engineer",
          "Full Stack Developer (React / Flask / Java)",
          "AI / ML & Generative AI Engineer",
          "5x Patent Author (Indian Patent Office)",
          "IEEE Research Publication Author",
          "NxtWave CCBP 4.0 Software Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
