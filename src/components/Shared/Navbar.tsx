/**
 * Title: Write a program using TypeScript on Navbar
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
import Logo from "/logo.svg";

const Navbar = () => {
  const user = useAppSelector(currentUser);

  return (
    <div className="sticky z-50 top-0 left-0 w-full dark:border-b  dark:bg-color-darkBaseColor bg-color-baseColor py-4">
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/" className="w-[180px] h-auto flex items-center">
            <img src={Logo} alt="" className="w-full h-full" />
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
