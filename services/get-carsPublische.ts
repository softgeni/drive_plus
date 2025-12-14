import prisma from "@/lib/db";

export const getCarsPublische = async () => {
  const car = await prisma.car.findMany({
    where: {
      isPublish: true,
    },
    orderBy: { createdAt: "desc" },
  });
  return {
    car,
  };
};
