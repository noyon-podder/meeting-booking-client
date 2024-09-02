import { AllRoomTable } from "./AllRoomTable";
import CreateRoomModal from "./CreateRoomModal";

const RoomManagement = () => {
  return (
    <div className="lg:p-10 p-5">
      <div className="flex items-center justify-between mb-10">
        <h2 className="lg:text-4xl text-3xl font-semibold text-color-darkBaseColor dark:text-color-lightColor">
          All Rooms{" "}
        </h2>
        <CreateRoomModal />
      </div>

      <AllRoomTable />
    </div>
  );
};

export default RoomManagement;
