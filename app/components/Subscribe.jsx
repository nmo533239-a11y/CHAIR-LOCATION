import Image from "next/image"
export default function Subscribe(){
    return(
        <section className="flex items-center flex-col gap-3">
            <div className="relative w-full h-[600px]">
      <Image src="/last.jpg" alt="last logo" fill className="object-cover"/>
            </div>
            <span className="text-4xl font-bold tracking-wide ">Subscribe To Our Newsletter</span>
            <p className="w-2/3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur architecto earum exercitationem. Illo impedit facere commodi obcaecati quod quos in iste aliquid error ex, ipsam modi, laudanti</p>
 <div className="flex gap-4 p-2">
    <input placeholder="write your mail" className=" rounded-md w-96 focus:outline-none border py-1 px-6"/>
    <button className="py-2 px-4 rounded-md bg-green-800 text-gray-200">subscribe</button>
 </div>
        </section>
    )
}

