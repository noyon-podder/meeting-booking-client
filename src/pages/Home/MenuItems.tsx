import { menuData } from "@/data/data";
import { Link } from "react-router-dom";

const MenuItems = () => {
  return (
    <>
      <ul className=" items-center xl:gap-3 lg:gap-1  hidden lg:flex">
        {menuData.map(({ id, path, text }) => (
          <li key={id}>
            <Link
              to={path}
              className="text-base px-4 py-2 text-color-lightColor bg-transparent transition-colors duration-150 ease-in hover:bg-[#1A4FA0] rounded-[25px] block"
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuItems;
