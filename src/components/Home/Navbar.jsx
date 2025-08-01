import React from "react";

const scrollToSection = (e, id) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Navbar = () => {
  return (
    <nav className="w-full px-6 md:px-16 py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          Bi<span className="text-blue-600">no</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a
            href="#features"
            onClick={(e) => scrollToSection(e, "features")}
            className="hover:text-black"
          >
            Features
          </a>
          <a
            href="#enterprise"
            onClick={(e) => scrollToSection(e, "enterprise")}
            className="hover:text-black"
          >
            Enterprise
          </a>
          <a
            href="#resources"
            onClick={(e) => scrollToSection(e, "resources")}
            className="hover:text-black"
          >
            Resources
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 font-medium hover:text-black">
            Log in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
