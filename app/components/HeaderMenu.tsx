import { Button } from "@/components/ui/button";
import clsx from "clsx";

export default function HeaderMenu({ isMobile }: { isMobile?: boolean }) {
  return (
    <>
      {/* @todo: create constant list of header */}
      <a href="#">
        <div className="px-6 py-4 border-b-2 hover:bg-white hover:text-black">
          Homepage
        </div>
      </a>
      <a href="#customize-your-trip">
        <div className="px-6 py-4">Customize Your Trip</div>
      </a>
      <a href="#destination">
        <div className="px-6 py-4">Destination</div>
      </a>
      <a href="#article">
        <div className="px-6 py-4">Article</div>
      </a>
      <Button className={clsx("px-6 py-4", isMobile && "text-brand-black")}>
        Need Assistance?
      </Button>
    </>
  );
}
