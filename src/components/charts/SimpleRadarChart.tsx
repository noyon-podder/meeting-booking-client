/**
 * Title: Write a program using TypeScript on PieChartWithNeedle
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

import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Meeting Room",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Guest Room",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Trending Room",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Memory Room",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Hiddle Room",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "Personal Room",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const SimpleRadarChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#0057B8"
          fill="#0057B8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default SimpleRadarChart;
