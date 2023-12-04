import PostPrevElement from "./PostPrevElement";
import SectionHeading from "./SectionHeading";
import { allDocs } from "@/.contentlayer/generated";
import { parseTags } from "@/helpers";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

async function getLatestPosts() {
  const posts = allDocs;

  if (!posts) null;

  return posts;
}

export default async function LatestPosts() {
  const latestArticles = await getLatestPosts();

  return (
    <div className="py-32" id="latestposts">
      <SectionHeading title="Latest Articles" />
      <div className="flex flex-col gap-8 ">
        {latestArticles &&
          latestArticles.map((article) => (
            <PostPrevElement
              key={article.slug}
              image={article.smallthumbnail}
              title={article.title}
              description={`${article.description?.slice(0, 112)}...`}
              tags={parseTags(article.tags)}
              link={article.slug}
            />
          ))}
      </div>
      <Link
        href="/blog"
        className="group/seemore flex gap-1 mt-8 items-center "
      >
        <h3 className="text-emerald-400 font-semibold">See more articles</h3>
        <div className="w-4 h-4 overflow-hidden ">
          <ArrowRight className="w-4 h-4 text-emerald-400 transition-transform -translate-x-4 group-hover/seemore:translate-x-0" />
        </div>
      </Link>
    </div>
  );
}
