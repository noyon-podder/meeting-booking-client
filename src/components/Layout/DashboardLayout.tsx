/**
 * Title: Write a program using JavaScript on DashboardLayout
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
