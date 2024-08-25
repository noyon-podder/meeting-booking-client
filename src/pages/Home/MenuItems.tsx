import { ModeToggle } from "@/components/Shared/ModeToggle";
import { Link } from "react-router-dom";

const MenuItems = () => {
  const menu = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 4,
      path: "/meeting-rooms",
      text: "Meeting Rooms",
    },
    {
      id: 2,
      path: "/about",
      text: "About Us",
    },
    {
      id: 3,
      path: "/contact",
      text: "Contact Us",
    },
  ];
  return (
    <>
      <ul className="flex items-center gap-3">
        {menu.map(({ id, path, text }) => (
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
