import { axiosClient } from "@/config";
import { toast } from "sonner";

export const onDeleteCar = async (car: { id: string }) => {
  try {
    await axiosClient.delete(`/car/${car.id}`);
    toast.success("Car deleted successfully.");
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong while deleting the car.");
    return { success: false };
  }
  return { success: true };
};
