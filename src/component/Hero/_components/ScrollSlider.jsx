import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollSlider = () => {
  useEffect(() => {
    // Only run the animation on large screens
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    
    if (mediaQuery.matches) {
      // Create the animation timeline
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#scroll-circle",
          start: "top 98%",
          end: "bottom 80%",
          scrub: true,
        },
      });

      tl.to("#scroll-circle", {
        width: "1100px",
        height: '500px',
        marginTop: '250px',
        duration: 1,
        ease: 'linear'
      }, 'circle-move');

      // Cleanup function to kill ScrollTrigger instances
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  return (
    <>
      <div className="max-w-[1100px] mx-auto px-2 flex flex-col lg:flex-row relative" id='scroll-container'>
        {/* Left side */}
        <div className="max-w-md mb-10 lg:mb-20 lg:absolute top-10 left-0 px-8 lg:px-0" id='scroll-text'>
          <p className="text-xl font-medium shadow-lg text-balance">
            We are a branding & digital studio based in Germany – tackling complex visual and technological challenges for bold brands.
          </p>
        </div>

        {/* Right side */}
        <div className="flex-1 flex justify-center lg:justify-end items-center mt-10 lg:mt-0">
          <div
            className="w-[300px] h-[200px] lg:w-[600px] lg:h-[600px] rounded-xl lg:rounded-full overflow-hidden relative bg-[#15151D]"
            id="scroll-circle"
          >
            <video src="/videos/scrollvideo.mp4" autoPlay muted loop className="w-full   lg:h-full object-cover"></video>
          </div>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 flex mt-20">
        <div className="max-w-md py-10 lg:py-20">
          <h3 className="text-xl font-medium shadow-lg text-balance">
            We help brands with a vision communicate better by leveraging strategy, design and technology.
          </h3>
        </div>
      </div>
    </>
  );
};

export default ScrollSlider;