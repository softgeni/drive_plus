import { AppSidebarRouter } from "./AppSidebarRouter";
import { LogoSidebar } from "./LogoSidebar";

export const AppSidebar = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col h-full border-r">
        <LogoSidebar />
        <AppSidebarRouter />
      </div>
    </div>
  );
};
