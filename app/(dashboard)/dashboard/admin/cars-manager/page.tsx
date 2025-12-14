import { ButtonCardAdd, ListCars } from "@/components/cars-manager";
import { isAdministrator } from "@/lib";
import { getCarsServices } from "@/services";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function CardManagerPage() {
  const { userId } = await auth();

  if (!userId || !isAdministrator(userId)) {
    return redirect("/");
  }
  const cars = await getCarsServices(userId);
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Mana Your Cars</h2>
        <ButtonCardAdd />
      </div>
      <ListCars cars={cars.car} />
    </>
  );
}
