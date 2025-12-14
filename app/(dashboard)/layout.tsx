import { AppSidebar } from "@/components/Appsidebar";
import { NavbarDashboard } from "@/components/NavbarDashboard";

export default function LayoutDashBorad({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex w-full h-full ">
        <div className="hidden h-full xl:block w-80 xl:fixed">
          <AppSidebar />
        </div>
        <div className="w-full h-full xl:ml-80">
          <NavbarDashboard />
          <div className="p-6 h-max ">{children}</div>
        </div>
      </div>
    </>
  );
}
