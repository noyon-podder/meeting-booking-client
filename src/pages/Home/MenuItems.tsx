import { menuData } from "@/data/data";
import { Link, useLocation } from "react-router-dom";

const MenuItems = () => {
  const router = useLocation();

  console.log(router);

  return (
    <>
      <ul className="items-center xl:gap-3 lg:gap-1 hidden lg:flex">
        {menuData.map(({ id, path, text }) => (
          <li key={id}>
            <Link
              to={path}
              className={`text-base px-4 py-2 text-color-lightColor  transition-colors duration-150 ease-in rounded-[25px] block ${
                router.pathname === path
                  ? "bg-[#1A4FA0]"
                  : " hover:bg-[#1A4FA0] bg-transparent"
              }`}
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
