import Image from "next/image"
import Link from 'next/link';
import { Navbar } from './nav'


export default function About() {
  return (
    <>
    <Navbar name={"about"} />
    <main className="bg-whiteBg flex justify-center gap-8 md:gap-32 min-h-screen w-full md:w-[70vw] fixed top-0 right-0 bottom-0 flex-col items-center  p-4">
      <div className="bg-gradient-to-r from-gradTop to-gradBottom">
        <h1 className="text-text text-white font-black text-4xl p-8 md:p-16 tracking-wider">Oliver Burnett-Kiernan</h1>
      </div>
      <div className="md:mx-24 flex flex-col gap-4 justify-center ">
      <h2 className="text-text font-black text-2xl tracking-wider w-fit">I create professional frontend websites</h2>
      <p className="text-black text-base">
            I am a recent computer science graduate, with experience designing and creating various types of website for personal and academic projects. I always ensure my websites are completely functional and responsive to provide a positive user experience.
      </p>
      </div>
    </main>
    </>
  )
}
