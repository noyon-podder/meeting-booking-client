import { Link } from "react-router-dom";

import MenuItems from "@/pages/Home/MenuItems";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <div className=" dark:border-b dark:bg-transparent py-3 dark:bg-color-darkBaseColor bg-color-baseColor">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <h2 className="text-white text-[32px] font-bold font-mono">
            ScheduliFy
          </h2>
        </Link>
        <MenuItems />
        <div className="flex items-center gap-6">
          <Link
            to="/register"
            className="text-base px-4 py-2 text-color-lightColor bg-transparent transition-colors duration-150 ease-in hover:bg-[#1A4FA0] rounded-[25px] block"
          >
            Register
          </Link>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
