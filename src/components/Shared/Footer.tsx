/**
 * Title: Write a program using JavaScript on Footer
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

import { Link } from "react-router-dom";

import Container from "../Container";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <>
      <footer className="dark:bg-color-darkBaseColor bg-color-baseColor border-t py-5 lg:py-5 border-b  border-color-baseLightColor">
        <Container>
          <div className="flex flex-col items-center text-center">
            <Link to="/">
              <h2 className="text-color-baseColor dark:text-color-darkHeading lg:text-[32px] text-[22px] font-bold font-mono">
                ScheduliFy
              </h2>
            </Link>

            <div className="flex flex-wrap justify-center mt-6 gap-5">
              <Link
                to={"/"}
                className="text-base px-4 py-2 text-color-heading bg-transparent transition-colors duration-150 ease-in hover:bg-[#1A4FA0] hover:text-color-lightColor dark:text-color-lightColor rounded-[25px] block"
              >
                Home
              </Link>

              <Link
                to={"/meeting-rooms"}
                className="text-base px-4 py-2 text-color-heading bg-transparent transition-colors duration-150 ease-in hover:bg-[#1A4FA0] hover:text-color-lightColor dark:text-color-lightColor rounded-[25px] block"
              >
                Meeting Rooms
              </Link>
              <Link
                to={"/about"}
                className="text-base px-4 py-2 text-color-heading bg-transparent transition-colors duration-150 ease-in hover:bg-[#1A4FA0] hover:text-color-lightColor dark:text-color-lightColor rounded-[25px] block"
              >
                About Us
              </Link>
              <Link
                to={"/contact"}
                className="text-base px-4 py-2 text-color-heading bg-transparent transition-colors duration-150 ease-in hover:bg-[#1A4FA0] hover:text-color-lightColor dark:text-color-lightColor rounded-[25px] block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </footer>
      <FooterBottom />
    </>
  );
};

export default Footer;
