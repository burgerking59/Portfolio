import Link from "next/link"
import Image from "next/image"

export default function page() {
    return (
        <main className="flex min-h-screen flex-col items-center  p-4">
            <h2 className="text-blue text-2xl font-semibold">Flippin Pages</h2>
            <div className="bg-black p-8 text-white mt-16 text-center">
            This was a team project that was set by Aston university. The project involved creating a Ecommerce website, our team decided to create a website to sell books in various foreign languages. My role was primarily backend development using Laravel to retrieve items from the database and pass them to the users, and create an admin system that used a guard to only allow authorized users access. 
            <ul className="relative flex justify-evenly w-full mt-8">
                <div className="relative h-32 w-1/3">
                <Image className="" src="/flippinpages1.png" objectFit="contain" fill alt="Final year project image 1"/>
                </div>
                <div className="relative h-32 w-1/3">
                <Image className="" src="/flippinpages2.png" objectFit="contain" fill alt="Final year project image 2"/>
                </div>
                <div className="relative h-32 w-1/3">
                <Image className="" src="/flippinpages3.png" objectFit="contain" fill alt="Final year project image 3"/>
                </div>
            </ul>
            </div>
            
            <ul className="flex justify-evenly w-full mt-16">
            <Link href="/">
            <li className="bg-black text-white p-4 hover:opacity-80 duration-1000">
                Home
            </li>
            </Link>
            <Link href="https://github.com/burgerking59/UniPortfolio3">
            <li className="bg-black text-white p-4 hover:opacity-80 duration-1000">
                Github
            </li>
            </Link>
            </ul>
        </main>
    )
}