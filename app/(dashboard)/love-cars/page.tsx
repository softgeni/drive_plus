import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { ListLovedCar } from "@/components/LovedCard";

export default async function LoveCarsPage() {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/");
  }
  return (
    <>
      <div className="">
        <h1 className=" text-2xl">Coches que te gustan</h1>
        <ListLovedCar />
      </div>
    </>
  );
}
