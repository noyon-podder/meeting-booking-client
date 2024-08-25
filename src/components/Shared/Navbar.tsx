import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <div className=" dark:border-b dark:bg-transparent py-5 bg-color-baseColor">
      <div className="container flex items-center justify-between">
        <h2 className="text-2xl dark:text-white text-red-700">Logo</h2>
        <ModeToggle />
      </div>

      <div className="mt-10 w-[500px] mx-auto"></div>
    </div>
  );
};

export default Navbar;
