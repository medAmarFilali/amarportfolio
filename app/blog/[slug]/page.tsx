import { Mdx } from "@/components/mdx";
import { allDocs } from "contentlayer/generated";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getDocFromParams(slug: string) {
  const article = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!article) notFound;

  return article;
}

export default async function page({ params }: { params: { slug: string } }) {
  const doc = await getDocFromParams(params.slug);

  return (
    <div>
      {doc && doc.body && doc.body.code && (
        <div className="flex flex-col px-6 py-12 md:px-12 md:py-20 lg:px-44 lg:py-12 max-w-screen-xl min-h-screen mx-auto ">
          <div className="flex px-8 justify-center mb-12">
            <h3 className="text-3xl text-emerald-400 font-semibold">
              {doc.title}
            </h3>
          </div>
          {doc.thumbnail && (
            <div className="">
              <Image
                src={doc.thumbnail}
                width={1040}
                height={200}
                alt={doc.title}
                className="rounded-xl border-4 border-slate-800"
              />
            </div>
          )}
          <div className="flex px-8 justify-center mb-12">
            <Mdx code={doc?.body.code} />
          </div>
        </div>
      )}
    </div>
  );
}
