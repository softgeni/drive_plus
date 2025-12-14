import { ReserversProps } from "@/types";
import { Car } from "@prisma/client";

export interface TableReservesProps extends ReserversProps {
  title: string;
  columns: {
    header: string;
    render: (item: any) => React.ReactNode;
    isRight?: boolean;
  }[];
}

export interface OrdersTableProps extends ReserversProps {
  columns: {
    header: string;
    render: (item: any) => React.ReactNode;
    isRight?: boolean;
  }[];
}

export interface CarInfoProps {
  car: Car;
}
