import prisma from "@/lib/db";

export const getallReserverServices = async () => {
  const orders = await prisma.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return {
    orders,
  };
};
