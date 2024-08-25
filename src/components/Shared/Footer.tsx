import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "../../icons/ReactIcons";
import Container from "../Container";

const Footer = () => {
  return (
    <>
      <footer className="bg-color-lightColor dark:bg-[#0c101b] border-t py-5 lg:py-10">
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
        <hr className="my-6 border-gray-200 md:my-10 dark:border-color-darkBaseColor" />

        <Container>
          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-500 dark:text-color-darkHeading">
              © Copyright 2024. All Rights Reserved By Noyon Podder.
            </p>

            <div className="flex items-center gap-4 mt-7 lg:mt-0">
              <Link
                to=""
                className="w-8 h-8 leading-8 border flex items-center justify-center rounded-full border-color-baseColor text-color-baseColor bg-transparent hover:bg-color-baseColor hover:text-color-lightColor duration-300 shadow-sm"
              >
                <FaFacebookF size={18} className="" />
              </Link>

              <Link
                to=""
                className="w-8 h-8 leading-8 border flex items-center justify-center rounded-full border-color-baseColor text-color-baseColor bg-transparent hover:bg-color-baseColor hover:text-color-lightColor duration-300 shadow-sm"
              >
                <FaInstagram size={18} className="" />
              </Link>

              <Link
                to=""
                className="w-8 h-8 leading-8 border flex items-center justify-center rounded-full border-color-baseColor text-color-baseColor bg-transparent hover:bg-color-baseColor hover:text-color-lightColor duration-300 shadow-sm"
              >
                <FaLinkedinIn size={18} className="" />
              </Link>

              <Link
                to=""
                className="w-8 h-8 leading-8 border flex items-center justify-center rounded-full border-color-baseColor text-color-baseColor bg-transparent hover:bg-color-baseColor hover:text-color-lightColor duration-300 shadow-sm"
              >
                <FaXTwitter size={18} className="" />
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
