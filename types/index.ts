import { Car, Order } from "@prisma/client";
import { LucideIcon } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";

export type SidebarItemProps = {
  item: {
    label: string;
    icon: LucideIcon;
    href: string;
  };
  key: number | string;
};

export type FormAddCarProps = {
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
};

export type ListCarsProps = {
  cars: Car[];
};

export type CarsItemProps = {
  car: Car;
};
export type ReserversProps = {
  results: Order[];
};

export type ButtonEditCarProps = {
  carData: Car;
};

export type ButtonCardAddProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  carData: Car;
};

export type ModalAddReservationProps = {
  car: Car;
};

export type CalendarSelectorProps = React.HTMLAttributes<HTMLDivElement> & {
  setDateSelected: Dispatch<
    SetStateAction<{ from: Date | undefined; to: Date | undefined }>
  >;
  className?: string;
  carPriceDay: string;
};
export type RevealProps = {
  children: React.ReactNode;
  className?: string;
  position: "right" | "bottom";
  delay?: number;
};
