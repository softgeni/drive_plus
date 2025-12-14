import { Navbar } from "@/components/shared";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OrderConfirmationPage() {
  return (
    <div>
      <Navbar />
      <div className=" p-6 mx-auto max-w-xl">
        <div className=" flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-2xl">¡Gracias por confiar en nosotros!</h1>
          <p>
            Muy pronto recibirás toda la información en tu correo. ¡Estamos
            felices de ayudarte
          </p>
          <p>Puedes visualizar todas tus reservas dentro del area de cliente</p>
          <Link href={"/dashboard"}>
            <Button>Volver a ver los Productos</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
