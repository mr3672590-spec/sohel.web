import { useState } from "react";
import { Link } from "react-router-dom";
import lg from "../assets/lg.jpg";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 dark:bg-gray-800 text-white p-4 transition-all duration-300">

      <div className="max-w-7xl mx-auto flex justify-between items-center">
       <Link to="/" className="relative group cursor-pointer">
        {/* 🔥 LOGO (UPGRADED) */}
        <div className="relative group">

          {/* glow background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
          rounded-full blur-md opacity-60 group-hover:opacity-100 transition-all duration-300"></div>

          {/* logo image */}
          <img
            src={lg}
            alt="SR Logo"
            className="relative w-[55px] h-[55px] object-cover rounded-full 
            border-2 border-white shadow-lg 
            group-hover:scale-110 group-hover:rotate-6 
            transition-all duration-300"
          />

        </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-3 mt-3 px-4">

          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about">About</Link>
          <Link onClick={() => setOpen(false)} to="/services">Services</Link>
          <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>

        </div>
      )}

    </nav>
  );
}

export default Navbar;