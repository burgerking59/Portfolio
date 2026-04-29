import Image from "next/image"
import Link from 'next/link';
import { Navbar } from '../nav'


export default function Aproject() {
  return (
    <div className="overflow-y-scroll h-screen">
        <Navbar name={""} />
        <div className="bg-white pt-2 flex  min-h-screen w-full md:w-[70vw] md:absolute md:top-0 md:right-0 ">
            <div className="flex gap-8 flex-col items-center justify-center">
                <div className="w-fit mx-8 bg-black rounded-3xl p-6">
                <h2 className="text-white text-heading">AProject</h2>
                <p className="text-white text-base opacity-70">
                    AProject is a website I created during as part of a university course. It is a tool to store information about different projects that people have created. It allows users to create, read, update and delete projects.
                </p>
                
                </div>
                <div className="relative flex gap-2 bg-black rounded-3xl max-h-[60vh] m-4 md:p-8 p-4">
                    <Image className="object-scale-down w-auto max-h-full max-w-[27%] block group-hover:opacity-40 duration-1000" alt="aproject image" src="/aproject/image3.png"  width={1000} height={1000} />
                    <div className="flex flex-col gap-2">
                    <Image className="object-scale-down w-full max-h-[49%] block group-hover:opacity-40 duration-1000" alt="aproject image" src="/aproject/image1.png"  width={1000} height={1000} />
                    <Image className="object-scale-down w-full max-h-[49%] block group-hover:opacity-40 duration-1000" alt="aproject image" src="/aproject/image2.png"  width={1000} height={1000}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}