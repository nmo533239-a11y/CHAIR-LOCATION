import Image from "next/image";

export default function Work() {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-3">
                    How It Works
                </h2>
                <p className="text-gray-600 text-base max-w-lg mx-auto">
                   Lorem ipsum dolor sit, amet consectetur adipisicing 
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="flex gap-2 items-center space-x-3 space-x-reverse mb-4">
                            <span className="w-8 h-8 rounded-full bg-[#dfc599] text-gray-900 font-bold flex items-center justify-center text-sm shadow-sm">
                                1
                            </span>
                            <h3 className="font-bold text-lg text-gray-900">
                                Book
                            </h3>
                        </div>

                        <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6 shadow-md">
                            <Image 
                                src="/meet1.jpg" 
                                alt="Book, Reach or Call" 
                                fill 
                                className="object-cover"
                            />
                        </div>

                        <p className="text-gray-500 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aut quibusdam, 
                        </p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="flex gap-2 items-center space-x-3 space-x-reverse mb-4">
                            <span className="w-8 h-8 rounded-full bg-[#dfc599] text-gray-900 font-bold flex items-center justify-center text-sm shadow-sm">
                                2
                            </span>
                            <h3 className="font-bold text-lg text-gray-900">
                                View 
                            </h3>
                        </div>

                        <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6 shadow-md">
                            <Image 
                                src="/meet1.jpg" 
                                alt="View Location Info" 
                                fill 
                                className="object-cover"
                            />
                        </div>

                        <p className="text-gray-500 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing 
                        </p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="flex  gap-2 items-center space-x-3 space-x-reverse mb-4">
                            <span className="w-8 h-8 rounded-full bg-[#c6a264] text-gray-900 font-bold flex items-center justify-center text-sm shadow-sm">
                                3
                            </span>
                            <h3 className="font-bold text-lg text-gray-900">
                                Search 
                            </h3>
                        </div>

                        <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6 shadow-md">
                            <Image 
                                src="/meet1.jpg" 
                                alt="Search Locations" 
                                fill 
                                className="object-cover"
                            />
                        </div>

                        <p className="text-gray-500 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}