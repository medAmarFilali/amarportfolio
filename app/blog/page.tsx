import { allDocs } from "@/.contentlayer/generated";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

async function getDocs() {
  const articles = allDocs;

  if (!articles) null;

  return articles;
}

export default async function BlogPage() {
  const articles = await getDocs();

  console.log("DOCS: ", articles);

  return (
    <div className="flex flex-col px-6 py-12 md:px-12 md:py-20 lg:px-44 lg:py-12 max-w-screen-xl min-h-screen mx-auto">
      <SectionHeading title="Blog" />
      <div className="flex gap-12">
        {articles &&
          articles.map((article) => (
            <Link
              href={`./${article.slug}`}
              key={article.slug}
              className="relative group w-full md:w-1/2"
            >
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gradient-to-t from-slate-300/10 to-slate-300/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="border-4 border-slate-800 rounded-lg mb-4 "
                />
                <h3 className="text-xl text-emerald-400 font-semibold mb-2 ">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-300 ">{article.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
