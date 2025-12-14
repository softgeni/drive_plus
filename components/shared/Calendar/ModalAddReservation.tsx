"use client";

import { useState } from "react";
import { addDays } from "date-fns";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import type { ModalAddReservationProps } from "@/types";

import { CalendarSelector } from "./CalendarSelector";
import { onReserveCar } from "@/handlers";
import { Button } from "@/components/ui/button";
import { TEXTS } from "@/constants";

export const ModalAddReservation = ({ car }: ModalAddReservationProps) => {
  const [dateSelected, setDateSelected] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({ from: new Date(), to: addDays(new Date(), 3) });

  const onReservation = async () => {
    await onReserveCar(car, dateSelected);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className=" w-full max-w-[180px] ">
          Reservar
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {TEXTS.descriptions.modelDescription}
          </AlertDialogTitle>
          <AlertDialogDescription>
            <CalendarSelector
              setDateSelected={setDateSelected}
              carPriceDay={car.priceDay}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onReservation}>
            Reservar Vehiculo
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
