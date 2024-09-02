import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { HiOutlineBars3BottomRight } from "../../icons/ReactIcons";

import { Link } from "react-router-dom";
import { MdOutlineRoomPreferences } from "react-icons/md";
import { FaCheckToSlot } from "react-icons/fa6";
import { TbBrandBooking } from "react-icons/tb";

const DashboardSidebarMenuItems = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <HiOutlineBars3BottomRight
          size={32}
          className="text-color-baseColor dark:text-color-lightColor  cursor-pointer"
        />
      </SheetTrigger>

      <SheetContent side={"left"} className="bg-color-darkBaseColor text-white">
        <SheetHeader>
          <SheetDescription>
            <div className="flex items-center justify-center h-full w-full mt-20">
              <ul className="mt-5">
                <li className="py-4 px-5 flex items-center gap-4 bg-transparent transform-colors duration-300 hover:bg-color-baseColor cursor-pointer">
                  <MdOutlineRoomPreferences className="text-color-lightColor dark:text-color-heading text-xl" />
                  <Link
                    to="/dashboard/room-management"
                    className="text-color-lightColor dark:text-color-heading text-lg"
                  >
                    Room Management
                  </Link>
                </li>

                <li className="py-4 px-5 flex items-center gap-4 bg-transparent transform-colors duration-300 hover:bg-color-baseColor cursor-pointer">
                  <FaCheckToSlot className="text-color-lightColor dark:text-color-heading text-xl" />
                  <Link
                    to="/dashboard/slot-management"
                    className="text-color-lightColor dark:text-color-heading text-lg"
                  >
                    Slot Management
                  </Link>
                </li>
                <li className="py-4 px-5 flex items-center gap-4 bg-transparent transform-colors duration-300 hover:bg-color-baseColor cursor-pointer">
                  <TbBrandBooking className="text-color-lightColor dark:text-color-heading text-xl" />
                  <Link
                    to="/dashboard/booking-management"
                    className="text-color-lightColor dark:text-color-heading text-lg"
                  >
                    Booking Management
                  </Link>
                </li>
              </ul>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default DashboardSidebarMenuItems;
