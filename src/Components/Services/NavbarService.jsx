import React from "react";
import { Link } from "react-router-dom";

export default function NavbarService() {
  return (
    <nav className="fixed top-4 left-4 z-50">
  <Link to="/">
      <button
        className="backdrop-blur-md bg-white/30 border cursor-pointer border-white/60 text-blue-600 px-4 py-2 rounded-md font-semibold shadow-md hover:bg-white/50 hover:border-white transition duration-300"
        >
        ← Back
      </button>
 </Link>
 
    </nav>
  );
}
