import Image from "next/image"
import Link from 'next/link';
import { Navbar } from '../nav'


export default function Projects() {
  return (
    <div className="overflow-y-scroll h-screen">
    <Navbar name={"process"} />
    <main className="bg-white text-text px-8 gap-1 sm:gap-5 items-center justify-center flex min-h-screen w-full md:w-[70vw] md:absolute md:top-0 md:right-0  flex-col items-center">
      
      <div className="flex h-full">
        <div className="flex flex-col mt-4 gap-1 sm:gap-4 h-full justify-between">
          <div className=" rounded-xl myShadow h-full align-middle items-center flex  w-full bg-black p-1 md:p-8">
          <p className="text-white opacity-70 text-base">
            This is the standard process I use to design and create a website.  I have developed this over several years of creating websites personally and academically, learning and improving each time.
          </p>
          </div>
          <div className="items-center myShadow rounded-xl h-full flex  w-full bg-black p-1 sm:p-8">
          <Image alt="Github logo" src="/figmaLogo.png" className="w-[15%] sm:w-[10%] md:w-[5%] mr-4" width={1000} height={1000} objectFit="contain"/>
          <p className="text-white opacity-70 text-base">
            To design the websites I use Figma, starting with a few wireframes to try different layouts and understand what works best for the content. I then add colour and fonts to the layout and test different options. 
          </p>
          </div>
          <div className="items-center myShadow rounded-xl h-full flex  w-full bg-black p-1 sm:p-8">
          <Image alt="Github logo" src="/reactLogo.png" className="w-[15%] sm:w-[10%] md:w-[5%] mr-4" width={1000} height={1000} objectFit="contain"/>
          <p className="text-white opacity-70 text-base">
            Once the design is complete I move to react and create any functionality using javascript. 
          </p>
          </div>
          <div className="items-center myShadow rounded-xl h-full flex  w-full bg-black p-1 sm:p-8">
          <Image alt="Github logo" src="/tailwindLogo.png" className="w-[15%] sm:w-[10%] md:w-[5%] mr-4" width={1000} height={1000} objectFit="contain"/>
          <p className="text-white opacity-70 text-base">
            Finally, I add the design using tailwind and ensure it is responsive, testing on three different screen sizes (phone, laptop and desktop).   
          </p>
          </div>
        </div>
      </div>
    </main>
    </div>
  )
}