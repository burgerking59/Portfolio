import Image from "next/image"
import Link from 'next/link';
import { Navbar } from '../nav'


export default function Projects() {
  return (
    <>
    <Navbar name={"process"} />
    <main className="bg-gradient-to-br from-whiteGrad1 via-whiteGrad2 to-whiteGrad1 text-text gap-6 items-center justify-center flex min-h-screen w-full md:w-[70vw] fixed top-0 right-0 bottom-0 flex-col items-center">
      <p className="text-black text-base w-full border-t-buttonBorder border-t-[1px] border-b-[1px] border-b-buttonBorder p-1 md:p-4">
        This is the standard process I use to design and create a website.  I have developed this over several years of creating websites personally and academically, learning and improving each time.
      </p>
      <div className="flex">
        <div className="flex flex-col max-w-[20vw] md:max-w-[10vw] mt-4 gap-8 md:gap-20 md:p-4 h-full xl:p-8 bg-gradient-to-r from-black to-gradBottom justify-between items-center p-2">
          <div className="h-full m-2 items-center justify-center flex">
            <Image alt="Github logo" src="/figmaLogo.png" className="w-auto h-auto" width={1000} height={1000} objectFit="contain"/>
          </div>
          <div className="h-full m-2 items-center justify-center flex">
            <Image alt="Github logo" src="/reactLogo.png" className="w-auto h-auto" width={1000} height={1000} objectFit="contain"/>
          </div>
          <div className="h-full m-2 items-center justify-center flex">
            <Image alt="Github logo" src="/tailwindLogo.png" className="w-auto h-auto" width={1000} height={1000} objectFit="contain"/>
          </div>
        </div>
        <div className="flex flex-col mt-4 gap-8 lg:gap-20 h-full justify-between">
          <div className="items-center h-full flex  w-full border-t-buttonBorder border-t-[1px] border-b-[1px] border-b-buttonBorder p-1 md:p-4">
          <p className="text-black text-base">
            To design the websites I use Figma, starting with a few wireframes to try different layouts and understand what works best for the content. I then add colour and fonts to the layout and test different options. 
          </p>
          </div>
          <div className="items-center h-full flex  w-full border-t-buttonBorder border-t-[1px] border-b-[1px] border-b-buttonBorder p-1 md:p-4">
          <p className="text-black text-base">
            Once the design is complete I move to react and create any functionality using javascript. 
          </p>
          </div>
          <div className="items-center h-full flex  w-full border-t-buttonBorder border-t-[1px] border-b-[1px] border-b-buttonBorder p-1 md:p-4">
          <p className="text-black text-base">
            Finally, I add the design using tailwind and ensure it is responsive, testing on three different screen sizes (phone, laptop and desktop).   
          </p>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}