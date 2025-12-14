import { Navbar } from "@/components/shared";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OrderError() {
  return (
    <>
      <Navbar />
      <div className=" p-6 mx-auto max-w-7xl">
        <div className=" flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-2xl ">
            !OPS! Ha ocurrido un error . Vuelva a intentarlo mas tarde
          </h1>
          <Link href={"/dashboard"}>
            <Button>Volver a ver los productos!</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
