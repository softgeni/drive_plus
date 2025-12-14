import { Car } from "@prisma/client";
import { useEffect, useState } from "react";

export type Filters = {
  type: string;
  transmission: string;
  engine: string;
  people: string;
};

export const useFilterCars = (cars: Car[]) => {
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [filters, setFilters] = useState<Filters>({
    type: "",
    transmission: "",
    engine: "",
    people: "",
  });

  useEffect(() => {
    let filtered = cars;

    if (filters.type) {
      filtered = filtered.filter((car) =>
        car.type.toLowerCase().includes(filters.type.toLowerCase())
      );
    }

    if (filters.transmission) {
      filtered = filtered.filter((car) =>
        car.transmission
          .toLowerCase()
          .includes(filters.transmission.toLowerCase())
      );
    }

    if (filters.engine) {
      filtered = filtered.filter((car) =>
        car.engine.toLowerCase().includes(filters.engine.toLowerCase())
      );
    }

    if (filters.people) {
      const peopleNumber = Number(filters.people);
      filtered = filtered.filter((car) => Number(car.people) === peopleNumber);
    }

    setFilteredCars(filtered);
  }, [cars, filters]);

  return {
    filteredCars,
    filters,
    setFilters,
  };
};
