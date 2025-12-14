import prisma from "@/lib/db";

export const getCarsServices = async (userId: string) => {
  const car = await prisma.car.findMany({
    where: {
      userId,
    },
    orderBy: { createdAt: "desc" },
  });
  return {
    car,
  };
};
