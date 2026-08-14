'use client';

import Image from 'next/image';
// import bgImage from './bg.jpg';
import Navbar from "./components/Navbar";
import Home from './components/Home'
import About from './components/About'
import Listing from './components/Listing';
import Shared from './components/Shared';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col font-sans overflow-x-hidden">
      
      {/* Navbar Container */}
      <Navbar />

      {/* Main Content */}
     <Home/>
     <About/>
     <Listing/>
     <Shared/>
     <Work/>
     <Contact/>
     <Footer/>

    </div>
  );
}