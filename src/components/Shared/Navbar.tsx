/**
 * Title: Write a program using JavaScript on Navbar
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

import { Link } from "react-router-dom";
import MenuItems from "@/pages/Home/MenuItems";
import { ModeToggle } from "./ModeToggle";
import SidebarMenuItems from "@/pages/Home/SidebarMenuItems";
import Container from "../Container";
import { useAppSelector } from "@/redux/hook";
import { currentUser } from "@/redux/features/auth/authSlice";
import ProfileAvatar from "./ProfileAvatar";

const Navbar = () => {
  const user = useAppSelector(currentUser);

  return (
    <div className="sticky z-50 top-0 left-0 w-full dark:border-b lg:h-[85px]  py-4 dark:bg-color-darkBaseColor bg-color-baseColor">
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/">
            <h2 className="text-white lg:text-[32px] text-[22px] font-bold font-mono">
              ScheduliFy
            </h2>
          </Link>
          <div className="hidden lg:block">
            <MenuItems />
          </div>
          <div className="flex items-center lg:gap-6 gap-2">
            {!user?.email ? (
              <>
                <Link
                  to="/login"
                  className="px-[16px] py-[5px] text-color-baseColor font-semibold rounded-[2px] hover:bg-color-darkHeading block bg-white"
                >
                  Login
                </Link>
              </>
            ) : (
              <>
                <ProfileAvatar />
              </>
            )}

            <ModeToggle />

            {/* for mobile device menu bar show  */}
            <div className="lg:hidden">
              <SidebarMenuItems />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
