import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/TextOpener.css";

gsap.registerPlugin(ScrollTrigger);

const TextOpener = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main",
        start: "top top",
        end: "+=200%", // space for open + close
        scrub: 1,
        pin: true,
      },
    });

    // OPEN
    tl.to("#top", { yPercent: -100, duration: 1 }, "start")
      .to("#bottom", { yPercent: 100, duration: 1 }, "start")
      .to(".content", { marginTop: "0%", opacity: 1, duration: 0.8 }, "start+=0.3")

      // EXIT
      .to(".content", { opacity: 0, y: -50, duration: 0.6 }, "exit")
      .to("#top", { yPercent: 0, duration: 1 }, "exit")
      .to("#bottom", { yPercent: 0, duration: 1 }, "exit");
  }, []);

  return (
    <div id="main-p">
      <div id="main">
        <div id="top">
          <h1 id="top-h">Fankaus</h1>
        </div>

        <div id="center">
          <div className="content">
            <h4>Fankaus</h4>
            <h3>
              <i>Browse</i> the work that define a <i>movement</i> and created a craft.
            </h3>
            <div className="btn">
              <h5>ENTER GALLERY</h5>
            </div>
            <h2>(17)</h2>
          </div>
        </div>

        <div id="bottom">
          <h1 id="bottom-h">✌</h1>
        </div>
      </div>
    </div>
  );
};

export default TextOpener;
