'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bgImage from './bg.jpg';

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* Navbar Container */}
      <header className="fixed top-0 left-0 w-full bg-white z-[100] shadow-sm border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl text-green-900">CHAIR LOCATION</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium text-sm">
            <Link href="/" className="relative py-1 text-green-900 font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-green-900">
              Home
            </Link>
            <Link href="#" className="relative py-1 hover:text-green-900 transition-colors duration-300">
              About
            </Link>
            <Link href="#" className="relative py-1 hover:text-green-900 transition-colors duration-300">
              Products
            </Link>
            <Link href="#" className="relative py-1 hover:text-green-900 transition-colors duration-300">
              How It Works
            </Link>
            <Link href="#" className="relative py-1 hover:text-green-900 transition-colors duration-300">
              Contact Us
            </Link>
            <Link href="#" className="relative py-1 hover:text-green-900 transition-colors duration-300">
              Membership
            </Link>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="flex items-center gap-1.5 text-gray-800 text-sm px-3 py-1.5 rounded-full border border-gray-200">
              العربية 🇸🇦
            </button>
            <button className="bg-[#2D4A27] text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-green-900 transition">
              Create Account
            </button>
            <button className="bg-white text-gray-800 px-5 py-2 rounded-xl text-sm font-semibold border border-gray-300 hover:bg-gray-50">
              Login
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2.5 text-gray-800 hover:text-green-900 rounded-lg border border-gray-200 focus:outline-none z-[110]"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Dropdown Menu (مكانها هنا صح بره الـ nav وواخدة z-index قوي جداً) */}
        {isMenuOpen && (
          <div className="md:hidden w-full bg-white border-b border-gray-200 shadow-2xl px-6 py-6 flex flex-col gap-4 absolute top-full left-0 z-[100]">
            <div className="flex flex-col gap-3 text-gray-800 font-semibold text-base">
              <Link href="/" className="text-green-900 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
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

      {/* Main Content */}
      <main className="pt-28 pb-16 px-4 flex flex-col items-center">
        
        <div className="relative w-full max-w-[95%] md:max-w-[85%] min-h-[420px] md:h-[480px] rounded-3xl flex flex-col items-center justify-center p-6">
          
          {/* Background Image */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <Image
              src={bgImage}
              alt="Office background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
          </div>

          {/* Heading */}
          <div className="relative z-20 text-center px-2 mb-12 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#F5E6D3] leading-tight tracking-wide drop-shadow-lg">
              Office That Fit You <br />
              Creative Way To Work
            </h1>
          </div>

          {/* Search Card Container */}
          <div className="relative md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:translate-y-1/2 z-30 w-full max-w-4xl mt-6 md:mt-0">
            <div className="bg-white md:bg-gradient-to-b md:from-white md:from-50% md:to-[#F5E6D3] md:to-50% p-4 md:p-6 rounded-3xl shadow-xl border border-gray-100">
              
              {/* Category Options */}
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 border-b border-gray-100 pb-4 mb-4 text-xs md:text-sm">
                <button className="px-3 md:px-5 py-2 rounded-xl text-gray-500 font-medium hover:bg-green-50 hover:text-green-900 transition">Shared Space</button>
                <button className="px-3 md:px-5 py-2 rounded-xl text-gray-500 font-medium hover:bg-green-50 hover:text-green-900 transition">Private Offices</button>
                <button className="px-3 md:px-5 py-2 rounded-xl bg-green-50 text-green-900 font-bold border border-green-200">Meeting Rooms</button>
                <button className="px-3 md:px-5 py-2 rounded-xl text-gray-500 font-medium hover:bg-green-50 hover:text-green-900 transition">Virtual Offices</button>
              </div>

              {/* Input + Search Actions */}
              <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="relative flex-grow w-full">
                  <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Search Here..." 
                    className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 md:border-[#e1d0bc] rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-800"
                  />
                </div>

                <button className="hidden lg:flex items-center gap-2 text-gray-700 hover:text-green-900 text-sm font-semibold px-3 py-3 rounded-xl border border-[#e1d0bc] bg-white/60 hover:bg-white transition whitespace-nowrap">
                  <svg className="w-4 h-4 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Search Nearby</span>
                </button>

                <button className="w-full md:w-auto bg-[#2D4A27] text-white px-8 py-3 rounded-xl font-bold hover:bg-green-900 transition shadow-md whitespace-nowrap">
                  Search
                </button>
              </div>

            </div>
          </div>

        </div>

      </main>

    </div>
  );
}