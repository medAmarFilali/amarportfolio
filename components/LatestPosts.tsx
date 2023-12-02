import PostPrevElement from "./PostPrevElement";
import postGisImage from "../public/images/postgisimage.jpg";
import wpApiCall from "../public/images/wpapicall.png";

export default function LatestPosts() {
  return (
    <div className="py-32 flex flex-col gap-8 ">
      <PostPrevElement
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
        title="Creating secure endpoint in wordpress"
        description="Creating Wordpress endpoints is so easy but securing them is the hardest task, in this post we'll discover the best ways to secure our endpoints..."
      />
    </div>
  );
}
