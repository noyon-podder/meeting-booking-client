/**
 * Title: Write a program using JavaScript on ModeToggle
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

import Sun from "/sun.png";
import Moon from "/moon.png";

import { useTheme } from "@/context/ThemeProvider";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      <div className="flex items-center justify-between w-[60px] h-[25px] border border-color-darkBaseColor rounded-[20px] p-1 bg-color-darkBaseColor dark:bg-white dark:border-white  cursor-pointer relative">
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
