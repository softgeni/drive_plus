import { persist, createJSONStorage } from "zustand/middleware";
import { create } from "zustand";
import { Car } from "@prisma/client";
import { toast } from "sonner";

interface UseLoveCarsType {
  lovedItems: Car[];
  addLoveItem: (data: Car) => void;
  removeLoveItem: (id: string) => void;
}

export const useLoveCars = create<UseLoveCarsType>()(
  persist(
    (set, get) => ({
      lovedItems: [] as Car[],

      addLoveItem: (data: Car) => {
        const currentLovedItems = get().lovedItems;
        const existingItem = currentLovedItems.find(
          (item) => item.id === data.id
        );
        if (existingItem) {
          return toast.error("El coche ya existe en la lista ❤️");
        }

        set({ lovedItems: [...currentLovedItems, data] });
        toast.success("Coche añadido a la lista 🏎️");
      },

      removeLoveItem: (id: string) => {
        set({ lovedItems: get().lovedItems.filter((item) => item.id !== id) });
        toast.success("El coche se ha eliminado de la lista 🗑️");
      },
    }),
    {
      name: "Loved-products-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
