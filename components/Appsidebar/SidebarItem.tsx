"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import type { SidebarItemProps } from "@/types";
import { usePathname } from "next/navigation";

export const SidebarItem = ({ item }: SidebarItemProps) => {
  //props
  const { href, label, icon: Icon } = item;
  //active pathName selecte route
  const pathName = usePathname();
  const activePath = pathName === href;
  return (
    <Link
      className={cn(
        `flex gap-x-2 mt-2 text-slate-700 text-sm items-center hover:bg-slate-300/20 p-2 rounded-lg cursor-pointer`,
        activePath && "bg-slate-400/20"
      )}
      href={href}
    >
      <Icon className=" h-5 w-5" strokeWidth={1} />
      {label}
    </Link>
  );
};
