import { Charts } from "@/components/charts/Charts";

import DashboardStaticsCard from "./Home/DashboardStaticsCard";

import SimpleRadarChart from "@/components/charts/SimpleRadarChart";

import AllBooking from "./booking/AllBooking";

const Dashboard = () => {
  return (
    <>
      <DashboardStaticsCard />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:px-10 px-5 py-5">
        <Charts />
        <div className="bg-white dark:bg-color-cardColor md:h-auto h-[300px] rounded-lg">
          <SimpleRadarChart />
        </div>
      </div>

      <div className="lg:px-10 px-5 ">
        <h2 className="text-2xl font-semibold mb-5 mt-10">Slot Booking List</h2>
        {/* <AllRoomTable /> */}
        <AllBooking />
      </div>
    </>
  );
};

export default Dashboard;
