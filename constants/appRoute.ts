import { Calendar, SquareGanttChart } from "lucide-react";
import { ROUTES } from "./json";
import { TEXTS } from "./texts";

export const dataAdminSidebar = [
  {
    icon: SquareGanttChart,
    label: TEXTS.home.manageCars,
    href: "/dashboard/admin/cars-manager",
  },
  {
    icon: Calendar,
    label: TEXTS.home.allReservations,
    href: "/dashboard/admin/reserves-admin",
  },
];

export const appRoute = [ROUTES.DASHBOARD, ROUTES.RESERVES, ROUTES.LOVE];
