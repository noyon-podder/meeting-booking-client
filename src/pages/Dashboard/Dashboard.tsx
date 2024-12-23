import { Charts } from "@/components/charts/Charts";
import SynchronizeAreaChart from "@/components/charts/SynchronizeAreaChart";
import DashboardStaticsCard from "./Home/DashboardStaticsCard";

const Dashboard = () => {
  return (
    <>
      <DashboardStaticsCard />
      <div className="grid grid-cols-2 gap-5 lg:px-10 px-5 py-5">
        <Charts />
        <SynchronizeAreaChart />
      </div>
    </>
  );
};

export default Dashboard;
