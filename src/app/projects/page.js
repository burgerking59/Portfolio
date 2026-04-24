import Image from "next/image"
import Link from 'next/link';
import { Navbar } from '../nav'


export default function Projects() {
  return (
    <>
    <Navbar name={"projects"} />
    <main className="bg-white flex min-h-screen w-full md:w-[70vw] fixed top-0 right-0 bottom-0 flex-col items-center justify-center p-4">
      <div className="relative bg-black rounded-3xl text-white w-auto m-2 p-4 md:p-8">
          <Link className="flex items-center justify-center group" href='/broadland'>
          <Image className="w-auto max-h-[35vh] block group-hover:opacity-40 duration-1000" alt="Broadland Cylce Hire image" src="/broadland/image1.png"  width={1000} height={1000} objectFit="contain"/>
          <h2 className="absolute text-white text-heading group-hover:text-black group-hover:bg-white duration-1000 bg-black p-2 md:p-4">View Project</h2>
          </Link>
      </div>
      
      <div className="relative bg-black rounded-3xl text-white w-auto m-2 p-4 md:p-8">
          <Link className="flex items-center justify-center group" href='/aproject'>
          <Image className="w-auto max-h-[35vh] block group-hover:opacity-40 duration-1000" alt="Aproject image" src="/aproject/image1.png"  width={1000} height={1000} objectFit="contain"/>
          <h2 className="absolute text-white text-heading group-hover:text-black group-hover:bg-white duration-1000 bg-black p-2 md:p-4">View Project</h2>
          </Link>
      </div>
      
      

    </main>
    </>
  )
}