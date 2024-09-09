import { Link } from "react-router-dom";
import { AllRoomTable } from "./AllRoomTable";

const RoomManagement = () => {
  return (
    <div className="lg:p-10 p-5">
      <div className="flex items-center justify-between mb-10">
        <h2 className="lg:text-4xl text-3xl font-semibold text-color-darkBaseColor dark:text-color-lightColor">
          All Rooms{" "}
        </h2>
        {/* <CreateRoomModal /> */}
        <Link
          to="/dashboard/create-room"
          className="px-4 py-[10px] rounded-md dark:bg-color-darkBaseColor bg-color-baseColor  text-white font-medium "
        >
          Create Room
        </Link>
      </div>

      <AllRoomTable />
    </div>
  );
};

export default RoomManagement;
