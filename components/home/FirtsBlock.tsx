import Image from "next/image";
import { Reveal } from "../shared";

export const FirtsBlock = () => {
  return (
    <Reveal
      className="grid lg:grid-cols-2 lg:px-0 lg:py-24 items-center"
      position="bottom"
    >
      <div className=" p-6 lg:pl-40">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold">
          Premiun
          <span className="block">Rental Cars</span>
          in the world
        </h1>
        <p className="text-lg mt-2 lg:mt-5 lg:text-xl max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          placeat ipsum!
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
