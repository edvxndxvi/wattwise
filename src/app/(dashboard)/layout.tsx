import { SideBar } from "@/components/SideBar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex">
        <SideBar />
        <div className="flex-1">
          
          {children}
          </div>
      </div>
    );
  }
   