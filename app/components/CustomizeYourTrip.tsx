import { Button } from "@/components/ui/button";
import imgCustomizeYourTrip from "../assets/img-customize-your-trip.png";
import Image from "next/image";

export default function CustomizeYourTrip() {
  return (
    <section
      id="customize-your-trip"
      className="mx-auto max-w-5xl px-4 flex flex-col lg:flex-row gap-6 items-center my-12 lg:my-20"
    >
      <div className="">
        <Image src={imgCustomizeYourTrip} width={329} height={302} alt="" />
      </div>
      <div className="flex-grow flex flex-col gap-4 text-center lg:text-left items-center lg:items-start">
        <div className="text-brand-black text-3xl">
          Discover Tailored Experiences
        </div>
        <div className="pr-0 lg:pr-36">
          Create your own journey, personalized to suit your preferences and
          interests, ensuring a once-in-a-lifetime adventure awaits.
        </div>
        <Button variant="default">Customize Your Trip</Button>
      </div>
    </section>
  );
}
