'use client';

import Image from "next/image"
import { useState } from "react";
import Link from 'next/link'

export function Navbar({name}) {
    const [isHidden, setIsHidden] = useState(false)
    function toggleMenu() {
        console.log(isHidden)
    setIsHidden(!isHidden)
  }

  return (
    <>
    <div data-state={isHidden ? "show" : "hidden"} className='z-40 md:left-0 max-md:data-[state=hidden]:left-[-100%] data-[state=show]:left-0  duration-1000 flex flex-col fixed top-0 bottom-0 md:w-[30vw] justify-between md:px-0 px-8 py-8 items-center w-full bg-black text-white'>
        <button onClick={toggleMenu}  className='data-[state=hidden]:hidden md:hidden fixed top-0 left-0 h-[12vh]' data-state={isHidden ? "show" : "hidden"}>
            <Image alt="Logo" src="/tabOpened.png" className="w-full h-full" width={1000} height={1000} objectFit="contain"/>
        </button>
        <button onClick={toggleMenu}  className=' data-[state=show]:hidden md:hidden fixed top-0 left-0 h-[12vh]' data-state={isHidden ? "show" : "hidden"}>
            <Image alt="Logo" src="/tabClosed.png" className="w-full h-full" width={1000} height={1000} objectFit="contain"/>
        </button>

        <div className="w-auto h-[20%]">
        <Image alt="Logo" src="/logo.png" className="w-full h-full" width={1000} height={1000} objectFit="contain"/>
        </div>
        <div className='flex flex-col'>
            <NavButton linkName={"About Me"} linkTo={"/"} name={name} id={"about"}/>
            <NavButton linkName={"Projects"} linkTo={"/projects"} name={name} id={"projects"} />
            <NavButton linkName={"My Process"} linkTo={"/process"} name={name} id={"process"} />
        </div>
        <div>
        <h2 className='text-heading text-center'>Email</h2>
        <h2 className='text-heading'>oliverbk4@gmail.com</h2>
        </div>
        <div className="flex w-full justify-around">
        <Link className="block w-[15%] h-auto" href='https://github.com/burgerking59'>
            <Image alt="Github logo" src="/githubLogo.png" className="w-full h-auto hover:opacity-50 duration-1000" width={1000} height={1000} objectFit="contain"/>
        </Link>
        <Link className="block w-[15%] h-auto" href='https://www.linkedin.com/in/oliver-burnett-kiernan-6224a9210/'>
            <Image alt="Linkedin logo" src="/linkedin.png" className="w-full h-auto hover:opacity-50 duration-1000" width={1000} height={1000} objectFit="contain"/>
        </Link>
        </div>
    </div>

    </>
)}

const NavButton = ({linkName, linkTo, name, id}) => {
    return (
        <>
        {name != id ? (
            <Link href={linkTo} className='duration-1000 hover:border-t-yellow hover:border-l-yellow hover:border-buttonBorder hover:cursor-pointer border-4 border-yellow border-t-buttonBorder border-l-buttonBorder text-heading text-center p-2 px-6 m-4 bg-gradient-to-br from-gradTop to-gradBottom'>
            {linkName}
            </Link>)
            : (
                <Link inert href={linkTo} className='transition delay-150 duration-1000 border-yellow border-4 text-heading text-center p-2 px-6 m-4 bg-gradient-to-br from-gradTop to-gradBottom'>
            {linkName}
            </Link>)
        }
        </>
    )
}
