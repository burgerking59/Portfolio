import Link from "next/link"

export default function page() {
    return (
        <main className="flex min-h-screen flex-col items-center  p-4">
            <h2 className="text-blue text-2xl font-semibold">Solar Charging Project</h2>
            <div className="bg-black p-8 text-white mt-16 text-center">
                This is a project I was set by a software company called Netmatters. It was a real project that they worked on. It takes in information about six electric cars and displays a schedule for how to charge them using solar panels. If it can't charge them using just the solar panels then it uses the mains electricity.
            </div>
            <ul className="flex justify-evenly w-full mt-16">
            <Link href="/">
            <li className="bg-black text-white p-4">
                Home
            </li>
            </Link>
            <Link href="https://burgerking59.github.io/Solar-charging-project/">
            <li className="bg-black text-white p-4">
                Live Demo
            </li>
            </Link>
            <Link href="https://github.com/burgerking59/Solar-charging-project">
            <li className="bg-black text-white p-4">
                Github
            </li>
            </Link>
            </ul>
        </main>
    )
}