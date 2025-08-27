import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ScrollImageEffect from "./ScrollImageEffect";

const Projects = () => {
  return (
    <div className="projects-container max-w-6xl mx-auto flex flex-col md:flex-row gap-8 pt-20 px-4 md:px-0">
      {/* Left Section */}
      <div className="left-section w-full md:w-1/3">
        <div className="sticky top-24 flex flex-col gap-8 max-w-sm">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="text-gray-500 text-lg">
            With every project we aim high. Pushing the boundaries of design
            and technology, we create unique and innovative solutions that cut
            through the noise. Here are some of our latest projects.
          </p>
          <button className="flex items-center gap-2 border-2 border-blue-500 px-4 py-2 rounded-full max-w-fit hover:bg-blue-500 hover:text-white transition-all duration-300">
            Discover More <FaArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section flex-1">
        {[
          {
            imgSrc:
              "https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400",
            text: "Revolutionary Mining App",
            description:
              "Unlock the power of the blockchain with this app designed to mine Bitcoin effortlessly and securely.",
          },
          {
            imgSrc:
              "https://directus.funkhaus.io/assets/b24e9544-c01f-45c4-8c96-9e5937365d20?withoutEnlargement=true&fit=outside&width=1400&height=1400",
            text: "Smart Investment Tracker",
            description:
              "Track and analyze your investments with real-time data, ensuring you make informed financial decisions.",
          },
          {
            imgSrc:
              "https://directus.funkhaus.io/assets/9c5b3778-a44c-4427-9edf-a4ad96da17f3?withoutEnlargement=true&fit=outside&width=1400&height=1400",
            text: "AI-Powered Health Assistant",
            description:
              "Personalized health recommendations powered by artificial intelligence to help you live a healthier life.",
          },
          {
            imgSrc:
              "https://directus.funkhaus.io/assets/de55f619-0cf8-4f4f-8644-8e243141e5f8?withoutEnlargement=true&fit=outside&width=1400&height=1400",
            text: "Next-Gen Financial Platform",
            description:
              "A complete solution for managing your finances, from budgeting to investing, all in one seamless app.",
          },
          {
            imgSrc:
              "https://directus.funkhaus.io/assets/f7d24b94-84c2-40df-8106-c181aef5ed97?withoutEnlargement=true&fit=outside&width=1400&height=1400",
            text: "Smart Home Control Center",
            description:
              "Take control of your home’s IoT devices with one app, making your home smarter and more efficient.",
          },
          {
            imgSrc:
              "https://directus.funkhaus.io/assets/2c5a3465-bdd2-4856-9768-750275d4b7f2?withoutEnlargement=true&fit=outside&width=1400&height=1400",
            text: "Advanced Project Management",
            description:
              "Streamline your workflow with an intuitive project management tool designed for collaborative teams.",
          },
        ].map((data, index) => (
          <div className="project-card flex flex-col gap-4 mb-16" key={index}>
            <ScrollImageEffect imgSrc={data.imgSrc} />
            <h1 className="text-2xl font-bold">{data.text}</h1>
            <p className="text-gray-500">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
