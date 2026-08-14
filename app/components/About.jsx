import Image from "next/image";
import { FaMapMarkerAlt, FaBriefcase, FaHeadset } from "react-icons/fa";

export default function About() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        

        <div className="space-y-6">
          <h2 className="font-bold text-3xl md:text-4xl text-gray-900">
            About Chair Location
          </h2>
          
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem excepturi dignissimos provident magnam officiis, consequatur facilis molestias tempore sapiente doloremque magni earum necessitatibus, voluptates veritatis quia eligendi rerum, non omnis!
          </p>

          <h3 className="font-bold text-xl text-gray-900 pt-2">
            Why Chair Location
          </h3>

  
          <div className="space-y-4">
            <div className="flex gap-2 items-center space-x-4 space-x-reverse">
              <div className="w-12 h-12 rounded-full bg-[#f4ebd0] flex items-center justify-center shrink-0 text-[#3b5323]">
                <FaMapMarkerAlt className="w-5 h-5" />
              </div>
              <span className="text-gray-800 font-medium">More Than 1111 Location</span>
            </div>

            <div className="flex  gap-2 items-center space-x-4 space-x-reverse">
              <div className="w-12 h-12 rounded-full bg-[#f4ebd0] flex  items-center justify-center shrink-0 text-[#3b5323]">
                <FaBriefcase className="w-5 h-5" />
              </div>
              <span className="text-gray-800 font-medium">More Than 1111 Location</span>
            </div>

            <div className="flex gap-2 items-center space-x-4 space-x-reverse">
              <div className="w-12 h-12 rounded-full bg-[#f4ebd0] flex items-center justify-center shrink-0 text-[#3b5323]">
                <FaHeadset className="w-5 h-5" />
              </div>
              <span className="text-gray-800 font-medium">More Than 1111 Location</span>
            </div>
          </div>

      
          <div className="flex gap-3 items-center space-x-4 space-x-reverse pt-4">
            <button className="bg-[#3b5323] hover:bg-[#2e421b] text-white px-6 py-3 rounded-xl font-medium transition-colors">
              View Products
            </button>
            <button className="border border-[#3b5323] text-[#3b5323] hover:bg-gray-50 px-6 py-3 rounded-xl font-medium transition-colors">
              Book Now
            </button>
          </div>
        </div>

  
        <div className="space-y-4">
          <div className="relative w-full h-48 md:h-56 shadow-md rounded-2xl overflow-hidden">
            <Image 
              src="/meet1.jpg" 
              alt="meet1" 
              fill 
              className="object-cover" 
            />
          </div>

          <div className="relative w-full h-48 md:h-56 shadow-md rounded-2xl overflow-hidden">
            <Image 
              src="/meet2.jpg" 
              alt="meet2" 
              fill 
              className="object-cover" 
            />
          </div>

          <div className="relative w-full h-48 md:h-56 shadow-md rounded-2xl overflow-hidden">
            <Image 
              src="/meet3.jpg" 
              alt="meet3" 
              fill 
              className="object-cover" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}