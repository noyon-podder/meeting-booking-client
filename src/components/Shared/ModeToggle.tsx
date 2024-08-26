import Sun from "/sun.png";
import Moon from "/moon.png";

import { useTheme } from "@/context/ThemeProvider";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      <div className="flex items-center justify-between w-[60px] h-[25px] border border-color-darkBaseColor rounded-[20px] p-1 bg-color-darkBaseColor dark:bg-white dark:border-white  cursor-pointer relative ">
        <img
          src={Moon}
          alt=""
          width={20}
          height={20}
          onClick={() => setTheme("dark")}
        />
        <div
          className={`w-5 h-5 bg-white dark:bg-color-darkBaseColor  rounded-full absolute  transition-transform duration-300 ease-out ${
            theme === "dark" ? "left-1" : "right-1"
          }`}
        ></div>
        <img
          src={Sun}
          alt=""
          width={20}
          height={20}
          onClick={() => setTheme("light")}
        />
      </div>
    </>
  );
}
