import { allDocs } from "@/.contentlayer/generated";
import Chip from "@/components/Chip";
import SectionHeading from "@/components/SectionHeading";
import { parseTags } from "@/helpers";
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
      <div className="flex gap-12 flex-wrap">
        {articles &&
          articles.map((article) => {
            const tagsArray = parseTags(article.tags);
            return (
              <Link
                href={`./${article.slug}`}
                key={article.slug}
                className="relative group w-full h-auto"
              >
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gradient-to-t from-slate-300/10 to-slate-300/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="flex flex-col justify-between h-full">
                  <div className="flex  flex-wrap">
                    <div className="mb-1 md:mb-4 w-full md:w-1/3 pr-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={article.thumbnail}
                        alt={article.title}
                        className="border-4 border-slate-800 rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col w-full md:w-2/3 ">
                      <h3 className="text-xl text-emerald-400 font-semibold mb-2 ">
                        {article.title}
                      </h3>
                      <p className="text-sm text-slate-300 ">
                        {article.description}
                      </p>
                      <div className="flex gap-2 flex-wrap mt-2">
                        {tagsArray &&
                          tagsArray.map((tag) => <Chip key={tag} text={tag} />)}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
