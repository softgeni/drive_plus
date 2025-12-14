import { axiosClient } from "@/config";
import { formSchema } from "@/schema";

import { toast } from "sonner";
import z from "zod";

export const handleOnsubmit = async (values: z.infer<typeof formSchema>) => {
  try {
    await axiosClient.post("/car", values);
    toast.success("Car added successfully!");
  } catch (error) {
    toast.error(`Something went wrong, please try again: ${error}`);
  }
};
