import React, { useState, useEffect } from "react";
import mainlogo from "../../assets/image/navlogo.png"
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  // Handle scroll effect for navbar background and shadow
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle login state from URL params on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("signup") === "success" || params.get("loginstatus") === "loginsuccess") {
      setLoggedIn(true);
    }
  }, []);

  return (
    <header
      id="headerload"
      className={`fixed top-0 w-full z-50 transition duration-300 ease-in-out shadow-md backdrop-blur-md flex items-center h-16 ${
        scrolled ? "bg-white shadow-lg text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
        {/* Logo */}
        <a href="index.html" className="flex-shrink-0 flex items-center">
          <img src={mainlogo} alt="Logo" className="h-12 w-20" />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-semibold">
          <Link to="/" className="hover:text-yellow-600">
            Home
          </Link>
          <a href="#aboutus" className="hover:text-yellow-600">
            About
          </a>
          <Link to="/Service" className="hover:text-yellow-600">
            Services
          </Link>
          
          <a href="#contact" className="hover:text-yellow-600">
            Contact
          </a>
        </nav>

        {/* Icons & Login Button */}
        <div className="hidden md:flex items-center space-x-4 h-full">
          {!loggedIn && (
            <Link to="/LoginSignup" >

              <button className="flex items-center cursor-pointer gap-2 px-2 py-1.5 border border-gray-400 rounded hover:text-green-500 hover:border-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 17.804A9.964 9.964 0 0112 15c2.21 0 4.244.716 5.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
              </button>
     </Link>
            
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            id="menu-btn"
            className="text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <img src="hamburger.png" alt="Menu" className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden px-4 py-2 space-y-2 bg-white shadow-md absolute w-full left-0 top-16"
        >
          <a href="index.html" className="block text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="#aboutpage" className="block text-gray-700 hover:text-blue-600">
            About
          </a>
          <a href="homeform/ourservices.html" className="block text-gray-700 hover:text-blue-600">
            Services
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
