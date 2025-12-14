import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { ViewCars } from "@/components/dashboardPage";
import { TEXT } from "@/constants";
import { getCarsPublische } from "@/services";

export default async function DashBoardPage() {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/");
  }
  const cars = await getCarsPublische();
  return (
    <>
      <div className=" flex justify-between">
        <h2 className="text-2xl font-bold">{TEXT.TITLE_LIST_CARDS}</h2>
      </div>
      <ViewCars cars={cars.car} />
    </>
  );
}
