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
import Logo from "/logo.svg";
import { Check } from "lucide-react";
import Room from "/3.jpg";
import Banner from "/aboutBanner.jpg";

const Footer = () => {
  const footerLinks = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Meeting Rooms", link: "/meeting-rooms" },
    { id: 3, name: "About Us", link: "/about" },
    { id: 4, name: "Contact Us", link: "/contact" },
    { id: 4, name: "Privacy Policy", link: "/contact" },
    { id: 4, name: "Terms & Condition", link: "/contact" },
  ];
  return (
    <>
      <footer
        className="relative w-full h-auto  flex items-center justify-center py-5 lg:py-10"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        // className="dark:bg-color-darkBaseColor bg-color-baseColor border-t py-5 lg:py-10 border-b  border-color-baseLightColor dark:border-color-cardColor "
      >
        <div className="gradient-overlay opacity-90" />
        <Container>
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4  lg:pt-10 pt-5 ">
            <div className="lg:col-span-3 pr-5">
              <Link to="/" className="w-[180px] h-auto flex items-center">
                <img src={Logo} alt="" className="w-full h-full" />
              </Link>

              <p className="text-gray-300 mt-5">
                12, S. B Road, Aruapara, Kushtia
              </p>
              <p className="mt-1 text-gray-300">
                <span className="font-semibold">Email: </span>
                noyon.podder7@gmail.com
              </p>

              <div className="w-full h-[40px] flex items-center mt-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-[40px] px-4 text-black py-2 rounded-l-md focus:outline-none border border-gray-300 dark:border-gray-600"
                  required
                />
                <button
                  type="submit"
                  className=" bg-color-baseColor w-[120px] h-[40px] text-white rounded-r-md hover:bg-color-baseLightColor transition duration-300 dark:bg-color-baseLightColor dark:hover:bg-blue-600"
                >
                  Sign Up
                </button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-white font-semibold text-lg">Links</h3>

              <ul className="mt-5">
                {footerLinks.map((link) => (
                  <li
                    key={link.id}
                    className="mb-1 text-gray-300 hover:text-white flex items-center gap-2"
                  >
                    <span className="p-[1px] size-4 rounded-full bg-color-baseLightColor flex items-center justify-center">
                      <Check className="text-white" />
                    </span>
                    <Link to={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h3 className="text-white font-semibold text-lg">
                Popular Rooms
              </h3>

              <ul className="mt-5">
                <li className="mb-4">
                  <div className="flex items-start gap-2">
                    <div className="w-[100px]">
                      <img src={Room} alt="" />
                    </div>
                    <p className="text-gray-300 font-semibold text-sm cursor-pointer hover:text-white">
                      Teleconference hub
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-2">
                    <div className="w-[100px]">
                      <img src={Room} alt="" />
                    </div>
                    <p className="text-gray-300 font-semibold text-sm cursor-pointer hover:text-white">
                      Conference room
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <div className="h-[200px] w-full ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14591.755482822766!2d89.1420171!3d23.89178625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1735497729614!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </Container>
      </footer>
      <FooterBottom />
    </>
  );
};

export default Footer;
