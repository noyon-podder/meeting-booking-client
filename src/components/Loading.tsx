/**
 * Title: Write a program using JavaScript on Loading
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

import { AiOutlineLoading } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="flex items-center gap-3 justify-center lg:py-20 py-10">
      <AiOutlineLoading
        className="animate-spin text-color-darkBaseColor dark:text-color-darkTextColor"
        size={20}
      />
      <p className=" text-color-darkBaseColor dark:text-color-darkTextColor">
        Loading...
      </p>
    </div>
  );
};

export default Loading;
