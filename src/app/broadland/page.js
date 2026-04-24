import Image from "next/image"
import Link from 'next/link';
import { Navbar } from '../nav'


export default function Broadland() {
  return (
    <>
    <Navbar name={""} />
    <div className="bg-white flex gap-4 min-h-screen w-full md:w-[70vw] fixed top-0 right-0 bottom-0 flex-col items-center justify-center">
        <div className="w-fit mx-8 bg-black rounded-3xl p-6">
        <p className="text-white text-base ">
            Broadland cycle hire is a local business that I have worked at for a few years. The old website wasn't responsive, so I redesigned the website to improve the design, colours and responsive. The website was made using Wordpress and designed in Figma.
        </p>
        <Link className="flex duration-1000 items-center justify-center border hover:bg-white hover:text-black border-lightBlue w-fit p-2 rounded-full mt-2 group" href='https://norfolkbroadscycling.co.uk/'>
        <h2 className="text-white group-hover:text-black">View website</h2>
        </Link>
        </div>
        <div className="relative flex gap-2 bg-black rounded-3xl max-h-[60vh] m-4 md:p-8 p-4">
            <Image className="object-scale-down w-auto h-full max-w-[27%] block group-hover:opacity-40 duration-1000" alt="Broadland cycle hire image" src="/broadland/image3.png"  width={1000} height={1000} />
            <div className="flex flex-col gap-2">
            <Image className="object-scale-down w-full max-h-[49%] block group-hover:opacity-40 duration-1000" alt="Broadland cycle hire image" src="/broadland/image1.png"  width={1000} height={1000} />
            <Image className="object-scale-down w-full max-h-[49%] block group-hover:opacity-40 duration-1000" alt="Broadland cycle hire image" src="/broadland/image2.png"  width={1000} height={1000}/>
            </div>
        </div>
    </div>
    </>
)}