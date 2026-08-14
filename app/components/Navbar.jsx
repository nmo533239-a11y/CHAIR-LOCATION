"use client"

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-[100] shadow-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between relative">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg sm:text-xl text-green-900">CHAIR LOCATION</span>
        </div>
      
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-700 font-medium text-sm">
          <Link href="/" className="relative py-1 hover:text-green-900 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-green-900 hover:after:w-full after:transition-all after:duration-300">
            Home
          </Link>
          <Link href="#" className="relative py-1 hover:text-green-900 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-green-900 hover:after:w-full after:transition-all after:duration-300">
            About
          </Link>
          <Link href="#" className="relative py-1 hover:text-green-900 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-green-900 hover:after:w-full after:transition-all after:duration-300">
            Products
          </Link>
          <Link href="#" className="relative py-1 hover:text-green-900 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-green-900 hover:after:w-full after:transition-all after:duration-300">
            How It Works
          </Link>
          <Link href="#" className="relative py-1 hover:text-green-900 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-green-900 hover:after:w-full after:transition-all after:duration-300">
            Contact Us
          </Link>
          <Link href="#" className="relative py-1 hover:text-green-900 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-green-900 hover:after:w-full after:transition-all after:duration-300">
            Membership
          </Link>
        </div>
      
        <div className="hidden md:flex items-center gap-3">
          <button className="flex items-center gap-1.5 text-gray-800 text-sm px-3 py-1.5 rounded-full border border-gray-200">
            العربية 🇸🇦
          </button>
          <button className="bg-[#2D4A27] text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-green-900 transition">
            Create Account
          </button>
          <button className="bg-white text-gray-800 px-4 py-2 rounded-xl text-sm font-semibold border border-gray-300 hover:bg-gray-50">
            Login
          </button>
        </div>
      
        <button 
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-gray-800 hover:text-green-900 rounded-lg border border-gray-200 focus:outline-none z-[110] text-xl font-bold"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </nav>
      
      {isMenuOpen && (
        <div className="md:hidden w-full bg-white border-b border-gray-200 shadow-2xl px-6 py-6 flex flex-col gap-4 absolute top-full left-0 z-[100]">
          <div className="flex flex-col gap-3 text-gray-800 font-semibold text-base">
            <Link href="/" className="hover:text-green-900 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="#" className="hover:text-green-900 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="#" className="hover:text-green-900 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>
            <Link href="#" className="hover:text-green-900 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
              How It Works
            </Link>
            <Link href="#" className="hover:text-green-900 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>
            <Link href="#" className="hover:text-green-900 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
              Membership
            </Link>
          </div>
      
          <div className="flex flex-col gap-2.5 pt-2">
            <button className="w-full flex items-center justify-center gap-1.5 text-gray-800 text-sm px-3 py-2.5 rounded-xl border border-gray-200">
              العربية 🇸🇦
            </button>
            <button className="w-full bg-[#2D4A27] text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-green-900 transition">
              Create Account
            </button>
            <button className="w-full bg-white text-gray-800 px-5 py-3 rounded-xl text-sm font-semibold border border-gray-300 hover:bg-gray-50">
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}