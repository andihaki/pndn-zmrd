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
    <section
      id="destinations"
      className="mx-auto max-w-5xl px-4 my-12 lg:my-20"
    >
      <div className="flex items-center w-full">
        <div className="text-4xl text-brand-black">Destinations</div>
        <Button variant="ghost">
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

      <Button
        variant="ghost"
        className="w-full flex justify-end text-brand-black"
      >
        <CircleChevronRight />
        Explore more
      </Button>
    </section>
  );
}
