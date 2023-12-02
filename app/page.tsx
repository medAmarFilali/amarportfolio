import Presentation from "@/components/Presentation";
import SideContent from "@/components/SideContent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-between px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 max-w-screen-xl min-h-screen mx-auto">
      <div className="lg:flex lg:justify-between lg:gap-4 ">
        <Presentation />
        <SideContent />
      </div>
    </main>
  );
}
