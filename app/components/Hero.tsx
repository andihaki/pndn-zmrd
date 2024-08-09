import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-4 pt-[217px] pb-[225px] lg:pt-[260px] lg:pb-[128px] text-brand-white">
      <div className="max-w-full lg:max-w-[708px] text-center lg:text-left ">
        <div className="font-thesignature text-7xl lg:text-9xl">
          Premium Travel
        </div>
        <div className="text-2xl lg:text-5xl">Beyond Expectation</div>
        <div className="text-2xl mt-2">
          Experience the finest that Indonesia has to offer with our curated
          selection of premium trips, ensuring comfort every step of the way
        </div>
        <Button className="mt-6">Take me there</Button>
      </div>
    </section>
  );
}
