"use client";

import Image from "next/image";
import Link from "next/link";
import {
  categoryOurFleet,
  dataFirstBlockOurFleet,
  dataSecondBlockOurFleet,
} from "@/constants";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const OurFleet = () => {
  return (
    <div className=" max-w-6xl mx-auto text-center py-12 lg:py-40">
      <h3 className=" text-2xl lg:text-6xl font-bold">Our Vehicle Feet</h3>
      <p className="text-lg mt-2 lg:mt-5 lg:text-xl text-center w-full mx-auto max-w-2xl mb-5 lg:m-10">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
        soluta recusandae quae quos? Vero, adipisci ex!
      </p>
      <div className=" grid grid-cols-2 lg:grid-cols-6 gap-4  items-center justify-center mb-5 max-w-2xl mx-auto">
        {categoryOurFleet.map(({ name, active }) => (
          <div
            className={cn(
              "rounded-xl py-2 px-3",
              active ? "bg-black text-white" : "bg-slate-100"
            )}
            key={name}
          >
            {name}
          </div>
        ))}
      </div>
      <div className=" mb-10">
        <div className=" grid grid-cols-3 gap-x-6 mb-6">
          {dataFirstBlockOurFleet.map(({ url }) => (
            <div className="" key={url}>
              <Image
                src={`/images/cars/${url}`}
                alt={"cars"}
                width={400}
                height={300}
                className="rounded-xl"
              />
            </div>
          ))}
        </div>
        <div className=" grid grid-cols-4 gap-x-6 max-w-5xl mx-auto">
          {dataSecondBlockOurFleet.map(({ url }) => (
            <div className="" key={url}>
              <Image
                src={`/images/cars/${url}`}
                alt={"cars"}
                width={400}
                height={300}
                className="rounded-xl aspect-3/2"
              />
            </div>
          ))}
        </div>
      </div>
      <Link href={"/cars"}>
        <Button className=" rounded-xl p-5 text-xl mt-5" variant={"outline"}>
          Show all models
          <MoveRight className=" ml-2" />
        </Button>
      </Link>
    </div>
  );
};
