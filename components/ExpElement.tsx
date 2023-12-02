import Image from "next/image";
import type { StaticImageData } from "next/image";
import Chip from "./Chip";

export default function ExpElement({
  year,
  title,
  description,
  tags,
  company,
}: {
  year: string;
  title: string;
  description: string;
  tags?: string[] | null;
  company?: string | null;
}) {
  return (
    <div className="mb-12 cursor-pointer">
      <div className="group relative flex flex-wrap gap-4 pb-1 transition-all sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 ">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gradient-to-t from-slate-300/10 to-slate-300/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="w-full md:w-1/4 overflow-hidden rounded-md z-10">
          <p className="text-sm text-slate-400">{year}</p>
        </div>
        <div className="flex-1 z-10">
          <div className="mb-2">
            <h3 className="text-lg text-emerald-400 md:text-slate-200 font-semibold group-hover:text-emerald-400 leading-none mb-1 ">
              {title}
            </h3>
            {company && (
              <h4 className="text-sm text-slate-400 font-semibold">
                {company}
              </h4>
            )}
          </div>
          <p className="text-xs text-slate-400">{description}</p>
          <div className="flex flex-row gap-2 mt-4 flex-wrap ">
            {tags && tags.map((tag) => <Chip key={tag} text={tag} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
