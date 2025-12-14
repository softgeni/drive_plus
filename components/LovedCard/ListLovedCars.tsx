"use client";

import { useLoveCars } from "@/hooks";
import { Car } from "@prisma/client";
import Image from "next/image";
import { CarInfo, ModalAddReservation } from "../shared";
import { Heart } from "lucide-react";
import { TEXTS } from "@/constants";

export const ListLovedCar = () => {
  const { lovedItems, removeLoveItem } = useLoveCars();

  return (
    <>
      {lovedItems.length === 0 ? (
        <h2>{TEXTS.messages.noFavorites}</h2>
      ) : (
        <>
          <div className=" grid grid-cols-2 gap-6 lg:grid-cols-4">
            {lovedItems.map((car: Car) => {
              const { photo, name, id } = car;

              return (
                <div
                  className=" p-1 rounded-lg shadow-md hover:shadow-lg"
                  key={id}
                >
                  <Image
                    src={photo}
                    alt={name}
                    width={400}
                    height={600}
                    className="rounded-lg"
                  />
                  <CarInfo car={car} />
                  <div className=" flex items-center justify-center gap-x-3">
                    <ModalAddReservation car={car} />
                    <Heart
                      className="mt-2 cursor-pointer fill-red-500"
                      onClick={() => removeLoveItem(car.id)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
