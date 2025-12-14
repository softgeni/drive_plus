import { FilterAndListCars, HeaderCars } from "@/components/home";
import { Navbar } from "@/components/shared";
import { getCarsPublische } from "@/services";

export default async function CarsPage() {
  const cars = await getCarsPublische();
  return (
    <>
      <Navbar />
      <div className="p-6 mx-auto max-w-7xl">
        <HeaderCars title={"Elige el vehiculo que quieres conducir"} />
        <div className="">
          <FilterAndListCars cars={cars.car} />
        </div>
      </div>
    </>
  );
}
