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
              image={article.thumbnail}
              title={article.title}
              description={`${article.description?.slice(0, 112)}...`}
              tags={parseTags(article.tags)}
              link={article.slug}
            />
          ))}

        {/* <PostPrevElement
          image={postGisImage}
          tags={["PostgreSQL", "PostGIS", "Edge Functions"]}
          title="GeoQueries with PostGIS"
          description="Making geoQueries have never been easier with PostGIS, a PostgreSQL
        extension that make GeoQueries easier when you know how to use it, in
        this post we'll discover how to add fetch locations using
        PostgreSQL functions..."
        />
        <PostPrevElement
          image={wpApiCall}
          tags={["Wordpress", "PHP", "API"]}
          title="Best way to create secure endpoints in wordpress"
          description="Creating Wordpress endpoints is so easy but securing them is the hardest task, in this post we'll discover the best ways to secure our endpoints..."
        /> */}
      </div>
    </div>
  );
}
