
"use client"
import { FaDelicious } from "react-icons/fa";
import { useState } from "react"
import { FaCheck } from "react-icons/fa";
export default function Price(){
    const [isYearly,setIsYearly]=useState(false)
    return(
        <section id="price" className="flex flex-col  items-center gap-2 py-16">
            <div    className="flex flex-col justify-center items-center gap-2" >
                <span>pricing</span>
                <h2 className="text-5xl font-bold tracking-wide" >simple,transeport lorem</h2>
                <p className="w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quas esse impedit atque optio dignissimos illo, praesentium </p>
                    <div className="flex items-center bg-gray-100 w-fit py-2 px-4 gap-4 rounded-md">
         <button onClick={()=> setIsYearly(false)}
         className={`hover:bg-gray-300 rounded-lg py-1 px-4 transition-all duration-300
          ${ !isYearly? "bg-[#2D4A27] text-white shadow-md" : "text-gray-600 hover:text-gray-900"}`}>
            Monthly
         </button>
         <button
         onClick={()=> setIsYearly(true)}
         className={`hover:bg-gray-300  px-4 py-1 rounded-lg transition-all duration-300
            ${isYearly ?"bg-[#2D4A27] text-white shadow-md" : "text-gray-600 hover:text-gray-900"} `}
         >Yearly</button>
                    </div>

            </div>
            {isYearly ?(
                <div className="flex flex-col md:flex-row items-center gap-3">

                    <div className="flex flex-col gap-3 items-center bg-gray-100 p-2 rounded-md shadow-sm ">
                        <span className="text-4xl font-bold">select  options</span>
                        <button className="py-2 px-6 hover:bg-orange-400 rounded-lg bg-gray-100">Metting Rooms</button>
                             <button className="py-2 px-6 hover:bg-orange-400 rounded-lg bg-gray-100">Metting Rooms</button>
                            <button className="py-2 px-6 hover:bg-orange-400 rounded-lg bg-gray-100">Metting Rooms</button>
                              <button className="py-2 px-6 hover:bg-orange-400 rounded-lg bg-gray-100">Metting Rooms</button>

                        <p className="w-2/3 p-2 bg-gray-200 rounded-lg">Lorem A nostrum accusamus fugit ad, sunt maiores saepe earum </p>
                         </div>

<div className="flex flex-col gap-6 justify-between bg-gray-100 rounded-lg shadow-md p-6 min-h-[450px] transition-colors duration-300 hover:bg-green-900 group">
    <div className="flex items-center gap-3">
        <FaDelicious className="text-4xl text-green-500" />
        <span className="text-3xl font-bold group-hover:text-white transition-colors">Basic indvidul</span>
    </div>
    
    <div className="flex flex-col gap-3 w-full justify-center">
        <p className="w-full text-gray-600 group-hover:text-gray-200 transition-colors text-sm sm:text-base">
            Lorem ipsum facilis laborum voluptates inventore non, sint repellat
        </p>
        <span className="text-2xl font-bold group-hover:text-white transition-colors">SAR 999/Yearly</span>
        <span className="text-gray-500 group-hover:text-gray-300 transition-colors text-sm font-semibold">whats includes</span>
    </div>

    <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center">
            <FaCheck className="p-1 rounded-full bg-green-900 group-hover:bg-white group-hover:text-green-900 text-white transition-colors" />
            <span className="group-hover:text-white transition-colors text-sm">lorm until vesit</span>
        </div>
        <div className="flex gap-2 items-center">
            <FaCheck className="p-1 rounded-full bg-green-900 group-hover:bg-white group-hover:text-green-900 text-white transition-colors" />
            <span className="group-hover:text-white transition-colors text-sm">lorm until vesit</span>
        </div>
        <div className="flex gap-2 items-center">
            <FaCheck className="p-1 rounded-full bg-green-900 group-hover:bg-white group-hover:text-green-900 text-white transition-colors" />
            <span className="group-hover:text-white transition-colors text-sm">lorm until vesit</span>
        </div>
    </div>

    <button className="w-full mt-4 bg-gray-200 text-gray-800 py-3 rounded-md font-semibold hover:bg-gray-300 transition-colors">
        Get Started
    </button>
</div>
<div className="flex flex-col gap-6 justify-between bg-gray-100 rounded-lg shadow-md p-6 min-h-[450px] transition-colors duration-300 hover:bg-green-900 group">
    <div className="flex items-center gap-3">
        <FaDelicious className="text-4xl text-green-500" />
        <span className="text-3xl font-bold group-hover:text-white transition-colors">Basic indvidul</span>
    </div>
    
    <div className="flex flex-col gap-3 w-full justify-center">
        <p className="w-full text-gray-600 group-hover:text-gray-200 transition-colors text-sm sm:text-base">
            Lorem ipsum facilis laborum voluptates inventore non, sint repellat
        </p>
        <span className="text-2xl font-bold group-hover:text-white transition-colors">SAR 999/Yearly</span>
        <span className="text-gray-500 group-hover:text-gray-300 transition-colors text-sm font-semibold">whats includes</span>
    </div>

    <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center">
            <FaCheck className="p-1 rounded-full bg-green-900 group-hover:bg-white group-hover:text-green-900 text-white transition-colors" />
            <span className="group-hover:text-white transition-colors text-sm">lorm until vesit</span>
        </div>
        <div className="flex gap-2 items-center">
            <FaCheck className="p-1 rounded-full bg-green-900 group-hover:bg-white group-hover:text-green-900 text-white transition-colors" />
            <span className="group-hover:text-white transition-colors text-sm">lorm until vesit</span>
        </div>
        <div className="flex gap-2 items-center">
            <FaCheck className="p-1 rounded-full bg-green-900 group-hover:bg-white group-hover:text-green-900 text-white transition-colors" />
            <span className="group-hover:text-white transition-colors text-sm">lorm until vesit</span>
        </div>
    </div>

    <button className="w-full mt-4 bg-gray-200 text-gray-800 py-3 rounded-md font-semibold hover:bg-gray-300 transition-colors">
        Get Started
    </button>
</div>
<div className="flex flex-col gap-6 justify-between bg-gray-100 rounded-lg shadow-md p-6 min-h-[450px] transition-colors duration-300 hover:bg-green-900 group">
    <div className="flex items-center gap-3">
        <FaDelicious className="text-4xl text-green-500" />
        <span className="text-3xl font-bold group-hover:text-white transition-colors">Basic indvidul</span>
    </div>
    
    <div className="flex flex-col gap-3 w-full justify-center">
        <p className="w-full text-gray-600 group-hover:text-gray-200 transition-colors text-sm sm:text-base">
            Lorem ipsum facilis laborum voluptates inventore non, sint repellat
        </p>
        <span className="text-2xl font-bold group-hover:text-white transition-colors">SAR 2999/Yearly</span>
        <span className="text-gray-500 group-hover:text-gray-300 transition-colors text-sm font-semibold">whats includes</span>
    </div>

    <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center">
            <FaCheck className="p-1 rounded-full bg-green-900 group-hover:bg-white group-hover:text-green-900 text-white transition-colors" />
            <span className="group-hover:text-white transition-colors text-sm">lorm until vesit</span>
        </div>
        <div className="flex gap-2 items-center">
            <FaCheck className="p-1 rounded-full bg-green-900 group-hover:bg-white group-hover:text-green-900 text-white transition-colors" />
            <span className="group-hover:text-white transition-colors text-sm">lorm until vesit</span>
        </div>
        <div className="flex gap-2 items-center">
            <FaCheck className="p-1 rounded-full bg-green-900 group-hover:bg-white group-hover:text-green-900 text-white transition-colors" />
            <span className="group-hover:text-white transition-colors text-sm">lorm until vesit</span>
        </div>
    </div>

    <button className="w-full mt-4 bg-gray-200 text-gray-800 py-3 rounded-md font-semibold hover:bg-gray-300 transition-colors">
        Get Started
    </button>
</div>

                    

                </div>
            ):(

                    <div className="flex flex-col md:flex-row items-center gap-3">
                    <div className="flex flex-col gap-3 items-center rounded-md shadow-sm ">
                        <span className="text-4xl font-bold">select  options</span>
                        <button className="py-2 px-6  hover:bg-orange-400 rounded-lg bg-gray-100">Metting Rooms</button>
                          <button className="py-2 px-6 hover:bg-orange-400 rounded-lg bg-gray-100">Metting Rooms</button>
                            <button className="py-2 px-6 hover:bg-orange-400 rounded-lg bg-gray-100">Metting Rooms</button>
                              <button className="py-2 px-6 hover:bg-orange-400 rounded-lg bg-gray-100">Metting Rooms</button>
                        
                         <p className="w-2/3 p-2 bg-gray-200 rounded-lg">Lorem A nostrum accusamus fugit ad, sunt maiores saepe earum </p>
                        
                    </div>

     <div className="flex flex-col gap-6 justify-between bg-gray-100 rounded-lg shadow-md p-6 min-h-[450px] transition-colors duration-300 hover:bg-green-900 group">
    <div className="flex items-center gap-3">
        <FaDelicious className="text-4xl text-green-500" />
        <span className="text-3xl font-bold group-hover:text-white transition-colors">Basic indvidul</span>
    </div>
    
    <div className="flex flex-col gap-3 w-full justify-center">
        <p className="w-full text-gray-600 group-hover:text-gray-200 transition-colors text-sm sm:text-base">
            Lorem ipsum facilis laborum voluptates inventore non, sint repellat
        </p>
        <span className="text-2xl font-bold group-hover:text-white transition-colors">SAR 100/Yearly</span>
        <span className="text-gray-500 group-hover:text-gray-300 transition-colors text-sm font-semibold">whats includes</span>
    </div>

    <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center">
            <FaCheck className="p-1 rounded-full bg-green-900 group-hover:bg-white group-hover:text-green-900 text-white transition-colors" />
            <span className="group-hover:text-white transition-colors text-sm">lorm until vesit</span>
        </div>
        <div className="flex gap-2 items-center">
            <FaCheck className="p-1 rounded-full bg-green-900 group-hover:bg-white group-hover:text-green-900 text-white transition-colors" />
            <span className="group-hover:text-white transition-colors text-sm">lorm until vesit</span>
        </div>
        <div className="flex gap-2 items-center">
            <FaCheck className="p-1 rounded-full bg-green-900 group-hover:bg-white group-hover:text-green-900 text-white transition-colors" />
            <span className="group-hover:text-white transition-colors text-sm">lorm until vesit</span>
        </div>
    </div>

    <button className="w-full mt-4 bg-gray-200 text-gray-800 py-3 rounded-md font-semibold hover:bg-gray-300 transition-colors">
        Get Started
    </button>
</div>
<div className="flex flex-col gap-6 justify-between bg-gray-100 rounded-lg shadow-md p-6 min-h-[450px] transition-colors duration-300 hover:bg-green-900 group">
    <div className="flex items-center gap-3">
        <FaDelicious className="text-4xl text-green-500" />
        <span className="text-3xl font-bold group-hover:text-white transition-colors">Basic indvidul</span>
    </div>
    
    <div className="flex flex-col gap-3 w-full justify-center">
        <p className="w-full text-gray-600 group-hover:text-gray-200 transition-colors text-sm sm:text-base">
            Lorem ipsum facilis laborum voluptates inventore non, sint repellat
        </p>
        <span className="text-2xl font-bold group-hover:text-white transition-colors">SAR 395/Yearly</span>
        <span className="text-gray-500 group-hover:text-gray-300 transition-colors text-sm font-semibold">whats includes</span>
    </div>

    <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center">
            <FaCheck className="p-1 rounded-full bg-green-900 group-hover:bg-white group-hover:text-green-900 text-white transition-colors" />
            <span className="group-hover:text-white transition-colors text-sm">lorm until vesit</span>
        </div>
        <div className="flex gap-2 items-center">
            <FaCheck className="p-1 rounded-full bg-green-900 group-hover:bg-white group-hover:text-green-900 text-white transition-colors" />
            <span className="group-hover:text-white transition-colors text-sm">lorm until vesit</span>
        </div>
        <div className="flex gap-2 items-center">
            <FaCheck className="p-1 rounded-full bg-green-900 group-hover:bg-white group-hover:text-green-900 text-white transition-colors" />
            <span className="group-hover:text-white transition-colors text-sm">lorm until vesit</span>
        </div>
    </div>

    <button className="w-full mt-4 bg-gray-200 text-gray-800 py-3 rounded-md font-semibold hover:bg-gray-300 transition-colors">
        Get Started
    </button>
</div>               
<div className="flex flex-col gap-6 justify-between bg-gray-100 rounded-lg shadow-md p-6 min-h-[450px] transition-colors duration-300 hover:bg-green-900 group">
    <div className="flex items-center gap-3">
        <FaDelicious className="text-4xl text-green-500" />
        <span className="text-3xl font-bold group-hover:text-white transition-colors">Basic indvidul</span>
    </div>
    
    <div className="flex flex-col gap-3 w-full justify-center">
        <p className="w-full text-gray-600 group-hover:text-gray-200 transition-colors text-sm sm:text-base">
            Lorem ipsum facilis laborum voluptates inventore non, sint repellat
        </p>
        <span className="text-2xl font-bold group-hover:text-white transition-colors">SAR 795/Yearly</span>
        <span className="text-gray-500 group-hover:text-gray-300 transition-colors text-sm font-semibold">whats includes</span>
    </div>

    <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center">
            <FaCheck className="p-1 rounded-full bg-green-900 group-hover:bg-white group-hover:text-green-900 text-white transition-colors" />
            <span className="group-hover:text-white transition-colors text-sm">lorm until vesit</span>
        </div>
        <div className="flex gap-2 items-center">
            <FaCheck className="p-1 rounded-full bg-green-900 group-hover:bg-white group-hover:text-green-900 text-white transition-colors" />
            <span className="group-hover:text-white transition-colors text-sm">lorm until vesit</span>
        </div>
        <div className="flex gap-2 items-center">
            <FaCheck className="p-1 rounded-full bg-green-900 group-hover:bg-white group-hover:text-green-900 text-white transition-colors" />
            <span className="group-hover:text-white transition-colors text-sm">lorm until vesit</span>
        </div>
    </div>

    <button className="w-full mt-4 bg-gray-200 text-gray-800 py-3 rounded-md font-semibold hover:bg-gray-300 transition-colors">
        Get Started
    </button>
</div>

                </div>
            )}
        </section>
    )
}
