import { Calendar, SquareGanttChart } from "lucide-react";
import { ROUTES } from "./json";

export const dataAdminSidebar = [
  {
    icon: SquareGanttChart,
    label: "Manage your cars",
    href: "/dashboard/admin/cars-manager",
  },
  {
    icon: Calendar,
    label: "All reserves",
    href: "/dashboard/admin/reserves-admin",
  },
];

export const appRoute = [ROUTES.DASHBOARD, ROUTES.RESERVES, ROUTES.LOVE];
