import AppBreadcrumb from "@/components/app/AppBreadcrumb";
import AppSidebar from "@/components/app/AppSidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => (
  <SidebarProvider>
    <div className="flex row nowrap noto-sans w-full">
      <AppSidebar variant="inset" />
      <SidebarInset>
        <div className="flex-1 flex flex-col nowrap gap-4 p-4">
          <div className="flex flex-row nowrap gap-4 items-center">
            <SidebarTrigger className="cursor-pointer" />
            <AppBreadcrumb />
          </div>
          <main>
            <Outlet />
          </main>
        </div>
      </SidebarInset>
    </div>
  </SidebarProvider>
);

export default MainLayout;
