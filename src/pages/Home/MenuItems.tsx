import { menuData } from "@/data/data";
import { NavLink } from "react-router-dom";

const MenuItems = () => {
  return (
    <>
      <ul className=" items-center xl:gap-3 lg:gap-1  hidden lg:flex">
        {menuData.map(({ id, path, text }) => (
          <li key={id}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                `text-base px-4 py-2 text-color-lightColor bg-transparent transition-colors duration-150 ease-in rounded-[25px] block ${
                  isActive
                    ? "bg-[#1A4FA0] hover:bg-[#145A9D]"
                    : "hover:bg-[#1A4FA0]"
                }`
              }
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuItems;
