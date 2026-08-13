"use client"; // لازم تتكتب فوق خالص عشان الأيقونات وتداخل المكونات

import localFont from "next/font/local";
import "./globals.css";
import { CiSearch } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import  Link from "next/link"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// ملاحظة: في Next.js، لو حطيت "use client" الـ metadata يفضل تكون في ملف لوحدها (page.js)، 
// لكن لو شغال معاك بدون مشاكل سيبها، ولو ظهرت مشكلة هنفصلها.

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col h-screen">
          

          
          <div className="flex-1 bg-gray-200">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}