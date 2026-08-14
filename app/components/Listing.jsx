import Image from "next/image";

export default function Listing() {
    return (
        <section className="container mx-auto px-4 py-12">
            <div className="text-center mb-8">
                <h2 className="font-bold text-4xl tracking-wider text-gray-900">Latest Listings</h2>
                <p className="text-gray-500 mt-2">Check our latest listings</p>
            </div>

         
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-md">
                    <Image 
                        src="/listing.jpg" 
                        alt="listing 1" 
                        fill 
                        className="object-cover"
                    />
                </div>

                <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-md">
                    <Image 
                        src="/listing.jpg" 
                        alt="listing 2" 
                        fill 
                        className="object-cover"
                    />
                </div>

                <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-md">
                    <Image 
                        src="/listing.jpg" 
                        alt="listing 3" 
                        fill 
                        className="object-cover"
                    />
                </div>

                <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-md">
                    <Image 
                        src="/listing.jpg" 
                        alt="listing 4" 
                        fill 
                        className="object-cover"
                    />
                </div>

            </div>
        </section>
    );
}