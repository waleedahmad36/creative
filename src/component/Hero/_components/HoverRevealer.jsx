import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import "./styles/hoverReveal.css";

const HoverRevealer = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const handleMouseEnter = (index) => setHoveredSection(index);
  const handleMouseLeave = () => setHoveredSection(null);

  // Meaningful sections with real content
  const sectionDetails = [
    {
      bgColor: "bg-indigo-600",
      title: "Web Development",
      scrollText: "Custom Websites • MERN Stack • Next.js • Scalable Apps",
    },
    {
      bgColor: "bg-emerald-600",
      title: "UI/UX Design",
      scrollText: "Tailwind CSS • Chakra UI • ShadCN • Framer Motion",
    },
    {
      bgColor: "bg-cyan-600",
      title: "Performance & SEO",
      scrollText: "Optimized Code • Fast Load • SEO Friendly • Secure",
    },
    {
      bgColor: "bg-rose-600",
      title: "Freelance Projects",
      scrollText: "Client Work • Portfolio Sites • Dashboards • APIs",
    },
  ];

  return (
    <div>
      {sectionDetails.map((section, index) => (
        <div
          key={section.title}
          className="hover-revealer-container w-full h-[18vh] sm:h-[20vh] md:h-[25vh] relative overflow-visible"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Title text visible by default */}
          <p className="hover-revealer-title text-2xl sm:text-3xl md:text-5xl font-semibold SoalR ml-4 sm:ml-8 md:ml-12">
            {section.title}
          </p>

          {/* Hover Reveal */}
          <div
            className={`hover-revealer-bg ${
              hoveredSection === index ? "active" : ""
            } ${section.bgColor} w-full h-full absolute top-0 left-0 flex items-center justify-center`}
          >
            <div className="flex items-center gap-2">
              <BsArrowRight className="text-xl sm:text-2xl md:text-4xl" />
              <div className="hover-revealer-scroll-container">
                <div className="hover-revealer-scroll-content">
                  {/* Multiple loops for infinite scroll effect */}
                  {[...Array(3)].map((_, i) => (
                    <h3
                      key={i}
                      className="hover-revealer-scroll-text text-sm sm:text-base md:text-xl"
                    >
                      {section.scrollText}{" "}
                      <BsArrowRight className="inline text-lg sm:text-xl md:text-2xl ml-2" />
                    </h3>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverRevealer;
