import Image from "next/image";

import imgExplorePandooin from "../assets/img-explore.jpeg";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExplorePandooin() {
  return (
    <section className="relative overflow-hidden w-full flex flex-col lg:flex-row gap-2 justify-between p-6 mx-auto max-w-5xl px-4 mt-14 mb-20 items-center">
      <img src="/logo.png" alt="logo" className="h-12" />
      <div className="flex gap-2 flex-col items-center lg:items-end text-brand-white max-w-[28ch]">
        <div className="text-center lg:text-left">
          Want to see other destinations? Check us out at our website
        </div>
        <Button variant="link" className="p-0 h-fit text-brand-white">
          <a href="https://pandooin.com">pandooin.com</a>
          <ArrowUpRight />
        </Button>
      </div>
      <Image
        src={imgExplorePandooin}
        alt=""
        className="-z-10 absolute top-0 left-0 w-full object-cover h-full brightness-50"
      />
    </section>
  );
}
