/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useLocation } from "react-router-dom";
import { MdDashboard, MdOutlineRoomPreferences } from "react-icons/md";
import { FaCheckToSlot } from "react-icons/fa6";
import { TbBrandBooking } from "react-icons/tb";
import { useAppSelector } from "@/redux/hook";
import { currentUser } from "@/redux/features/auth/authSlice";
import { useEffect, useState, ReactElement } from "react";
import Logo from "/logo.svg";

interface ISidebar {
  title: string;
  icon: ReactElement;
  link: string;
}

const Sidebar = () => {
  const { pathname } = useLocation();
  const user = useAppSelector(currentUser);

  const [fetchMenuData, setFetchMenuData] = useState<ISidebar[]>([]);

  const sidebarAdminMenuData: ISidebar[] = [
    {
      title: "Dashboard",
      icon: <MdDashboard className="text-color-lightColor text-xl" />,
      link: "/dashboard",
    },
    {
      title: "Room Management",
      icon: (
        <MdOutlineRoomPreferences className="text-color-lightColor text-xl" />
      ),
      link: "/dashboard/room-management",
    },
    {
      title: "Slot Management",
      icon: <FaCheckToSlot className="text-color-lightColor text-xl" />,
      link: "/dashboard/slot-management",
    },
    {
      title: "Booking Management",
      icon: <TbBrandBooking className="text-color-lightColor text-xl" />,
      link: "/dashboard/booking-management",
    },
  ];

  const sidebarUserMenuData: ISidebar[] = [
    {
      title: "Dashboard",
      icon: <MdDashboard className="text-color-lightColor text-xl" />,
      link: "/user-dashboard",
    },
    {
      title: "My Bookings",
      icon: <TbBrandBooking className="text-color-lightColor text-xl" />,
      link: "/user-dashboard/my-bookings",
    },
  ];

  useEffect(() => {
    if (user?.role === "admin") {
      setFetchMenuData(sidebarAdminMenuData);
    } else {
      setFetchMenuData(sidebarUserMenuData);
    }
  }, [user]);

  return (
    <div className="w-[300px] bg-color-darkBaseColor h-screen lg:block hidden fixed top-0 left-0">
      <div className="py-5 border-b border-color-darkBaseColor flex justify-center">
        <Link to="/" className="w-[150px] h-auto flex items-center">
          <img src={Logo} alt="" className="w-full h-full" />
        </Link>
      </div>

      {/* navbar  */}
      <ul className="mt-5">
        {fetchMenuData.map((menu, index) => (
          <li
            key={index}
            className={`py-4 px-5 flex items-center gap-4  transform-colors duration-300 hover:bg-color-baseColor cursor-pointer ${
              pathname === menu.link ? "bg-color-baseColor" : "bg-transparent"
            }`}
          >
            {menu.icon}
            <Link to={menu.link} className="text-color-lightColor">
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
