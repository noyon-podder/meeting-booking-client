/**
 * Title: Write a program using JavaScript on Sidebar
 * Author: Noyon Podder
 * Portfolio: https://dev-noyon.vercel.app/
 * Linkedin: https://linkedin.com/in/dev-noyon
 * GitHub: https://github.com/noyon-podder
 * Facebook: https://www.facebook.com/noyon.Podder7/
 * Instagram: https://www.instagram.com/noyon.podder7/
 * Twitter: https://x.com/noyon_podder7
 * WhatsApp: https://wa.me/8801752441505
 * Telegram: https://t.me/Noyonpodder7
 * Date: 16 December 2024
 */

import { Link, useLocation } from "react-router-dom";
import { MdDashboard, MdOutlineRoomPreferences } from "react-icons/md";
import { FaCheckToSlot } from "react-icons/fa6";
import { TbBrandBooking } from "react-icons/tb";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-[300px] bg-color-darkBaseColor h-screen lg:block hidden fixed top-0 left-0">
      <div className="py-5 border-b border-color-darkBaseColor">
        <Link
          to="/"
          className="text-color-lightColor text-center text-2xl font-semibold block"
        >
          Schedulify
        </Link>
      </div>

      {/* navbar  */}
      <ul className="mt-5">
        <li
          className={`py-4 px-5 flex items-center gap-4  transform-colors duration-300 hover:bg-color-baseColor cursor-pointer ${
            pathname === "/dashboard" ? "bg-color-baseColor" : "bg-transparent"
          }`}
        >
          <MdDashboard className="text-color-lightColor text-xl" />
          <Link to="/dashboard" className="text-color-lightColor">
            Dashboard
          </Link>
        </li>
        <li
          className={`py-4 px-5 flex items-center gap-4  transform-colors duration-300 hover:bg-color-baseColor cursor-pointer ${
            pathname === "/dashboard/room-management"
              ? "bg-color-baseColor"
              : "bg-transparent"
          }`}
        >
          <MdOutlineRoomPreferences className="text-color-lightColor text-xl" />
          <Link
            to="/dashboard/room-management"
            className="text-color-lightColor"
          >
            Room Management
          </Link>
        </li>

        <li
          className={`py-4 px-5 flex items-center gap-4 transform-colors duration-300 hover:bg-color-baseColor cursor-pointer ${
            pathname === "/dashboard/slot-management"
              ? "bg-color-baseColor"
              : "bg-transparent"
          }`}
        >
          <FaCheckToSlot className="text-color-lightColor text-xl" />
          <Link
            to="/dashboard/slot-management"
            className="text-color-lightColor"
          >
            Slot Management
          </Link>
        </li>
        <li
          className={`py-4 px-5 flex items-center gap-4  transform-colors duration-300 hover:bg-color-baseColor cursor-pointer ${
            pathname === "/dashboard/booking-management"
              ? "bg-color-baseColor"
              : "bg-transparent"
          }`}
        >
          <TbBrandBooking className="text-color-lightColor text-xl" />
          <Link
            to="/dashboard/booking-management"
            className="text-color-lightColor"
          >
            Booking Management
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
