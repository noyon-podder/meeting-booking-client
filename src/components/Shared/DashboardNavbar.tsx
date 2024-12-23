/**
 * Title: Write a program using JavaScript on DashboardNavbar
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

import { ModeToggle } from "./ModeToggle";
import ProfileAvatar from "./ProfileAvatar";
import DashboardSidebarMenuItems from "@/pages/Dashboard/DashboardSidebarMenuItems";

const DashboardNavbar = () => {
  return (
    <div className="lg:py-4 py-4   px-5 lg:px-10 bg-white dark:bg-color-cardColor  border-b border-[#f7f7f7] w-full dark:border-color-darkBaseColor">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          {/* for mobile device menu bar show  */}
          <div className="lg:hidden ">
            <DashboardSidebarMenuItems />
          </div>
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
