import { CarInfoProps } from "@/interfaces";
import { Gem, Wrench, Users, Fuel, Gauge } from "lucide-react";

export const CarInfo = ({ car }: CarInfoProps) => {
  return (
    <div className="p-3">
      <div className="flex flex-col mb-3 gap-x-4">
        <p className="text-xl min-h-16 lg:min-h-fit">{car.name}</p>
        <p>{car.priceDay} $ /día</p>
      </div>

      <div className="grid md:grid-cols-2 gap-x-4">
        <p className="flex items-center">
          <Gem className="h-4 w-4 mr-2" strokeWidth={1} />
          {car.type}
        </p>

        <p className="flex items-center">
          <Wrench className="h-4 w-4 mr-2" strokeWidth={1} />
          {car.transmission}
        </p>

        <p className="flex items-center">
          <Users className="h-4 w-4 mr-2" strokeWidth={1} />
          {car.people}
        </p>

        <p className="flex items-center">
          <Fuel className="h-4 w-4 mr-2" strokeWidth={1} />
          {car.engine}
        </p>

        <p className="flex items-center">
          <Gauge className="h-4 w-4 mr-2" strokeWidth={1} />
          {car.cv} CV
        </p>
      </div>
    </div>
  );
};
