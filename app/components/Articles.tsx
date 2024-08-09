"use client";
import { useQuery } from "@tanstack/react-query";

import getArticles from "../api/getArticles";
import { SkeletonExperience } from "./Loading";
import Image from "next/image";
import clsx from "clsx";

export default function Articles() {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getArticles(),
    queryKey: ["articles"],
  });

  if (isLoading) return <SkeletonExperience />;
  if (isError) return <div>Sorry There was an Error</div>;

  const articles: any[] = data?.data || [];
  return (
    <section id="article" className="mx-auto max-w-5xl px-4">
      <div className="text-xl lg:text-4xl text-brand-gray font-bold">
        Articles
      </div>
      <div className="text-base lg:text-2xl text-brand-gray">
        Our curated writings, offering something for every reader.
      </div>

      <ul className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6 mb-20">
        {articles.map((article, index) => (
          <li
            key={article.id}
            className={clsx(
              "w-full flex flex-col",
              index === 0 && "lg:col-span-2 lg:row-span-2"
            )}
          >
            <div className="w-full h-full">
              <img
                src={article.featured_image}
                alt={article.title}
                className="h-full"
              />
            </div>
            <div className="bg-brand-gray text-brand-white font-bold px-4 py-6">
              <div className="line-clamp-2">{article.title}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
