import { TableReserves } from "@/components/Reserves";
import { formatPrice, isAdministrator } from "@/lib";
import { getallReserverServices } from "@/services";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function ReservsAdminPage() {
  const { userId } = await auth();
  const user = await currentUser();
  if (!userId || !user || !isAdministrator(userId)) {
    return redirect("/");
  }
  const orders = await getallReserverServices();
  return (
    <>
      <div>
        <TableReserves
          title="Reserver Admin"
          results={orders.orders}
          columns={[
            {
              header: "Order Date",
              render: (o) => new Date(o.orderDate).toLocaleDateString(),
            },
            { header: "Customer ID", render: (o) => o.userId },
            { header: "Car", render: (o) => o.carName },
            {
              header: "Date Start",
              render: (o) => new Date(o.orderDate).toLocaleDateString(),
            },
            {
              header: "Date End",
              render: (o) => new Date(o.orderEndDate).toLocaleDateString(),
            },
            {
              header: "Amount",
              render: (o) => `${formatPrice(Number(o.totalAmount))}`,
              isRight: true,
            },
          ]}
        />
      </div>
    </>
  );
}
