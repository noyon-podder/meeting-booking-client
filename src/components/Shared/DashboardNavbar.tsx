import { Link } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";
import ProfileAvatar from "./ProfileAvatar";
import DashboardSidebarMenuItems from "@/pages/Dashboard/DashboardSidebarMenuItems";

const DashboardNavbar = () => {
  return (
    <div className="lg:py-4 py-4 bg-[#f7f7f7] dark:bg-color-darkBaseColor  px-5 lg:px-10  border-b border-[#f7f7f7] w-full dark:border-color-baseColor">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          {/* for mobile device menu bar show  */}
          <div className="lg:hidden ">
            <DashboardSidebarMenuItems />
          </div>
          <Link
            to="/"
            className="text-color-darkBaseColor dark:text-color-darkHeading font-medium px-5 py-2 bg-transparent hover:bg-color-baseLightColor hover:text-white duration-300 rounded-md"
          >
            Home
          </Link>
        </div>
        <div className="flex items-center lg:gap-6 gap-4">
          <ProfileAvatar />

          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
