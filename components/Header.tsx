import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="sticky top-0 border-b-2 border-b-slate-800 z-50">
      <div className=" flex items-center h-16 px-6 md:px-12 lg:px-44 max-w-screen-xl mx-auto backdrop-blur-sm z-50">
        <Link href="/" className="flex gap-2 items-center">
          <ArrowLeft className="w-4 h-4 text-emerald-400" />
          <p className="text-emerald-400 font-semibold">Back to home page</p>
        </Link>
      </div>
    </div>
  );
}
