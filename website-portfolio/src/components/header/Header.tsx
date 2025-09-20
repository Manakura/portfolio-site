import React from "react";

const Header: React.FC = () => (
  <header className="w-full flex justify-between items-center px-6 py-4 bg-none">
    <span className="text-lg font-bold text-gray-800">Left Text</span>
    <span className="text-lg text-gray-600">Right Text</span>
  </header>
);

export default Header;
