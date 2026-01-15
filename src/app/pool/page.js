import Link from "next/link"
import Image from "next/image"


export default function page() {
    return (
        <main className="flex min-h-screen flex-col  items-center  p-4">
            <h2 className="text-blue text-2xl font-semibold">The Pool Game</h2>
            <div className="bg-black p-8 text-white mt-16 text-center">
            This is my first completed and released game on steam. It is a multiplayer pool game that allows players to host and join lobbies. I created all the 3D assets and the trailer in blender, the 2D assets in figma and programmed the game in Godot. 
            <ul className="relative flex max-md:flex-col justify-evenly w-full mt-8">
                <div className="relative h-32 w-full m-2 md:w-1/3">
                <Image className="" src="/pool1.png" objectFit="contain" fill alt="Final year project image 1"/>
                </div>
                <div className="relative h-32 w-full m-2 md:w-1/3">
                <Image className="" src="/pool2.png" objectFit="contain" fill alt="Final year project image 2"/>
                </div>
                <div className="relative h-32 w-full m-2 md:w-1/3">
                <Image className="" src="/pool3.png" objectFit="contain" fill alt="Final year project image 3"/>
                </div>
            </ul>
            </div>
            <ul className="flex justify-evenly w-full mt-16">
            <Link href="/">
            <li className="bg-black text-white p-4 hover:opacity-80 duration-1000">
                Home
            </li>
            </Link>
            <Link href="https://store.steampowered.com/app/3886800/The_Pool_Game/">
            <li className="bg-black text-white p-4 hover:opacity-80 duration-1000">
                Steam
            </li>
            </Link>
            </ul>
        </main>
    )
}
