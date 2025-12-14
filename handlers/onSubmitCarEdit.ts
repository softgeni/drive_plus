import { axiosClient } from "@/config";
import { formSchema } from "@/schema";

import { toast } from "sonner";
import z from "zod";

export const onSubmitCarEdit = async (
  carData: { id: string },
  values: z.infer<typeof formSchema>
) => {
  try {
    await axiosClient.patch(`/car/${carData.id}/form`, values);
    toast.success("Car Edited successfully!");
  } catch (error) {
    toast.error(`Something went wrong, please try again: ${error}`);
  }
};
