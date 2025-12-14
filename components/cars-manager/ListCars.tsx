import { ListCarsProps } from "@/types";
import { CarsItem } from "./CarsItem";

export const ListCars = ({ cars }: ListCarsProps) => {
  return (
    <div className=" grid grid-cols-2 gap-6 my-4 lg:grid-cols-4 ">
      {cars.map((car) => (
        <CarsItem key={car.id} car={car} />
      ))}
    </div>
  );
};
