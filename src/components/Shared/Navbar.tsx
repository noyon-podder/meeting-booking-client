import { Link } from "react-router-dom";
import MenuItems from "@/pages/Home/MenuItems";
import { ModeToggle } from "./ModeToggle";
import SidebarMenuItems from "@/pages/Home/SidebarMenuItems";
import Container from "../Container";
// import LoginModal from "@/pages/Login/LoginModal";
// import { useAppDispatch, useAppSelector } from "@/redux/hook";
// import { modalOpen, setModalOpen } from "@/redux/features/auth/authSlice";
// import { FieldValues, SubmitHandler } from "react-hook-form";

const Navbar = () => {
  // login modal functionality for protect route use
  // const isOpen = useAppSelector(modalOpen);
  // const dispatch = useAppDispatch();
  // const handleCloseModal = () => {
  //   dispatch(setModalOpen(false));
  // };

  // const handleLoginModalSubmit: SubmitHandler<FieldValues> = (data) => {
  //   console.log(data);
  //   dispatch(setModalOpen(false));
  // };
  return (
    <div className="sticky z-50 top-0 left-0 w-full dark:border-b  py-3 dark:bg-color-darkBaseColor bg-color-baseColor">
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/">
            <h2 className="text-white lg:text-[32px] text-[22px] font-bold font-mono">
              ScheduliFy
            </h2>
          </Link>
          <div className="hidden lg:block">
            <MenuItems />
          </div>
          <div className="flex items-center lg:gap-6 gap-2">
            <Link
              to="/register"
              className="px-[16px] py-[5px] text-color-baseColor font-semibold rounded-[2px] hover:bg-color-darkHeading block bg-white"
            >
              Register
            </Link>

            <ModeToggle />

            {/* for mobile device menu bar show  */}
            <div className="lg:hidden">
              <SidebarMenuItems />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
