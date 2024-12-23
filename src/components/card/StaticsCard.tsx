/**
 * Title: Write a program using TypeScript on StaticsCard
 * Author: Noyon Podder
 * Portfolio: https://dev-noyon.vercel.app/
 * Linkedin: https://linkedin.com/in/dev-noyon
 * GitHub: https://github.com/noyon-podder
 * Facebook: https://www.facebook.com/noyon.Podder7/
 * Instagram: https://www.instagram.com/noyon.podder7/
 * Twitter: https://x.com/noyon_podder7
 * WhatsApp: https://wa.me/8801752441505
 * Telegram: https://t.me/Noyonpodder7
 * Date: 23 December 2024
 */

import { LucideIcon } from "lucide-react";
interface IProps {
  icon: LucideIcon;
  title: string;
  amount: number;
  bgColor: string;
  iconColor: string;
}

const StaticsCard = ({
  icon: Icon,
  title,
  amount,
  bgColor,
  iconColor,
}: IProps) => {
  return (
    <div className="p-5 bg-white  dark:bg-color-cardColor rounded-xl border border-[#e7e7e7e7] dark:border-color-darkBaseColor flex items-center gap-10">
      <div
        className={`size-16 rounded-2xl flex items-center justify-center ${bgColor}`}
      >
        <Icon size={32} className={`${iconColor}`} />
      </div>
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{amount}</p>
      </div>
    </div>
  );
};

export default StaticsCard;
