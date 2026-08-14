import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#f2f4f1] py-16 px-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                
                <div>
                    <h3 className="text-xl font-bold text-[#4b5d44] mb-6">
                        Main Pages
                    </h3>
              <ul className="space-y-4 text-gray-600 text-sm">
    <li className="hover:text-gray-900 cursor-pointer transition-colors">
        Home
    </li>
    <li className="hover:text-gray-900 cursor-pointer transition-colors">
   Home
    </li>
    <li className="hover:text-gray-900 cursor-pointer transition-colors">
       Home
    </li>
    <li className="hover:text-gray-900 cursor-pointer transition-colors">
      Home
    </li>
    <li className="hover:text-gray-900 cursor-pointer transition-colors">
       Home
    </li>
</ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-[#4b5d44] mb-6">
                        Home
                    </h3>
                    <ul className="space-y-4 text-gray-600 text-sm">
                        <li className="hover:text-gray-900 cursor-pointer transition-colors">
                        Home
                        </li>
                        <li className="hover:text-gray-900 cursor-pointer transition-colors">
                         Home
                        </li>
                        <li className="hover:text-gray-900 cursor-pointer transition-colors">
                         Home
                        </li>
                        <li className="hover:text-gray-900 cursor-pointer transition-colors">
                        Home
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-[#4b5d44] mb-6 leading-snug">
                        Download the<br />Chair Location App
                    </h3>
                    <div className="flex flex-col space-y-3">
                        <div className="w-40 h-12 relative cursor-pointer">
                            <Image 
                                src="/google.jpg" 
                                alt="Get" 
                                fill 
                                className="object-contain"
                            />
                        </div>
                        <div className="w-40 h-12 relative cursor-pointer">
                            <Image 
                                src="/insta.jpg" 
                                alt="Get " 
                                fill 
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}