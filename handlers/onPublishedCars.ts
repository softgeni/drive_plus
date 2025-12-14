import { axiosClient } from "@/config";
import { toast } from "sonner";

export const onPublishedCars = async (publish: boolean, carId: string) => {
  try {
    await axiosClient.patch(`/car/${carId}`, { isPublish: publish });

    if (publish) {
      toast.success("Car published successfully");
    } else {
      toast.success("Car unpublished successfully");
    }

    return { success: true };
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong publishing the car");
    return { success: false };
  }
};
