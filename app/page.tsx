import Image from "next/image";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import CustomizeYourTrip from "./components/CustomizeYourTrip";
import imgSeparator from "./assets/img-separator.svg";
import Destinations from "./components/Destinations";
import LuxuryFootage from "./components/LuxuryFootage";
import ExplorePandooin from "./components/ExplorePandooin";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import imgHero from "./assets/img-hero.jpeg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="relative w-full">
        <Hero />
        <Image
          src={imgHero}
          alt="hero"
          className="w-full absolute top-0 left-0 -z-10 -mt-[106px] h-[calc(100%+106px)] object-cover"
        />
      </div>
      <Experience />
      <CustomizeYourTrip />
      <div className="mx-auto max-w-5xl px-4">
        <Image src={imgSeparator} alt="separator" />
      </div>
      <Destinations />
      <LuxuryFootage />
      <ExplorePandooin />
      <Articles />
      <Footer />
    </main>
  );
}
