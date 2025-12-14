import { axiosClient } from "@/config";
import { Car } from "@prisma/client";
import { DateRange } from "react-day-picker";
import { toast } from "sonner";

export const onReserveCar = async (car: Car, dateSelected: DateRange) => {
  try {
    // Lógica para reservar el coche
    const response = await axiosClient.post("/checkout", {
      carId: car.id,
      priceDay: car.priceDay,
      startDate: dateSelected.from,
      endDate: dateSelected.to,
      carName: car.name,
    });
    window.location.href = response.data.url;
    toast.success("Car reservation 👍🏼");
  } catch (error) {
    toast.error("Error reserving the car");
    console.error("Error reserving the car:", error);
  }
  return;
};
