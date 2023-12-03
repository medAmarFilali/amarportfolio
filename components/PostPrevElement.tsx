import Image from "next/image";
import Chip from "./Chip";
import Link from "next/link";

export default function PostPrevElement({
  image,
  tags,
  title,
  description,
  link,
}: {
  image?: string | null | undefined;
  tags?: string[] | null;
  title: string;
  description?: string | null | undefined;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="group flex flex-col md:flex-row gap-4 relative cursor-pointer "
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gradient-to-t from-slate-300/10 to-slate-300/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt="PostGIS"
          className="w-full md:w-1/3 overflow-hidden rounded-md h-24 object-cover border-2 border-slate-800"
        />
      )}
      <div className="flex flex-col gap-2 w-full md:w-2/3">
        <h3 className="text-slate-200 font-semibold text-lg ">{title}</h3>
        <p className="text-xs text-slate-400">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {tags && tags.map((tag) => <Chip text={tag} key="tag" />)}
        </div>
      </div>
    </Link>
  );
}
