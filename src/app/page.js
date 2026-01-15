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
          <h2 className="text-blue text-2xl font-semibold">About Me</h2>
        </div>
        <div className="bg-black p-8 w-[90vw]">
          <p className="text-white text-center">
            I am a very mathematical and logical person and interested in understanding how everything works.
            I have a Bachelor's degree in computer science. In my spare time I enjoy creating websites and games to learn and develop new skills.
          </p>
          <h2 className="text-white mt-8 text-2xl">Skills</h2>
          <p className="text-white text-center mt-4">
            I have used many programming languages and can quickly learn new ones, but I mainly use JavaScript and GDscript. I have used blender to create models for games and an animation module at university. I am confident using git and github for version control.
          </p>
        </div>
      </div>



      <div className="mt-16 text-center w-full">
        <h2 className="text-blue text-2xl font-semibold p-8">Projects</h2>
        <div className="flex flex-col items-center md:p-16 w-[90vw] m-auto bg-black">
          <div className="p-8">
            <Link href="/FYP">
              <Image className="border-2 w-[55vw] border-white hover:opacity-50 duration-1000" src="/FYP1.png" width={1000} height={1000} alt="Solar charging project"/>
            </Link>
          </div>
          <div className="p-8">
            <Link href="/flippinpages">
            <Image className="border-2 w-[55vw] border-white hover:opacity-50 duration-1000" src="/flippinpages1.png" width={1000} height={1000} alt="Flippin Pages website"/>
            </Link>
          </div>
          <div className="p-8">
            <Link href="/pool">
            <Image className="border-2 w-[55vw] border-white hover:opacity-50 duration-1000" src="/pool.png" width={1000} height={1000} alt="Unlock game project"/>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center w-full">
        <h2 className="text-blue text-2xl font-semibold p-8">Contact</h2>
        <div className="w-full md:p-16 bg-black p-4 w-[90vw] m-auto">
          <div className="flex flex-col text-white gap-4">
            <label>Email: oliverbk4@gmail.com</label>
            <label>Phone Number: 07483228207</label>
          </div>
          <div className="flex justify-evenly">
            <Link className="p-1 md:p-8" href="https://www.linkedin.com/in/oliver-burnett-kiernan-6224a9210/">
              <Image className="w-1/4 m-auto hover:opacity-50 duration-1000" src="/linkedin.png" width={1000} height={1000} alt="Linkedin icon"/>
            </Link>
            <Link className="p-1 md:p-8" href="https://burgerking404.itch.io/">
              <Image className="w-1/4 m-auto hover:opacity-50 duration-1000" src="/itchiologo.png" width={1000} height={1000} alt="Linkedin icon"/>
            </Link>
            <Link className="p-1 md:p-8" href="https://github.com/burgerking59">
              <Image className="w-1/4 m-auto bg-white hover:opacity-50 duration-1000" src="/github.png" width={1000} height={1000} alt="Linkedin icon"/>
            </Link>
          </div>
        </div>
      </div>

    </main>
  )
}
