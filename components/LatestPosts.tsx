import PostPrevElement from "./PostPrevElement";
import postGisImage from "../public/images/postgisimage.jpg";
import wpApiCall from "../public/images/wpapicall.png";
import SectionHeading from "./SectionHeading";
import { allDocs } from "@/.contentlayer/generated";
import { parseTags } from "@/helpers";

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
      <div className=" flex flex-col gap-8 ">
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
    </div>
  );
}
