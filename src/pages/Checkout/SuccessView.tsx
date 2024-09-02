import { useAppSelector } from "@/redux/hook";

const SuccessView = () => {
  const bookingInfo = useAppSelector((state) => state.booking);

  console.log("success", { bookingInfo });
  return (
    <div className="h-screen flex items-center justify-center ">
      <h2 className="">Your Booking Success</h2>
    </div>
  );
};

export default SuccessView;
