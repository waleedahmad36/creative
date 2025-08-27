import React, { useEffect } from "react";
import "./Hero.css";
import Navbar from "./_components/Navbar";
import ScrollSlider from "./_components/ScrollSlider";
import HorizonatalScrollText from "./_components/HorizonatalScrollText";
import Projects from "./_components/Projects";
import CurvedTextScrollSlider from "./_components/CurvedTextScrollSlider";
import HoverRevealer from "./_components/HoverRevealer";
import SimpleText from "./_components/SimpleText";
import TextOpener from "./_components/TextOpener";
import CvFolder from "./_components/CvFolder";
import Footer from "./_components/Footer";

const Hero = () => {
  useEffect(() => {
    // Create a cursor element
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    const updateCursorPosition = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    // Listen for mousemove events
    window.addEventListener("mousemove", updateCursorPosition);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <div className="h-screen w-full bg-black text-white pt-10 relative">
      {/* Navbar */}
      <div className="relative z-50">
        <div className="sticky top-10"   style={{ zIndex: 9999 }}>
          <Navbar />
        </div>

        <div className="w-full max-w-6xl mx-auto px-8 md:px-2 h-[80vh] flex items-center justify-start ">
          <h1 className="text-5xl md:text-8xl font-semibold text-balance">
            Pushing the <br /> boundaries of <br />
            <span className="SoalR font-normal shadow-lg">
              web technologies.
            </span>
          </h1>
        </div>
      </div>

      <ScrollSlider />
      <HorizonatalScrollText />
      {/* <ScrollImageEffect/> */}
      <Projects />

      <div className="w-full h-[30vh]"></div>

      <CurvedTextScrollSlider />

      <HoverRevealer />
      <SimpleText />

      <TextOpener />

      <div className="w-full h-screen bg-black"></div>

      <CvFolder />
      <Footer />

    
      {/* Animated Image */}
      <img
        src="i1.png"
        className="absolute top-0 right-0 object-cover max-h-screen"
        id="hero-img"
        alt="Hero Background"
      />
    </div>
  );
};

export default Hero;
