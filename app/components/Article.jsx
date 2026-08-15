import Image from "next/image"

export default function Article(){
    return(
        <section className="py-8 px-4 bg-gray-50">
            <div className="flex flex-col p-2 mb-4">
                <span className="text-2xl font-bold">our Article</span>
                <span className="text-gray-600">most recent articles</span>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center">
               
          
                <div className="w-full md:w-1/3 rounded-lg overflow-hidden  flex flex-col">
                    
             
                    <div className="relative w-full h-48">
                        <Image 
                            src="/meet2.jpg" 
                            alt="meeting" 
                            fill 
                            className="object-cover"
                        />
                    </div>

       
                    <div className="p-4 flex flex-col gap-2 text-gray-900">
                         <span className="text-xs">by mohamed ibrahem</span>
                        <span className="text-xs text-green-700 font-semibold">Technology</span>
                        <h3 className="text-lg font-bold">How to manage meetings effectively</h3>
                        <button className="text-md text-green-900">Read more... </button>
                       
                    </div>

                </div>

      <div className="w-full md:w-1/3 rounded-lg overflow-hidden  flex flex-col">
                    
             
                    <div className="relative w-full h-48">
                        <Image 
                            src="/meet1.jpg" 
                            alt="meeting" 
                            fill 
                            className="object-cover"
                        />
                    </div>

       
                    <div className="p-4 flex flex-col gap-2 text-gray-900">
                         <span className="text-xs">by mohamed ibrahem</span>
                        <span className="text-xs text-green-700 font-semibold">Technology</span>
                        <h3 className="text-lg font-bold">How to manage meetings effectively</h3>
                        <button className="text-md text-green-900">Read more... </button>
                       
                    </div>

                </div>
      <div className="w-full md:w-1/3 rounded-lg overflow-hidden  flex flex-col">
                    
             
                    <div className="relative w-full h-48">
                        <Image 
                            src="/meet3.jpg" 
                            alt="meeting" 
                            fill 
                            className="object-cover"
                        />
                    </div>

       
                    <div className="p-4 flex flex-col gap-2 text-gray-900">
                         <span className="text-xs">by mohamed ibrahem</span>
                        <span className="text-xs text-green-700 font-semibold">Technology</span>
                        <h3 className="text-lg font-bold">How to manage meetings effectively</h3>
                        <button className="text-md text-green-900">Read more... </button>
                       
                    </div>

                </div>

                

                

            </div>
        </section>
    )
}