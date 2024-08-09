"use client";

import { useQuery } from "@tanstack/react-query";

import getIteneraries from "../api/getIteneraries";
import { SkeletonExperience } from "./Loading";
import imgSeparatorLux from "../assets/img-separator-lux.svg";
import Image from "next/image";
import Footage from "./Footage";

export default function LuxuryFootage() {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getIteneraries(),
    queryKey: ["itineraries"],
  });

  if (isLoading) return <SkeletonExperience />;
  if (isError) return <div>Sorry There was an Error</div>;

  const iteneraries: any[] = data?.data || [];
  return (
    <section className="bg-[#D6B66B] w-full py-8 lg:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-6xl lg:text-7xl mb-6">Luxury Footages</div>
        {/* @todo: carousel image on hover */}
        <ul className="hidden lg:flex my-6 gap-6">
          {iteneraries.map((itinerary) => (
            <Footage
              key={itinerary.itinerary_id}
              img={itinerary.related_galleries[0].src}
              name={itinerary.related_galleries[0].title}
            />
          ))}
        </ul>
        <Image
          src={imgSeparatorLux}
          alt=""
          className="hidden lg:inline-block w-full"
        />
        <ul className="hidden lg:flex flex-row-reverse my-6 gap-6">
          {iteneraries.map((itinerary) => (
            <Footage
              key={itinerary.itinerary_id}
              img={itinerary.related_galleries[0].src}
              name={itinerary.related_galleries[0].title}
            />
          ))}
        </ul>

        <div className="block lg:hidden">
          <Footage
            key={iteneraries[0].itinerary_id}
            img={iteneraries[0].related_galleries[0].src}
            name={iteneraries[0].related_galleries[0].title}
          />
        </div>
      </div>
    </section>
  );
}
