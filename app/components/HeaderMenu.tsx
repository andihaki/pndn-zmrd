"use client";

import clsx from "clsx";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export const MENUS = [
  {
    name: "Homepage",
    link: "#",
  },
  {
    name: "Customize Your Trip",
    link: "#customize-your-trip",
  },
  {
    name: "Destination",
    link: "#destination",
  },
  {
    name: "Article",
    link: "#article",
  },
];

type Props = {
  isMobile?: boolean;
  isScrolled?: boolean;
};

export default function HeaderMenu({ isMobile, isScrolled }: Props) {
  const [hash, setHash] = useState(() => window.location.hash || "#");
  return (
    <>
      <ul className="flex flex-col lg:flex-row gap-2">
        {MENUS.map((menu) => (
          <li
            key={menu.name}
            className={clsx(
              "px-4 py-4 hover:bg-white hover:text-black",
              menu.link === hash && "border-b-2"
            )}
            onClick={() => setHash(menu.link)}
          >
            <a href={menu.link}>{menu.name}</a>
          </li>
        ))}
      </ul>
      <Button
        className={clsx(
          "px-6 py-4",
          (isMobile || isScrolled) && "text-brand-gray"
        )}
      >
        Need Assistance?
      </Button>
    </>
  );
}
