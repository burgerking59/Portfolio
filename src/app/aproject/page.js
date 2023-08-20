import Link from "next/link"

export default function page() {
    return (
        <main className="flex min-h-screen flex-col items-center  p-4">
            <h2 className="text-blue text-2xl font-semibold">AProject</h2>
            <div className="bg-black p-8 text-white mt-16 text-center">
            A website that displays user's projects and allows sign up and log in for users to upload their projects. I created this using laravel and bootstrap. This project was set by Aston university.
            </div>
            <ul className="flex justify-evenly w-full mt-16">
            <Link href="/">
            <li className="bg-black text-white p-4">
                Home
            </li>
            </Link>
            <Link href="https://220197139.cs2410-web01pvm.aston.ac.uk/">
            <li className="bg-black text-white p-4">
                Live Demo
            </li>
            </Link>
            <Link href="https://github.com/burgerking59/UniPortfolio3">
            <li className="bg-black text-white p-4">
                Github
            </li>
            </Link>
            </ul>
        </main>
    )
}