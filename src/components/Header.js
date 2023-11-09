// components/Header.js

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="text-white text-2xl font-bold cursor-pointer mb-4 md:mb-0 md:text-3xl md:self-center">
            ShortenURL
          </div>
        </Link>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Navigation Links - Mobile */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col mt-4 space-y-2">
            <Link href="/">
              <div className="text-white hover:text-gray-300 cursor-pointer">
                Home
              </div>
            </Link>
            <Link href="/about">
              <div className="text-white hover:text-gray-300 cursor-pointer">
                About
              </div>
            </Link>
            <Link href="/contact">
              <div className="text-white hover:text-gray-300 cursor-pointer">
                Contact
              </div>
            </Link>
          </nav>
        )}

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/">
            <div className="text-white hover:text-gray-300 cursor-pointer">
              Home
            </div>
          </Link>
          <Link href="/about">
            <div className="text-white hover:text-gray-300 cursor-pointer">
              About
            </div>
          </Link>
          <Link href="/contact">
            <div className="text-white hover:text-gray-300 cursor-pointer">
              Contact
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
