"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import HeaderMenu from "./HeaderMenu";
import clsx from "clsx";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 160 && !isScrolled) {
      setIsScrolled((prev) => !prev);
    } else if (window.scrollY < 160) setIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={clsx(
        "w-full sticky top-0 z-50",
        isScrolled && "bg-brand-white text-brand-black"
      )}
    >
      <div className="justify-between px-6 max-w-5xl mx-auto flex items-center gap-6 py-4 lg:py-6  text-brand-white lg:h-[106px]">
        <a href="#">
          <Image
            src={isScrolled ? "/logo-active.png" : "/logo.png"}
            alt="logo"
            width={134}
            height={50}
          />
        </a>
        <div
          className={clsx(
            "hidden lg:flex items-center",
            isScrolled && "text-brand-gray"
          )}
        >
          <HeaderMenu isScrolled={isScrolled} />
        </div>

        <div className="block lg:hidden">
          <Sheet>
            <SheetTrigger
              className={clsx(
                "border rounded-full p-2",
                isScrolled && "border-brand-gray"
              )}
            >
              <Menu className={clsx(isScrolled && "text-brand-gray")} />
            </SheetTrigger>
            <SheetContent className={clsx(isScrolled && "text-brand-gray")}>
              <HeaderMenu isMobile />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
