import Image from "next/image";

export default function Contact() {
    return (
        <section className="container mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                <div className="w-full h-[400px]  relative overflow-hidden rounded-3xl shadow-xl">
                    <Image 
                        src="/meet2.jpg" 
                        alt="meet2" 
                        fill 
                        className="object-cover"
                    />
                </div> 

                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                    <h2 className="text-3xl  font-bold text-gray-900 tracking-wider mb-6 text-center">
                        Contact Us
                    </h2>
                    
                    <form className="flex flex-col space-y-4">
                        <input 
                            placeholder="Full Name" 
                            className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4b5d44] text-sm text-gray-800"
                        />
                        <input
                            placeholder="Email Address" 
                            className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4b5d44] text-sm text-gray-800"
                        />
                        <input 
                            placeholder="Phone Number" 
                            className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4b5d44] text-sm text-gray-800"
                        />
                        <textarea 
                            placeholder="Your Message" 
                            rows={4}
                            className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4b5d44] text-sm text-gray-800 resize-none"
                        ></textarea>
                        
                        <button 
                            type="submit" 
                            className="w-full bg-[#4b5d44] hover:bg-[#3d4c37] text-white py-3.5 rounded-xl font-medium text-sm transition-colors shadow-md mt-2"
                        >
                            Send
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}