import clsx from "clsx";

import { Button } from "@/components/ui/button";
import useImageInterval from "../hooks/useImageInterval";

type Props = {
  galleries: Array<{ src: string; title: string }>;
  days: number;
  name: string;
  partner: string;
  description: string;
  discount: number;
  price: number;
  isVertical?: boolean;
};

export default function Destination({
  galleries,
  days,
  name,
  partner,
  description,
  discount,
  price,
  isVertical,
}: Props) {
  const [count] = useImageInterval({ length: galleries.length });

  return (
    <li
      className={clsx(
        "flex flex-col lg:flex-row gap-y-4 lg:gap-y-6 gap-x-6 py-6 lg:py-16 even:flex-col lg:even:flex-row-reverse",
        isVertical &&
          "flex-col lg:even:flex-col lg:odd:flex-col basis-1/2 lg:basis-1/3 shrink-0 lg:shrink"
      )}
    >
      <div className="basis-1 lg:basis-1/2 aspect-video">
        {/* @todo: render all image, use keyframes to animate it */}
        <img
          src={galleries[count].src}
          alt={galleries[count].title}
          className="w-full aspect-square object-cover ease-in-out transition-all"
        />
      </div>
      <div
        className={clsx(
          "basis-1/2 flex flex-col gap-2 text-brand-black text-sm lg:text-base"
        )}
      >
        <div>
          {days} DAYS {days - 1} NIGHTS
        </div>
        <div
          className={clsx(
            "font-unbounded text-brand-gray line-clamp-2 font-bold lg:min-h-[3rem]",
            !isVertical && "text-base lg:text-4xl"
          )}
        >
          {name}
        </div>
        <div className="flex flex-col-reverse lg:flex-col gap-2 flex-grow">
          <div className="font-bold">Organizer by {partner}</div>
          <p className={clsx(isVertical && "hidden")}>{description}</p>
        </div>

        <div
          className={clsx(
            "flex justify-between items-center lg:items-start",
            isVertical && "flex-col justify-normal w-fit gap-4"
          )}
        >
          <div className="text-brand-black">
            <div
              className={clsx(isVertical ? "text-sm" : "text-sm lg:text-base")}
            >
              Start from
            </div>
            {Number(discount) ? (
              <div className="font-unbounded line-through text-brand-zink">
                IDR {discount}
              </div>
            ) : (
              ""
            )}
            <div
              className={clsx(
                "font-unbounded text-brand-gray font-medium",
                !isVertical && "text-xl lg:text-3xl"
              )}
            >
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "IDR",
                maximumSignificantDigits: 1,
              }).format(price)}
            </div>
          </div>
          <Button className="text-brand-black border-brand-gray">
            See Details
          </Button>
        </div>
      </div>
    </li>
  );
}
