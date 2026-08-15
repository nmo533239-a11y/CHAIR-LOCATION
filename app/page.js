'use client';

import Image from 'next/image';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import Listing from './components/Listing';
import Shared from './components/Shared';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Price from './components/Price';
import Article from './components/Article';
import Subscribe from './components/Subscribe';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col font-sans overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
      <Listing />
      <Shared />
      <Work />
      <Contact />
      <Price/>
      <Article/>
      <Subscribe/>
      <Footer />

    </div>
  );
}