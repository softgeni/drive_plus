"use client";

import { ViewCars } from "@/components/dashboardPage";
import { SkeletonCars } from "@/components/shared";
import { useFilterCars } from "@/hooks/use-filter-cars";
import { ListCarsProps } from "@/types";
import { FilterCars } from "../filter";

export const FilterAndListCars = ({ cars }: ListCarsProps) => {
  const { filteredCars, setFilters, filters } = useFilterCars(cars);

  if (!cars) return <SkeletonCars />;

  const handleFilterChange = (filter: any, value: string) => {
    setFilters((prev) => ({ ...prev, [filter]: value }));
  };

  const clearFilters = () => {
    setFilters({
      type: "",
      transmission: "",
      engine: "",
      people: "",
    });
  };

  return (
    <div>
      <FilterCars
        setFilters={handleFilterChange}
        clearFilters={clearFilters}
        filters={filters}
      />
      <ViewCars cars={filteredCars} />
    </div>
  );
};
