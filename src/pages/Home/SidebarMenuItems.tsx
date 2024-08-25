import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { HiOutlineBars3BottomRight } from "../../icons/ReactIcons";

import { menuData } from "@/data/data";
import { Link } from "react-router-dom";

const SidebarMenuItems = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <HiOutlineBars3BottomRight
          size={32}
          className="text-white cursor-pointer"
        />
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetDescription>
            <div className="flex items-center justify-center h-full w-full mt-20">
              <ul className=" items-center gap-3 flex lg:flex-row flex-col">
                {menuData.map(({ id, path, text }) => (
                  <li key={id}>
                    <Link
                      to={path}
                      className="text-base px-4 py-2 text-color-heading dark:text-white bg-transparent transition-colors duration-150 ease-in hover:bg-[#1A4FA0] hover:text-white rounded-[25px] block"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SidebarMenuItems;
