import { Outlet } from "react-router-dom";
import Sidebar from "../Shared/Sidebar";
import DashboardNavbar from "../Shared/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="lg:ml-[300px] w-full">
        <div className="">
          <DashboardNavbar />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
