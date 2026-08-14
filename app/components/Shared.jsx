import Image from "next/image";


export default function Shared() {
    return (
        <section className="container mx-auto px-4 py-12">
           
            <nav className="flex justify-center mb-12">
                <div className="bg-[#4b5d44] p-2 rounded-full flex flex-wrap items-center gap-2 shadow-md">
                    <button className="bg-white text-gray-900 px-6 py-2.5 rounded-full font-medium text-sm shadow transition-all">
                        Shared Space
                    </button>
                    <button className="text-white hover:text-white hover:bg-white/20 px-6 py-2.5 rounded-full font-medium text-sm transition-all">
                        Private Offices
                    </button>
                    <button className="text-white hover:text-white hover:bg-white/20 px-6 py-2.5 rounded-full font-medium text-sm transition-all">
                        Meeting Rooms
                    </button>
                    <button className="text-white hover:text-white hover:bg-white/20 px-6 py-2.5 rounded-full font-medium text-sm transition-all">
                        Virtual Offices
                    </button>
                </div>
            </nav>

         
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
            
                <div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                        Shared Space
                    </h2>
                    <p className="text-xl font-medium text-gray-700 mt-1 mb-4">
                        (CO Work Space)
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                    </p>

                    {/* المميزات باستخدام ul و li مباشرة */}
                    <ul className="space-y-3 mb-8 text-gray-700 text-sm list-disc list-inside">
                        <li> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim</li>
                        <li> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim</li>
                        <li> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim</li>
                        <li> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eni</li>
                    </ul>

                
                    <div className="flex items-center space-x-2 space-x-reverse mb-8 text-gray-800 font-semibold border-t border-gray-200 pt-4">
                        
                        <span>Price Starting From: <span className="text-gray-900 font-bold text-lg">1250 EGP</span></span>
                    </div>

        
                    <div className="flex flex-wrap items-center gap-4">
                        <button className="bg-[#4b5d44] hover:bg-[#3d4c37] text-white px-8 py-3 rounded-xl font-medium text-sm transition-colors shadow-md">
                            Book Now
                        </button>
                        <button className="border border-[#4b5d44] text-[#4b5d44] hover:bg-gray-50 px-8 py-3 rounded-xl font-medium text-sm transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>

              
                <div className="relative h-[400px] lg:h-[450px] w-full rounded-3xl overflow-hidden shadow-xl">
                    <Image 
                        src="/meet2.jpg" 
                        alt="meet2" 
                        fill 
                        className="object-cover"
                    />
                </div>

            </div>
        </section>
    );
}