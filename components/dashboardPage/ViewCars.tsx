"use client";
import Image from "next/image";
import { Fuel, Gauge, Gem, Heart, User, Wrench } from "lucide-react";

import type { ListCarsProps } from "@/types";
import { ModalAddReservation } from "../shared";
import { useLoveCars } from "@/hooks";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";

export const ViewCars = ({ cars }: ListCarsProps) => {
  const { userId } = useAuth();
  const { lovedItems, addLoveItem, removeLoveItem } = useLoveCars();

  return (
    <>
      {cars.length === 0 && (
        <p>No se ha encontrado vehiculos con estos filtros</p>
      )}

      <div className=" grid md:grid-cols-2  gap-6 lg:grid-cols-4">
        {cars.map((car) => {
          const {
            priceDay,
            photo,
            people,
            transmission,
            name,
            type,
            engine,
            cv,
            id,
          } = car;
          const likedCar = lovedItems.some((item) => item.id === car.id);
          return (
            <div key={id} className=" p-1 rounded-lg shadow-md hover:shadow-lg">
              <Image
                src={photo}
                alt={name}
                width={400}
                height={600}
                className="rounded-lg"
              />
              <div className=" p-3">
                <div className=" flex flex-col mb-3 gap-x-4">
                  <p className=" text-xl min-h-16 lg:min-h-fit">{name}</p>
                  <p>{priceDay} $ / day</p>
                </div>
                <p className=" flex items-center">
                  <Gem className="h-4 w-4 mr-2" strokeWidth={1.5} />
                  {type}
                </p>
                <p className=" flex items-center">
                  <Wrench className="h-4 w-4 mr-2" strokeWidth={1.5} />
                  {transmission}
                </p>
                <p className=" flex items-center">
                  <User className="h-4 w-4 mr-2" strokeWidth={1.5} />
                  {people}
                </p>
                <p className=" flex items-center">
                  <Fuel className="h-4 w-4 mr-2" strokeWidth={1.5} />
                  {engine}
                </p>
                <p className=" flex items-center">
                  <Gauge className="h-4 w-4 mr-2" strokeWidth={1} />
                  {cv} CV
                </p>

                {userId ? (
                  <div className="flex items-center gap-3 mt-4">
                    <ModalAddReservation car={car} />
                    <Heart
                      onClick={
                        likedCar
                          ? () => removeLoveItem(car.id)
                          : () => addLoveItem(car)
                      }
                      className={`
                    "h-5 w-5 cursor-pointer" ${likedCar && "fill-red-500"}
                    `}
                      strokeWidth={1}
                    />
                  </div>
                ) : (
                  <div className=" w-full mt-2 text-center">
                    <Link href={"/sign-in"}>
                      <Button variant={"outline"} className=" w-full">
                        Iniciar sesion para reservar
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
