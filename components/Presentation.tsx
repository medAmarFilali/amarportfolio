import Image from "next/image";
import amarImage from "../public/images/mohamedamarfilali.jpg";
import { Github, Linkedin } from "lucide-react";

export default function Presentation() {
  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 ">
      <div>
        <div className="w-32 h-32 overflow-hidden rounded-full mb-4 opacity-80 ">
          <Image src={amarImage} alt="Mohamed Amar FILALI" />
        </div>
        <h1 className="text-4xl text-slate-200 font-bold tracking-tight sm:text-4xl ">
          Amar Mohamed Filali
        </h1>
        <p className="text-lg font-semibold text-slate-300 mt-2  ">
          Experienced Front-End developer
        </p>
        <p className="font-regular text-slate-400 mt-4 ">
          A graphic design turned Front-End developer, <br /> building awesome
          experiences for the web for 10 years.
        </p>
      </div>
      <ul className="mt-16 hidden md:flex flex-col">
        <li className="text-sm font-semibold mb-2 cursor-pointer text-slate-100 ">
          About
        </li>
        <li className="text-sm font-semibold mb-2 cursor-pointer text-slate-400  ">
          Experience
        </li>
        <li className="text-sm font-semibold mb-2 cursor-pointer text-slate-400  ">
          Projects
        </li>
        <li className="text-sm font-semibold mb-2 cursor-pointer text-slate-400  ">
          Blog
        </li>
      </ul>
      <div className="flex flex-row gap-2 mt-8">
        <div className="bg-slate-800 rounded-md p-2 hover:bg-slate-600 cursor-pointer transition-all">
          <Github className="w-6 h-6" />
        </div>
        <div className="bg-slate-800 rounded-md p-2 hover:bg-slate-600 cursor-pointer transition-all">
          <Linkedin className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
