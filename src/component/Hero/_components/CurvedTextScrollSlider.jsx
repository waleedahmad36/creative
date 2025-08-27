import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CurvedTextScrollSlider = () => {
  useEffect(() => {
    const screenWidth = window.innerWidth;

    // Adjust X movement dynamically based on screen size
    let xOffset1 = screenWidth < 640 ? -200 : screenWidth < 1024 ? -400 : -500;
    let xOffset2 = screenWidth < 640 ? -400 : screenWidth < 1024 ? -700 : -900;
    let xOffset3 = screenWidth < 640 ? -550 : screenWidth < 1024 ? -900 : -1100;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#curved-text-container",
        start: "top 10%",
        end: "bottom top",
        pin: true,
        scrub: true,
      },
    });

    tl.to("#text-1", { opacity: 1, rotate: 0, duration: 0.3 })
      .to("#text-2", { opacity: 1, rotate: 0, duration: 0.3 })
      .to("#text-3", { opacity: 1, rotate: 0, duration: 0.3 })
      .to("#curved-text", {
        x: xOffset1,
        ease: "power1.inOut",
        duration: 1,
      })
      .to("#text-4", { opacity: 1, rotate: 0, duration: 0.3 })
      .to(
        "#text-5",
        { opacity: 1, rotate: 0, duration: 0.3 },
        "same-curved-text"
      )
      .to(
        "#text-6",
        { opacity: 1, rotate: 0, duration: 0.3 },
        "same-curved-text"
      )
      .to(
        "#curved-text",
        {
          x: xOffset2,
          ease: "power1.inOut",
        },
        "same-curved-text"
      )
      .to(
        "#text-7",
        { opacity: 1, rotate: 0, duration: 0.3 },
        "same-curved-text"
      )
      .to("#curved-text", {
        x: xOffset3,
        ease: "power1.inOut",
        duration: 1,
      });
  }, []);

  return (
    <div
      className="overflow-hidden relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center"  
      id="curved-text-container"
    >
      <h1
        className="text-5xl sm:text-6xl  md:text-9xl font-semibold text-white whitespace-nowrap translate-x-[10%]"
        id="curved-text"
      >
        <span className="opacity-1 rotate-180" id="text-1">
          And{" "}
        </span>
        <span className="opacity-0 rotate-180" id="text-2">
          Here's{" "}
        </span>
        <span className="opacity-0 rotate-180" id="text-3">
          what{" "}
        </span>
        <span className="opacity-0 rotate-180" id="text-4">
          we've{" "}
        </span>
        <span className="opacity-0 rotate-180" id="text-5">
          been{" "}
        </span>
        <span className="opacity-0 rotate-180" id="text-6">
          up{" "}
        </span>
        <span className="opacity-0 rotate-180" id="text-7">
          to.
        </span>
      </h1>
    </div>
  );
};

export default CurvedTextScrollSlider;
