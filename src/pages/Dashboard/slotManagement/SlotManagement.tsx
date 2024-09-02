import { AllSlotTable } from "./AllSlotTable";
import CreateSlotModal from "./CreateSlotModal";

const SlotManagement = () => {
  return (
    <div className="lg:p-10 p-5">
      <div className="flex items-center justify-between mb-10">
        <h2 className="lg:text-4xl text-3xl font-semibold text-color-darkBaseColor dark:text-color-lightColor">
          All Slots{" "}
        </h2>
        <CreateSlotModal />
      </div>

      <AllSlotTable />
    </div>
  );
};

export default SlotManagement;
