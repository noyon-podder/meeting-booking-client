/**
 * Title: Write a program using TypeScript on DashboardStaticsCard
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

import StaticsCard from "@/components/card/StaticsCard";
import {
  BedSingle,
  BookMarked,
  SquareActivity,
  UsersRound,
} from "lucide-react";

const DashboardStaticsCard = () => {
  return (
    <div className="lg:px-10 px-5 py-5">
      <h2 className="text-lg font-semibold mb-5">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Render statics cards */}
        <StaticsCard
          icon={SquareActivity}
          title={"Total Room"}
          amount={1200}
          bgColor={"bg-green-500/30"}
          iconColor={"text-green-500"}
        />
        <StaticsCard
          icon={BookMarked}
          title={"Total Bookings"}
          amount={1200}
          bgColor={"bg-purple-500/30"}
          iconColor={"text-purple-500"}
        />
        <StaticsCard
          icon={UsersRound}
          title={"Total Users"}
          amount={1200}
          bgColor={"bg-pink-500/30"}
          iconColor={"text-pink-500"}
        />
        <StaticsCard
          icon={BedSingle}
          title={"Available Slots"}
          amount={1200}
          bgColor={"bg-red-500/30"}
          iconColor={"text-red-500"}
        />
      </div>
    </div>
  );
};

export default DashboardStaticsCard;
