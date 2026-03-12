import Image from "next/image"
import Link from 'next/link';
import { Navbar } from '../nav'


export default function Fyp() {
  return (
    <>
    <Navbar name={""} />
    <div className="bg-whiteBg flex gap-8 min-h-screen w-full md:w-[70vw] fixed top-0 right-0 bottom-0 flex-col items-center justify-center p-4">
        <p className="text-black text-base md:w-3/4">
            This is my final year project for computer science at university. The aim of the project was to create a project management tool for game developers, specifically targeted towards newer developers and small teams. I carried out all stages of SDLC, requirements, design, development, evaluation. The website allows users to create projects, draw ideas on a whiteboard, track tasks, and store relevant files.
        </p>
        <div className="relative flex gap-2 bg-gradient-to-r from-gradTop to-gradBottom text-white max-h-[60vh] m-4 p-4">
            <Image className="object-scale-down w-auto h-full max-w-[27%] block group-hover:opacity-40 duration-1000" alt="Fyp image" src="/fyp/image3.png"  width={1000} height={1000} />
            <div className="flex flex-col gap-2">
            <Image className="object-scale-down w-full max-h-[49%] block group-hover:opacity-40 duration-1000" alt="Fyp image" src="/fyp/image1.png"  width={1000} height={1000} />
            <Image className="object-scale-down w-full max-h-[49%] block group-hover:opacity-40 duration-1000" alt="Fyp image" src="/fyp/image2.png"  width={1000} height={1000}/>
            </div>
        </div>
    </div>
    </>
)}