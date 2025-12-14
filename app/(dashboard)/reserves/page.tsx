import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";

import { getCarsOrderServices } from "@/services";
import { Button } from "@/components/ui/button";
import { TableReserves } from "@/components/Reserves";
import { formatPrice } from "@/lib";

export default async function ReservesPage() {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/");
  }
  const results = await getCarsOrderServices(userId);
  return (
    <div>
      {results.order.length === 0 ? (
        <div className=" flex flex-col gap-4">
          <h2 className="text-xl">No tienes ningun pedido</h2>
          <p>Haz tus pedidos atraves de la pagina de vehiculos</p>
          <Link href={"/cars"}>
            <Button>Lista de vehiculos</Button>
          </Link>
        </div>
      ) : (
        <TableReserves
          title="Reserves Cars"
          results={results.order}
          columns={[
            { header: "Car", render: (o) => o.carName },
            {
              header: "Date Start",
              render: (o) =>
                new Date(o.orderDate).toLocaleDateString("es-Es", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                }),
            },
            {
              header: "Date End",
              render: (o) =>
                new Date(o.orderEndDate).toLocaleDateString("es-Es", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                }),
            },
            {
              header: "Status",
              render: (o) => {
                let bgColor = "#F59E0B"; // default Pending (amarillo)

                if (o.status === "Approved") bgColor = "#16A34A"; // verde
                else if (o.status === "Rejected") bgColor = "#DC2626"; // rojo

                return (
                  <div
                    style={{ backgroundColor: bgColor }}
                    className="p-2 text-white text-center rounded"
                  >
                    {o.status}
                  </div>
                );
              },
            },

            {
              header: "Amount",
              render: (o) => `${formatPrice(Number(o.totalAmount))}`,
              isRight: true,
            },
          ]}
        />
      )}
    </div>
  );
}
