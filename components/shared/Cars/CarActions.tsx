"use client";

import { Trash, Upload } from "lucide-react";
import { Button } from "../../ui/button";

import { useRouter } from "next/navigation";
import { onDeleteCar, onPublishedCars } from "@/handlers";
import type { CarsItemProps } from "@/types";
import { ButtonEditCar } from "../../cars-manager";

export function CarActions({ car }: CarsItemProps) {
  const router = useRouter();

  const deletedCar = async () => {
    const res = await onDeleteCar(car);
    if (res.success) router.refresh();
  };

  const publishedCar = async () => {
    const res = await onPublishedCars(!car.isPublish, car.id);
    if (res.success) router.refresh();
  };

  return (
    <div className="p-3">
      <div className="flex justify-between mt-3 gap-x-4">
        <Button variant="outline" onClick={deletedCar}>
          Delete
          <Trash className="h-4 w-4 ml-2" />
        </Button>

        <ButtonEditCar carData={car} />
      </div>

      {car.isPublish ? (
        <Button
          variant="outline"
          className="w-full mt-3"
          onClick={publishedCar}
        >
          Unpublish
          <Upload className="h-4 w-4 ml-2" />
        </Button>
      ) : (
        <Button className="w-full mt-3" onClick={publishedCar}>
          Publish
          <Upload className="h-4 w-4 ml-2" />
        </Button>
      )}
    </div>
  );
}
