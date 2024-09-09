import { useGetSingleRoomQuery } from "@/redux/features/slot/slotApi";
import { useAppSelector } from "@/redux/hook";
import { FaCheck } from "react-icons/fa6";

const SuccessView = () => {
  const bookingInfo = useAppSelector((state) => state.booking);
  const { data: roomData } = useGetSingleRoomQuery(bookingInfo?.roomId);

  console.log(roomData);

  return (
    <div className="h-screen flex items-center justify-center flex-col text-center">
      <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
        <FaCheck className="text-4xl text-white" />
      </div>
      <h2 className="text-4xl mt-2 font-mono">Success</h2>

      <div className="mt-3">
        Your booking has been successfully made.
        <h2 className="mt-6">
          Your Room Name <b className="mx-1">{roomData?.data?.name}.</b>
          Your Room No <b className="mx-1">{roomData?.data?.roomNo}.</b>
        </h2>
        <p className="mt-5">
          Date:
          <b> {bookingInfo?.date}</b>
        </p>
      </div>
    </div>
  );
};

export default SuccessView;
