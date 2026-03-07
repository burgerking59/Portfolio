'use client';

import Image from "next/image"
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { About } from './about/page'

export function Navbar() {
    const [isHidden, setIsHidden] = useState(true)
    function toggleMenu() {
        console.log(isHidden)
    setIsHidden(!isHidden)
  }

  return (
    <BrowserRouter>
    <div data-state={isHidden ? "show" : "hidden"} className='md:left-0 max-md:data-[state=hidden]:left-[-100%] data-[state=show]:left-0  duration-1000 flex flex-col fixed top-0 bottom-0 md:w-[30vw] justify-between md:px-0 px-8 py-8 items-center w-full bg-gradient-to-r from-gradTop to-gradBottom text-white'>
        <button onClick={toggleMenu}  className='data-[state=hidden]:bg-black data-[state=show]:bg-white data-[state=hidden]:text-white data-[state=show]:text-black md:hidden  text-black font-black fixed top-0 left-0 p-3 py-8' data-state={isHidden ? "show" : "hidden"}>//</button>

        <h1 className='text-title font-black text-center tracking-wider'>Oliver Burnett-Kiernan</h1>
        <div className='flex flex-col'>
            <NavButton linkName={"About Me"} linkTo={"/about"}/>
            <NavButton linkName={"Projects"} linkTo={"/projects"} />
            <NavButton linkName={"My Process"} linkTo={"/process"} />
        </div>
        <div>
        <h2 className='text-heading text-center'>Email</h2>
        <h2 className='text-heading'>oliverbk4@gmail.com</h2>
        </div>
        <div className="flex w-full justify-around">
        <a className="block w-15 h-15"><Image src="/githubLogo.png" className="w-14 h-14 xl:w-16 xl:h-16" width={1000} height={1000} objectFit="contain"/></a>
        <a className="block w-15 h-15"><Image src="/linkedin.png" className="w-14 h-14 xl:w-16 xl:h-16" width={1000} height={1000} objectFit="contain"/></a>
        </div>
    </div>

    <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<About />} />
        <Route path="/processs" element={<About />} />
    </Routes>
    </BrowserRouter>
)}

const NavButton = ({linkName, linkTo}) => {
    return (
        <Link to={linkTo} className='duration-1000 active:border-t-yellow active:border-l-yellow active:border-yellow hover:border-t-yellow hover:border-l-yellow hover:border-buttonBorder hover:cursor-pointer border-4 border-yellow border-t-buttonBorder border-l-buttonBorder text-heading text-center p-2 px-6 m-4 bg-gradient-to-r from-gradTop to-gradBottom'>{linkName}</Link>
    )
}