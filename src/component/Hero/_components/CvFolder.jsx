import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./styles/CvFolder.css";

const Showcase = () => {
  const componentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set("#mockupTwo, #mockupThree", { 
        rotateX: -90,
        transformOrigin: "top center"
      });
      gsap.set(".showcase-text", { y: 100, opacity: 0 });
      gsap.set(".showcase-overlay", { opacity: 0 });

      // Create the animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top 30%",
          end: "bottom 70%",
          scrub: 1.5,
          markers: false, // Set to true for debugging if needed
        },
      });

      tl.to("#mockupTwo", { rotateX: 0, duration: 0.8 })
        .to("#mockupThree", { rotateX: 0, duration: 0.8 }, "-=0.4")
        .to(".showcase-stack", { y: "10vh", scale: 0.9, duration: 1 }, "-=0.6")
        .to(".mockup", { filter: "grayscale(0.7)", duration: 0.8 }, "-=0.8")
        .to(".showcase-text", { y: 0, opacity: 1, duration: 1 }, "-=0.6")
        .to(".showcase-overlay", { opacity: 0.9, duration: 1 }, "-=0.6");
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={componentRef} className="showcase-container">
      <p className="showcase-paragraph">
        We don't just build websites — we craft <b>digital experiences</b> that
        define brands, engage audiences, and drive results.
      </p>

      <div className="showcase-stack">
        <div className="mockup" id="mockupOne">
          <h2>01. Strategy</h2>
          <p>Understanding your brand and goals to create a digital roadmap.</p>
        </div>
        <div className="mockup" id="mockupTwo">
          <h2>02. Design</h2>
          <p>Crafting interfaces and visuals that truly represent your identity.</p>
        </div>
        <div className="mockup" id="mockupThree">
          <h2>03. Development</h2>
          <p>Building high-performance, scalable websites & apps with the latest tech.</p>
        </div>
      </div>

      <div className="showcase-text z-0">
        <h1>Let's Build Your Brand Together</h1>
        <button className="showcase-button">Start a Project</button>
      </div>

      <div className="showcase-overlay"></div>
    </div>
  );
};

export default Showcase;