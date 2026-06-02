import Image from "next/image"
import Link from 'next/link';
import { Navbar } from '../nav'


export default function Broadland() {
  return (
    <div className="overflow-y-scroll h-screen">
        <Navbar name={""} />
        <div className="bg-white pt-2 flex  min-h-screen w-full md:w-[70vw] md:absolute md:top-0 md:right-0 ">
            <div className="flex gap-8 flex-col items-center justify-center">
                <div className="w-fit mx-8 bg-black myShadow rounded-3xl p-6">
                <h2 className="text-white text-heading">Broadland Cycle Hire</h2>
                <p className="text-white text-base opacity-70">
                    Broadland cycle hire is a local business that I have worked at for a few years. The old website wasn't responsive, so I redesigned the website to improve the design, colours and functionality. The website was made using Wordpress and designed in Figma.
                </p>
                <Link className="flex inset duration-1000 items-center border border-2 border-lightBlue justify-center hover:bg-black hover:text-white bg-white w-fit p-2 rounded-full mt-2 group" href='https://norfolkbroadscycling.co.uk/'>
                <h3 className="duration-1000 text-black group-hover:text-white">View website</h3>
                </Link>
                </div>
                <div className="relative flex gap-2 bg-black myShadow rounded-3xl max-h-[60vh] m-4 md:p-8 p-4">
                    <Image className="object-scale-down w-auto max-h-full max-w-[27%] block group-hover:opacity-40 duration-1000" alt="Broadland cycle hire image" src="/broadland/image3.png"  width={1000} height={1000} />
                    <div className="flex flex-col gap-2">
                    <Image className="object-scale-down w-full max-h-[49%] block group-hover:opacity-40 duration-1000" alt="Broadland cycle hire image" src="/broadland/image1.png"  width={1000} height={1000} />
                    <Image className="object-scale-down w-full max-h-[49%] block group-hover:opacity-40 duration-1000" alt="Broadland cycle hire image" src="/broadland/image2.png"  width={1000} height={1000}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}