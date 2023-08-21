import Image from "next/image"
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-4">
      <div className="bg-black p-8">
        <h1 className="text-white text-4xl font-semibold">Oliver Burnett-Kiernan</h1>
      </div>

      <div className="mt-16 text-center">
        <div className="bg-white p-8">
          <h2 className="text-blue text-2xl font-semibold">I design interesting and functional websites.</h2>
        </div>
        <div className="bg-black p-8">
          <p className="text-white text-center">
            I am a very mathematical and logical person and interested in understanding how everything works.
            I enjoy programming and often add to my projects and 
            learn new skills and languages in my spare time.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center w-full">
        <h2 className="text-blue text-2xl font-semibold p-8">Projects</h2>
        <div className="flex flex-col w-full md:p-32 bg-black">
          <div className="p-16">
            <Link href="/netmatters">
              <Image className="w-full hover:opacity-50 duration-1000" src="/netmatters.png" width={1000} height={1000} alt="Solar charging project"/>
            </Link>
          </div>
          <div className="p-16">
            <Link href="/aproject">
            <Image className="w-full hover:opacity-50 duration-1000" src="/AProject.png" width={1000} height={1000} alt="AProject website"/>
            </Link>
          </div>
          <div className="p-16">
            <Link href="/unlock">
            <Image className="w-full hover:opacity-50 duration-1000" src="/unlock.png" width={1000} height={1000} alt="Unlock game project"/>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center w-full">
        <h2 className="text-blue text-2xl font-semibold p-8">Contact</h2>
        <div className="w-full md:p-16 bg-black p-4">
          <div className="flex flex-col text-white gap-4">
            <label>Email: oliverbk4@gmail.com</label>
            <label>Phone Number: 07483228207</label>
          </div>
          <div className="flex justify-evenly">
            <Link className="p-4 md:p-8" href="https://www.linkedin.com/in/oliver-burnett-kiernan-6224a9210/">
              <Image className="w-1/2 m-auto hover:opacity-50 duration-1000" src="/linkedin.png" width={1000} height={1000} alt="Linkedin icon"/>
            </Link>
            <Link className="p-4 md:p-8" href="https://burgerking404.itch.io/">
              <Image className="w-1/2 m-auto hover:opacity-50 duration-1000" src="/itchiologo.png" width={1000} height={1000} alt="Linkedin icon"/>
            </Link>
            <Link className="p-4 md:p-8" href="https://github.com/burgerking59">
              <Image className="w-1/2 m-auto bg-white hover:opacity-50 duration-1000" src="/github.png" width={1000} height={1000} alt="Linkedin icon"/>
            </Link>
          </div>
        </div>
      </div>

    </main>
  )
}
