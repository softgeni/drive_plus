import prisma from "@/lib/db";

export const getCarsOrderServices = async (userId: string) => {
  const order = await prisma.order.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return {
    order,
  };
};
