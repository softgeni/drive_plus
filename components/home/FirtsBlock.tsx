import Image from "next/image";
import { Reveal } from "../shared";
import { TEXTS } from "@/constants";

export const FirtsBlock = () => {
  return (
    <Reveal
      className="grid lg:grid-cols-2 lg:px-0 lg:py-24 items-center"
      position="bottom"
    >
      <div className=" p-6 lg:pl-40">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold">
          {TEXTS.texts.premium}
          <span className="block">{TEXTS.texts.rentalCars}</span>
        </h1>
        <p className="text-lg mt-2 lg:mt-5 lg:text-xl max-w-sm">
          {TEXTS.descriptions.premiumDescription}
        </p>
      </div>
      <Reveal className=" flex justify-end" position="right">
        <Image
          src={"/images/porsche.png"}
          alt={"Rent cars"}
          width={800}
          height={800}
          priority
        />
      </Reveal>
    </Reveal>
  );
};
