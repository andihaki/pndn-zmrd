import Image from "next/image";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  return (
    // @todo: onscroll change background to brand-white
    <header className="mx-auto w-full justify-between px-6 max-w-5xl flex items-center gap-6 py-6 sticky top-0 text-brand-white h-[106px] z-50">
      <a href="#">
        <Image src="/logo.png" alt="logo" width={134} height={50} />
      </a>
      <div className="hidden lg:flex items-center">
        <HeaderMenu />
      </div>
      <div className="block lg:hidden">
        <Sheet>
          <SheetTrigger className="border rounded-full p-2">
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <HeaderMenu isMobile />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
