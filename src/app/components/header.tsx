"use client";
import { useState } from "react";
import Link from "next/link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          YourName
        </h1>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-gray-900 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Nav Links - Desktop */}
        <nav className="hidden lg:flex space-x-6">
          <Link
            href="#"
            className="text-gray-900 dark:text-white font-medium hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-gray-900 dark:text-white font-medium hover:text-blue-600"
          >
            Projects
          </Link>
          <Link
            href="#"
            className="text-gray-900 dark:text-white font-medium hover:text-blue-600"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Nav Links - Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 px-4 py-2 shadow-md">
          <nav className="flex flex-col space-y-2">
            <Link
              href="#"
              className="text-gray-900 dark:text-white font-medium hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-gray-900 dark:text-white font-medium hover:text-blue-600"
            >
              Projects
            </Link>
            <Link
              href="#"
              className="text-gray-900 dark:text-white font-medium hover:text-blue-600"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
