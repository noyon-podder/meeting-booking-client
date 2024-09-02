import { Link } from "react-router-dom";
import { MdOutlineRoomPreferences } from "react-icons/md";
import { FaCheckToSlot } from "react-icons/fa6";
import { TbBrandBooking } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="w-[300px] bg-color-cardColor h-screen lg:block hidden fixed top-0 left-0">
      <div className="py-5 border-b border-color-darkBaseColor">
        <Link
          to="/"
          className="text-color-lightColor text-center text-2xl font-semibold block"
        >
          Schedulify
        </Link>
      </div>

      {/* navbar  */}
      <ul className="mt-5">
        <li className="py-4 px-5 flex items-center gap-4 bg-transparent transform-colors duration-300 hover:bg-color-baseColor cursor-pointer">
          <MdOutlineRoomPreferences className="text-color-lightColor text-xl" />
          <Link
            to="/dashboard/room-management"
            className="text-color-lightColor"
          >
            Room Management
          </Link>
        </li>

        <li className="py-4 px-5 flex items-center gap-4 bg-transparent transform-colors duration-300 hover:bg-color-baseColor cursor-pointer">
          <FaCheckToSlot className="text-color-lightColor text-xl" />
          <Link
            to="/dashboard/slot-management"
            className="text-color-lightColor"
          >
            Slot Management
          </Link>
        </li>
        <li className="py-4 px-5 flex items-center gap-4 bg-transparent transform-colors duration-300 hover:bg-color-baseColor cursor-pointer">
          <TbBrandBooking className="text-color-lightColor text-xl" />
          <Link
            to="/dashboard/booking-management"
            className="text-color-lightColor"
          >
            Booking Management
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
