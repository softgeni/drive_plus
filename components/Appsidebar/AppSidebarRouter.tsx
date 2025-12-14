"use client";

import { useAuth } from "@clerk/nextjs";

//lib
import { isAdministrator } from "@/lib/isAdministrator";
//Components
import { Separator } from "../ui/separator";
import { appRoute, dataAdminSidebar, TEXT } from "@/constants";
import { SidebarItem } from "./SidebarItem";

export const AppSidebarRouter = () => {
  const { userId } = useAuth();
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className=" p-2 md:p-6">
          <p className="mb-2 text-slate-500 ">{TEXT.TITLE2}</p>
          {appRoute.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
        <Separator />
        {isAdministrator(userId) && (
          <div className="p-2 md:p-6">
            <p className="mb-2 text-slate-500">{TEXT.TITLE_ADMID}</p>
            {dataAdminSidebar.map((item) => (
              <SidebarItem key={item.label} item={item} />
            ))}
          </div>
        )}
      </div>
      <div>
        <Separator />
        <footer className="p-3 mt-3 text-center text-gray-300">
          {TEXT.FOOTER_COPY}
        </footer>
      </div>
    </div>
  );
};
