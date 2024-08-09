import Image from "next/image";
import { EXPERIENCES } from "./experienceData";

export default function Experience() {
  return (
    <section className="mx-auto max-w-5xl px-4 text-center mt-4 lg:mt-20 mb-12 lg:mb-24">
      <div className="font-thesignature text-6xl lg:text-7xl">
        Beyond Premium
      </div>
      <div className="font-unbounded text-2xl lg:text-3xl">
        Elevate Your Experience
      </div>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20">
        {EXPERIENCES.map((experience) => (
          <li key={experience.name} className="flex flex-col items-center">
            <Image src={experience.img} alt="" />
            <div className="text-base lg:text-2xl font-bold text-brand-gray mb-2 mt-6">
              {experience.name}
            </div>
            <div>{experience.description}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
