import React from "react";
import "./hero.css";

const Hero: React.FC = () => (
  <div className="flex justify-center flex-col m-auto pt-20 pb-20">
    <code className="text-white pb-5">
      {"Hello World, My Name is"} <span className="text-gray-500">{"==>"}</span>
    </code>
    <h1 className="text-5xl sm:text-8xl antialiased text-emerald-300 pb-5 font-rubik-400">
      {"{Oliver Riley.}"} <span className="blinking"> | </span>
    </h1>{" "}
    <h1 className="text-3xl sm:text-5xl antialiased text-emerald-300 opacity-25 font-rubik-100">
      // I'm your full-stack web developer.
    </h1>
    <h2 className="text-gray-400 pt-5 w-100 md:w-3/4 lg:w-2/3">
      I'm a UK-born Japan-based full-stack web developer with a passion for
      creating beautiful, functional, and user-friendly websites & applications.
      Currently I'm working with the following technologies & tools:
    </h2>
    <div>
      <ul className="list-disc list-inside text-gray-300 pt-5">
        <img
          src="../html-svg.svg"
          alt="HTML Logo"
          className="w-10 h-10 inline-block mr-5"
        />
        <img
          src="../css-3-svg.svg"
          alt="CSS Logo"
          className="w-10 h-10 inline-block mr-5"
        />
        <img
          src="../js-svg.svg"
          alt="JavaScript Logo"
          className="w-10 h-10 inline-block mr-5"
        />
        <img
          src="../WP-svg.svg"
          alt="WordPress Logo"
          className="w-10 h-10 inline-block mr-5"
        />
        <img
          src="../Shopify.svg"
          alt="Shopify Logo"
          className="w-10 h-10 inline-block mr-5"
        />
        <img
          src="../Typescript_logo_2020.svg"
          alt="TypeScript Logo"
          className="w-10 h-10 inline-block mr-5"
        />
        <img
          src="../git-svg.svg"
          alt="Git Logo"
          className="w-10 h-10 inline-block mr-5"
        />
        <img
          src="../react-svg.svg"
          alt="React Logo"
          className="w-10 h-10 inline-block mr-5"
        />
        <img
          src="../tailwind-svg.svg"
          alt="Tailwind CSS Logo"
          className="w-10 h-10 inline-block mr-5"
        />
      </ul>
    </div>
    <div className="flex justify-center lg:justify-start pt-5">
      <a
        href="#contact"
        className="text-emerald-300 border-2 border-emerald-300 px-4 py-2 rounded inline-block mr-5 w-100 text-center hover:bg-emerald-300 hover:text-black transition duration-300"
      >
        Get in Touch
      </a>
    </div>
  </div>
);

export default Hero;
