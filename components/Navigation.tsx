import Link from "next/link";

export default function Navigation() {
  return (
    <div className="mt-16 hidden md:flex flex-col">
      <Link href="#bio">
        <div className="text-sm font-semibold mb-2 cursor-pointer text-slate-100">
          About
        </div>
      </Link>
      <Link href="#latestposts">
        <div className="text-sm font-semibold mb-2 cursor-pointer text-slate-400  ">
          Articles
        </div>
      </Link>
      <Link href="#projects">
        <div className="text-sm font-semibold mb-2 cursor-pointer text-slate-400  ">
          Projects
        </div>
      </Link>
      <Link href="#experience">
        <div className="text-sm font-semibold mb-2 cursor-pointer text-slate-400  ">
          Experience
        </div>
      </Link>
      <Link href="/blog">
        <div className="text-sm font-semibold mb-2 cursor-pointer text-slate-400  ">
          Blog
        </div>
      </Link>
    </div>
  );
}
