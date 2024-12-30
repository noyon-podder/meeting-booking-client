/**
 * Title: Write a program using TypeScript on FooterBottom
 * Author: Noyon Podder
 * Portfolio: https://dev-noyon.vercel.app/
 * Linkedin: https://linkedin.com/in/dev-noyon
 * GitHub: https://github.com/noyon-podder
 * Facebook: https://www.facebook.com/noyon.Podder7/
 * Instagram: https://www.instagram.com/noyon.podder7/
 * Twitter: https://x.com/noyon_podder7
 * WhatsApp: https://wa.me/8801752441505
 * Telegram: https://t.me/Noyonpodder7
 * Date: 28 December 2024
 */

import { Link } from "react-router-dom";
import Container from "../Container";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "../../icons/ReactIcons";

const FooterBottom = () => {
  return (
    <div className="dark:bg-color-darkBaseColor bg-color-baseColor">
      <Container>
        <div className="flex flex-col items-center sm:flex-row sm:justify-between py-3 ">
          <p className="text-sm text-gray-200 dark:text-color-darkHeading">
            © Copyright 2024. All Rights Reserved By Noyon Podder.
          </p>

          <div className="flex items-center gap-4 mt-7 lg:mt-0">
            <Link
              to=""
              className="w-8 h-8 leading-8 border flex items-center justify-center rounded-full dark:border-color-baseColor dark:text-white bg-transparent dark:hover:bg-color-baseColor hover:text-color-lightColor text-white bg-[#1A4FA0] hover:bg-color-cardColor border-[#1A4FA0] duration-300 shadow-sm"
            >
              <FaFacebookF size={18} className="" />
            </Link>

            <Link
              to=""
              className="w-8 h-8 leading-8 border flex items-center justify-center rounded-full dark:border-color-baseColor dark:text-white bg-transparent dark:hover:bg-color-baseColor hover:text-color-lightColor text-white bg-[#1A4FA0] hover:bg-color-cardColor border-[#1A4FA0] duration-300 shadow-sm"
            >
              <FaInstagram size={18} className="" />
            </Link>

            <Link
              to=""
              className="w-8 h-8 leading-8 border flex items-center justify-center rounded-full dark:border-color-baseColor dark:text-white bg-transparent dark:hover:bg-color-baseColor hover:text-color-lightColor text-white bg-[#1A4FA0] hover:bg-color-cardColor border-[#1A4FA0] duration-300 shadow-sm"
            >
              <FaLinkedinIn size={18} className="" />
            </Link>

            <Link
              to=""
              className="w-8 h-8 leading-8 border flex items-center justify-center rounded-full dark:border-color-baseColor dark:text-white bg-transparent dark:hover:bg-color-baseColor hover:text-color-lightColor text-white bg-[#1A4FA0] hover:bg-color-cardColor border-[#1A4FA0] duration-300 shadow-sm"
            >
              <FaXTwitter size={18} className="" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterBottom;
