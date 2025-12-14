"use client";

import Image from "next/image";
import type { CarsItemProps } from "@/types";

import { CarActions, CarInfo } from "../shared";

export const CarsItem = ({ car }: CarsItemProps) => {
  return (
    <div className="relative p-1 bg-white rounded-lg shadow-md hover:shadow-lg">
      <Image
        src={car.photo || ""}
        alt={car.name}
        width={400}
        height={600}
        className="rounded-lg"
      />

      {car.isPublish ? (
        <p className="absolute top-0 right-0 w-full p-1 text-center text-white bg-green-700 rounded-b-lg">
          Published
        </p>
      ) : (
        <p className="absolute top-0 right-0 w-full p-1 text-center text-white bg-red-300 rounded-b-lg">
          Not Published
        </p>
      )}

      <CarInfo car={car} />
      <CarActions car={car} />
    </div>
  );
};
