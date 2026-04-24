import Image from "next/image"
import Link from 'next/link';
import { Navbar } from './nav'


export default function About() {
  return (
    <>
    <Navbar name={"about"} />
    <main className="bg-white flex justify-center gap-8 md:gap-32 min-h-screen w-full md:w-[70vw] fixed top-0 right-0 bottom-0 flex-col items-center ">
      <div className="bg-black rounded-3xl">
        <h1 className="text-text text-white font-black text-4xl p-8 md:p-16 tracking-wider">Oliver Burnett-Kiernan</h1>
      </div>
      <div className="md:mx-24 w-fit p-2 md:px-24 md:py-12 rounded-3xl flex flex-col gap-4 justify-center bg-black">
        <h2 className="text-white font-black text-2xl tracking-wider w-fit">I design and create frontend websites</h2>
        <p className="text-white text-base font-light">
              I am a recent computer science graduate, with experience designing and creating various types of website for personal and academic projects. I always ensure my websites are completely functional and responsive to provide a positive user experience.
        </p>
      </div>
    </main>
    </>
  )
}
