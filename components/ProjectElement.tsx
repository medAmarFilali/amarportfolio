import Image from "next/image";
import type { StaticImageData } from "next/image";
import Chip from "./Chip";

export default function ProjectElement({ image }: { image: StaticImageData }) {
  return (
    <div className="mb-12 cursor-pointer">
      <div className="group relative flex flex-wrap gap-4 pb-1 transition-all sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 ">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gradient-to-t from-slate-300/10 to-slate-300/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="w-full md:w-1/4 overflow-hidden rounded-md h-full md:h-20 border-2 border-slate-600 z-10   ">
          <Image src={image} alt="wigoadventures" />
        </div>
        <div className="flex-1 z-10 ">
          <h3 className="text-lg text-emerald-400 md:text-slate-200 font-semibold mb-2 group-hover:text-emerald-400 ">
            WIGO OUTDOORS
          </h3>
          <p className="text-xs text-slate-400">
            Mobile app that helps adventures looks for their next adventure, Geo
            location, nearest adventures, adventures types (Camping, hiking,
            biking...etc), Coachs Mobile app included with payment management
            and google maps integration
          </p>
          <div className="flex flex-row gap-2 mt-4 flex-wrap ">
            <Chip text="React native" />
            <Chip text="Redux" />
            <Chip text="expo" />
            <Chip text="Supabase" />
            <Chip text="PostGIS" />
          </div>
        </div>
      </div>
    </div>
  );
}
