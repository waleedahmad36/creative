import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollImageEffect = ({ imgSrc }) => {
  const imageRef = useRef(null); // Create a reference for the image
  const containerRef = useRef(null); // Create a reference for the container
  const circleRef = useRef(null); // Reference for the circle
  const [hover, setHover] = useState(false); // State to track hover

  useEffect(() => {
    // Set up the GSAP animations with unique refs
    gsap.to(imageRef.current, {
      scaleY: 1, // Unfold the image vertically
      rotationX: 0, // Remove any rotation, making the image face directly
      transformOrigin: "top", // Start unfolding from the top
      scrollTrigger: {
        trigger: containerRef.current, // Use the container ref as the trigger
        start: "top bottom", // Start when the image enters the viewport
        end: "bottom top", // End when the image leaves the viewport
        scrub: true, // Sync animation with scroll
        markers: false, // Optional: Uncomment for debug markers
      },
    });

    // Optional: Animate the 3D perspective for an even smoother effect
    gsap.to(containerRef.current, {
      transformStyle: "preserve-3d", // Keep 3D transformations
      perspective: 2500, // Add perspective depth
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        duration: 3,
        markers: false,
      },
    });

    // Handle mouse movement for the circle's position using GSAP for smoothness
    const handleMouseMove = (e) => {
      if (hover) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // GSAP animation to smoothly move the circle with the cursor
        gsap.to(circleRef.current, {
          x: mouseX - 25, // Offset by half the circle width (50px)
          y: mouseY - 25, // Offset by half the circle height (50px)
          duration: 0.2, // Smooth transition for circle movement
          ease: "power1.out", // Smooth easing function
        });
      }
    };

    // Add event listener for mousemove
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hover]);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black relative">
      <div
        ref={containerRef} // Attach the container ref here
        className="w-full h-screen overflow-hidden"
        style={{
          transformStyle: 'preserve-3d', // Maintain 3D transformations
          perspective: '2500px', // Set perspective for 3D depth
        }}
        onMouseEnter={() => setHover(true)} // Show the circle on hover
        onMouseLeave={() => setHover(false)} // Hide the circle on mouse leave
      >
        <img
          ref={imageRef} // Attach the image ref here
          src={imgSrc}
          alt="Scroll effect"
          className="object-cover w-full h-full rounded-xl"
          style={{
            transform: "scaleY(0.5) rotateX(30deg)", // Initial folded state with slight rotation
            transition: "transform 0.3s ease-out", // Smooth transition for rotation and unfolding
          }}
        />
        
        {/* Circle to follow the cursor */}
        {hover && (
          <div
            ref={circleRef} // Reference for the circle
            className="absolute flex justify-center items-center text-sm text-white font-semibold rounded-full bg-black w-24 h-24"
            style={{
              position: "absolute",
              pointerEvents: "none",
              zIndex: 1000,
              left: `0px`, // Initial left position (override with JS)
              top: `0px`, // Initial top position (override with JS)
              transition: 'none', // Disable the default CSS transition
            }}
          >
            <p className="text-center">Show More</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrollImageEffect;
