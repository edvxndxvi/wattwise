import { SideBar } from "@/components/SideBar";
import { HeaderBar } from '../../components/HeaderBar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex">
        <SideBar />
        <div className="flex-1">
          <HeaderBar />
          {children}
          </div>
      </div>
    );
  }
   