import gsap from "gsap";
import  { useEffect, useRef, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navMenuRef = useRef(null);
  const navItemsRef = useRef(null);
  const expandingDivRef = useRef(null);
  const isInitialRender = useRef(true);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;

      gsap.set(navMenuRef.current, {
        height: "5vh",
      });

      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

    tl.to(navMenuRef.current, {
      height: isOpen ? "45vh" : "5vh",
      duration: 0.6,
    }).to(
      navItemsRef.current,
      {
        autoAlpha: isOpen ? 1 : 0,
        duration: 0.4,
        stagger: 0.1,
      },
      "-=0.4"
    );

    gsap.to("#toggle-icon", {
      rotate: isOpen ? "45deg" : 0,
      duration: 0.3,
    });
  }, [isOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const tl = gsap.timeline();

      // Set initial state of the expanding div
      gsap.set(expandingDivRef.current, {
        transformOrigin: "right center", // Make expansion happen from the right
        width: "0", // Start with 0 width
        display: "block", // Make sure the div is displayed
      });

      // Expand the div from the right side to full width (320px or as per your preference)
      tl.to(expandingDivRef.current, {
        width: "320px", // Full width after expansion
        duration: 1.5,
        ease: "power2.out",
      })
        .to(expandingDivRef.current, { delay: 5 }, "<") // Pause for 5 seconds before collapsing
        .to(expandingDivRef.current, {
          width: "0px", // Collapse to 0 width
          opacity: 0,
          duration: 1.5,
          ease: "power2.in",
          display: "none", // Hide after collapsing
        });
    }, 3000);

    return () => clearTimeout(timer); // Clear timeout on unmount
  }, []);

  return (
    <div className="flex items-center justify-between h-[10vh] w-full max-w-6xl mx-auto rounded-lg px-2">
      <div className="flex items-center gap-4">
        <div className="flex items-center px-4 py-2 rounded-lg bg-[#15151D]">
          <h1 className="text-xl font-semibold SoalR tracking-wider">fankus</h1>
        </div>

        <div className="text-sm font-medium min-w-[270px] text-white/60 relative rounded-xl bg-[#15151D]">
          <div className="flex items-center justify-between px-4 py-2 relative z-50">
            <p>Home</p>
            <BiPlus
              className="text-3xl cursor-pointer"
              onClick={toggleMenu}
              id="toggle-icon"
            />
          </div>

          <div
            className="absolute top-0 left-0 w-full rounded-lg bg-[#15151D] overflow-hidden pt-[6vh]"
            ref={navMenuRef}
          >
            <div
              className="flex flex-col justify-center items-start gap-4 w-full text-xl py-4 px-4 font-medium text-gray-200 opacity-0"
              ref={navItemsRef}
            >
              {["Home", "About", "Services", "Contact", "Blog"].map(
                (item, index) => {
                  const isActive = item === "Home"; 
                  return (
                    <p
                      key={index}
                      className={`tracking-widest cursor-pointer border-b transition-all duration-300 hover:text-white 
          ${
            isActive
              ? "text-white border-b-4 border-gradient"
              : "border-white/10"
          }
        `}
                      style={{
                        borderImageSource: isActive
                          ? "linear-gradient(to right, #6EE7B7, #3B82F6, #A855F7)"
                          : "none",
                        borderImageSlice: isActive ? 1 : undefined,
                        borderBottomWidth: "1px",
                      }}
                    >
                      {item}
                    </p>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>

      {/* The expanding div */}
      <div
        ref={expandingDivRef}
        className="bg-[#15151D]/90 px-4 py-3 rounded-lg text-sm font-medium text-gray-400 overflow-hidden whitespace-nowrap relative left-[120px]"
        style={{
          width: "0", // Start with 0 width
          display: "none", // Initially hidden
        }}
        id="expanding-div"
      >
        <p>A wonderful good morning from the studio.</p>
      </div>

      <div className="hidden md:flex items-center justify-between gap-2 bg-[#15151D]/90 px-4 py-3 rounded-lg text-sm font-medium text-gray-400 min-w-[200px]    ">
        <p>Get in touch</p>
        <div className="flex flex-col justify-center items-center">
          <HiMiniArrowsRightLeft className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
