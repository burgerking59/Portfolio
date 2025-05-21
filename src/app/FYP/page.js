import Link from "next/link"
import Image from "next/image"

export default function page() {
    return (
        <main className="flex min-h-screen flex-col items-center  p-4">
            <h2 className="text-blue text-2xl font-semibold">Final Year Project</h2>
            <div className="bg-black p-8 text-white mt-16 text-center">
                This is my final year project for computer science at university. The aim of the project was to create a project management tool for game developers, specifically targeted towards newer developers and small teams. I carried out all stages of SDLC, requirements, design, development, evaluation. The website allows users to create projects, draw ideas on a whiteboard, track tasks, and store relevant files.
            <ul className="relative flex justify-evenly w-full mt-8">
                <div className="relative h-32 w-1/3">
                <Image className="" src="/FYP1.png" objectFit="contain" fill alt="Final year project image 1"/>
                </div>
                <div className="relative h-32 w-1/3">
                <Image className="" src="/FYP3.png" objectFit="contain" fill alt="Final year project image 2"/>
                </div>
                <div className="relative h-32 w-1/3">
                <Image className="" src="/FYP2.png" objectFit="contain" fill alt="Final year project image 3"/>
                </div>
            </ul>
            </div>
            
            <ul className="flex justify-evenly w-full mt-16">
            <Link href="/">
            <li className="bg-black text-white p-4">
                Home
            </li>
            </Link>
            <Link href="https://github.com/burgerking59/finalYearProject">
            <li className="bg-black text-white p-4">
                Github
            </li>
            </Link>
            </ul>
        </main>
    )
}