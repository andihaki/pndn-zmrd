"use client";

import { CircleChevronRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import getIteneraries from "../api/getIteneraries";
import { SkeletonExperience } from "./Loading";
import Destination from "./Destination";

export default function Destinations() {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getIteneraries(),
    queryKey: ["itineraries"],
  });

  if (isLoading) return <SkeletonExperience />;
  if (isError) return <div>Sorry There was an Error</div>;

  const iteneraries: any[] = data?.data || [];
  return (
    <section id="destination" className="mx-auto max-w-5xl px-4 py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row items-start lg:items-center w-full gap-4 lg:gap-6">
        <div className="text-4xl text-brand-black">Destinations</div>
        <Button variant="ghost" className="px-0 gap-2">
          <CircleChevronRight />
          Explore more
        </Button>
      </div>
      <ul>
        {iteneraries.map((itinerary) => (
          <Destination
            galleries={itinerary.related_galleries}
            days={itinerary.itinerary_day}
            name={itinerary.itinerary_name}
            partner={itinerary.partner_name}
            description={itinerary.itinerary_short_description}
            discount={itinerary.related_variant.itinerary_variant_disc_price}
            price={itinerary.related_variant.itinerary_variant_pub_price}
            key={itinerary.itinerary_id}
          />
        ))}
      </ul>

      <ul className="flex gap-x-4 overflow-x-scroll">
        {iteneraries.map((itinerary) => (
          <Destination
            galleries={itinerary.related_galleries}
            days={itinerary.itinerary_day}
            name={itinerary.itinerary_name}
            partner={itinerary.partner_name}
            description={itinerary.itinerary_short_description}
            discount={itinerary.related_variant.itinerary_variant_disc_price}
            price={itinerary.related_variant.itinerary_variant_pub_price}
            isVertical
            key={itinerary.itinerary_id}
          />
        ))}
      </ul>

      <div className="w-full flex justify-center lg:justify-end">
        <Button
          variant="ghost"
          className="flex gap-4 text-brand-black font-bold mt-6"
        >
          <CircleChevronRight />
          Explore more
        </Button>
      </div>
    </section>
  );
}
