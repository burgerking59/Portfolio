import Link from "next/link"

export default function page() {
    return (
        <main className="flex min-h-screen flex-col items-center  p-4">
            <h2 className="text-blue text-2xl font-semibold">Unlock</h2>
            <div className="bg-black p-8 text-white mt-16 text-center">
            This is a game I uploaded to the GMTK GameJam. I had 48 hours to make a game that fit the theme of roles reversed. I used pygame to code this and piskel to design the assets.
            </div>
            <ul className="flex justify-evenly w-full mt-16">
            <Link href="/">
            <li className="bg-black text-white p-4">
                Home
            </li>
            </Link>
            <Link href="https://burgerking404.itch.io/unlock">
            <li className="bg-black text-white p-4">
                Live Demo
            </li>
            </Link>
            <Link href="https://github.com/burgerking59/unlock">
            <li className="bg-black text-white p-4">
                Github
            </li>
            </Link>
            </ul>
        </main>
    )
}
