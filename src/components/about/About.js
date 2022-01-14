import { init } from "ityped";
import { useEffect, useRef } from "react";
import "./about.css";

function About() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1200,
      backSpeed: 70,
      strings: ["Developer", "SportsMan", "Designer", "Creator"],
    });
  }, []);
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="imageCont">
          <img src="assets/my_photo.png" alt="photoo" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, My Name Is</h2>
          <h1>Misho Ghibradze</h1>
          <h3>
            I am <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#works">
          <img src="assets/down-arrow.png" alt="arrow" />
        </a>
      </div>
    </div>
  );
}

export default About;
