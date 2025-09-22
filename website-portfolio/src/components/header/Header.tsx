import React from "react";

const Header: React.FC = () => (
  <header className="w-full flex justify-between items-center px-6 py-4 static bg-opacity-0">
    <a href="#">
      <span className="text-lg font-thin text-white">Oliver's Portfolio</span>
    </a>
    <ul className="hidden flex space-x-4 md:flex">
      <li>
        <a href="#projects" className="text-sm font-thin text-white">
          Projects
        </a>
      </li>
      <li>
        <a href="#about" className="text-sm font-thin text-white">
          About
        </a>
      </li>
      <li>
        <a href="#about" className="text-sm font-thin text-white">
          Experience
        </a>
      </li>
      <li>
        <a href="#resume" className="text-sm font-thin text-white">
          Resume
        </a>
      </li>
    </ul>
    <div className="flex justify-center items-center border-solid border-emerald-300 border-1 rounded px-2 py-2 shadow-sm">
      <a href="#contact" className="font-thick text-emerald-300">
        Contact
      </a>
    </div>
  </header>
);

export default Header;
