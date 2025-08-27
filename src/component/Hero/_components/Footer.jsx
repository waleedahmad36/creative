import React from "react";

const Footer = () => {
  return (
    <div
      className="
        w-full 
        flex 
        flex-col lg:flex-row  /* stack on small/md, row on lg */
        justify-between 
        items-center lg:items-start 
        max-w-6xl 
        mx-auto 
        pt-20 
        relative 
        gap-6 lg:gap-4 bg-[#000]
      "
      style={{ zIndex: 99999 }}
    >
      {/* Column 1 */}
      <div
        className="
          bg-[#15151D] 
          w-full lg:w-[25%] 
          h-auto lg:h-[60vh] 
          flex flex-col 
          justify-start 
          items-center 
          gap-6 lg:gap-10 
          rounded-lg 
          py-6 lg:pt-4 
          SoalR
        "
      >
        <p className="text-white text-2xl lg:text-3xl border-b-2 border-white pb-2">
          Home
        </p>
        <p className="text-white text-2xl lg:text-3xl">About</p>
        <p className="text-white text-2xl lg:text-3xl">Contact</p>
        <p className="text-white text-2xl lg:text-3xl">Projects</p>
      </div>

      {/* Column 2 */}
      <div
        className="
          w-full lg:w-[25%] 
          h-auto lg:h-[60vh] 
          flex flex-col 
          justify-start 
          items-center 
          gap-6 lg:gap-10 
          rounded-lg 
          SoalR
        "
      >
        <div className="w-full h-[10vh] rounded-lg bg-[#15151D] flex justify-center items-center">
          <p className="text-white text-base md:text-lg lg:text-xl">
            ideas@funkhaus.io
          </p>
        </div>

        <div className="w-full h-[10vh] rounded-lg bg-[#15151D] flex justify-center items-center">
          <p className="text-white text-base md:text-lg lg:text-xl">
            +92 3136392359
          </p>
        </div>

        <div className="bg-[#15151D] rounded-lg flex-1 w-full flex flex-col justify-center items-center gap-3 lg:gap-4 p-4">
          <h2 className="text-white text-lg md:text-xl">Careers</h2>
          <p className="text-white text-lg md:text-xl">Get updates</p>
        </div>
      </div>

      {/* Column 3 */}
      <div
        className="
          w-full lg:w-[25%] 
          h-auto lg:h-[60vh] 
          flex flex-col 
          justify-start 
          items-center 
          gap-6 lg:gap-10 
          rounded-lg 
          SoalR 
          bg-[#15151D] 
          py-6 lg:pt-5
        "
      >
        <h2 className="text-white text-2xl lg:text-3xl">Connect</h2>

        <div className="flex flex-col justify-center items-center gap-2 lg:gap-4 text-gray-400">
          <p className="text-white text-sm md:text-base">Client</p>
          <p className="text-white text-sm md:text-base">Partner</p>
          <p className="text-white text-sm md:text-base">Careers</p>
          <p className="text-white text-sm md:text-base">Press</p>
        </div>
      </div>

      {/* Column 4 */}
      <div
        className="
          flex-1 w-full 
          flex flex-col 
          justify-start 
          items-center 
          gap-2 lg:gap-4 
          my-6 lg:mt-0
        "
      >
        <h2 className="text-white text-2xl  lg:text-3xl">Immersive</h2>
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl">
          Experiences
        </h1>
        <p className="text-white text-xs md:text-sm">Local Time 3:09 PM</p>
      </div>
    </div>
  );
};

export default Footer;
