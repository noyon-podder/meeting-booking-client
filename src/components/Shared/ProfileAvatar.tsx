import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Image from "/avatar.png";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { currentUser, logout } from "@/redux/features/auth/authSlice";
import toast from "react-hot-toast";

const ProfileAvatar = () => {
  const user = useAppSelector(currentUser);

  // handle log out functionality
  const dispatch = useAppDispatch();
  const handelLogout = () => {
    toast.success("Logged out");
    dispatch(logout());
  };
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage src={Image} className="" alt="User Profile" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          <ul className="py-2">
            {user?.role === "admin" && (
              <li className="px-4 border-b py-2 block bg-transparent hover:bg-[#1A4FA0] transition-colors hover:text-white text-color-heading dark:text-color-lightColor duration-300">
                <Link to="/dashboard" className="text-base font-semibold  ">
                  Dashboard
                </Link>
              </li>
            )}

            <li className="px-4 border-b py-2 block bg-transparent hover:bg-[#1A4FA0] transition-colors hover:text-white text-color-heading dark:text-color-lightColor duration-300">
              <Link to="/my-bookings" className="text-base font-semibold  ">
                My Bookings
              </Link>
            </li>

            <li
              onClick={handelLogout}
              className="px-4  py-2 text-base font-semibold  block bg-transparent hover:bg-[#1A4FA0] transition-colors hover:text-white text-color-heading dark:text-color-lightColor duration-300 cursor-pointer"
            >
              Log out
            </li>
          </ul>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileAvatar;
