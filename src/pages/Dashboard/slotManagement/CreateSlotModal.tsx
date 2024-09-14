/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { hours } from "@/constants/global";
import { useGetRoomsQuery } from "@/redux/features/rooms/roomApi";
import { useSlotCreateMutation } from "@/redux/features/slot/slotApi";
import { TRoom } from "@/types";
import { Loader2 } from "lucide-react";
import GlobalForm from "@/components/form/GlobalForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { SelectData } from "@/components/SelectData";
import moment from "moment";

const CreateSlotModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectRoomName, setSelectRoomName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [date, setDate] = useState<Date>();
  const { data: roomData } = useGetRoomsQuery({});
  const [slotCreate, { isLoading }] = useSlotCreateMutation();

  const timeOptions = hours.map((item) => ({
    value: item,
    label: item,
  }));

  const handelSlotCreate: SubmitHandler<FieldValues> = async (data) => {
    // Validate that startTime is not greater than endTime
    if (startTime && endTime && startTime > endTime) {
      toast.error("Start time cannot be greater than end time.");
      return;
    }

    console.log(data);

    const slotData = {
      date: moment(date).format("YYYY-MM-DD"),
      startTime: startTime,
      endTime: endTime,
      room: selectRoomName,
    };

    // Logic to handle slot creation goes here
    try {
      const res: any = await slotCreate(slotData);

      if (res.error) {
        toast.error(res.error.data.message);
      } else {
        toast.success("Slot Create Successfully");
        setIsOpen(false);
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-color-baseColor text-white hover:bg-color-baseLightColor">
          Create Slot
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            Create New Slot
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="">
          <GlobalForm onSubmit={handelSlotCreate}>
            {/* Room Name Selector */}

            <div className="mt-3">
              <h2 className="font-semibold mb-2">Room name</h2>
              <select
                onChange={(e) => setSelectRoomName(e.target.value)}
                name=""
                id=""
                className="w-full border py-3 outline-none bg-[#f4f4f4] dark:bg-color-cardColor px-[15px] "
              >
                <option value="">Select End Time</option>
                {roomData?.data?.map((item: TRoom) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            {/* Date Picker */}
            <div className="mt-2">
              <h2 className="font-semibold mb-2">Date</h2>
              <SelectData date={date} setDate={setDate} />
            </div>

            {/* Start Time Selector */}
            <div className="mt-3">
              <h2 className="font-semibold mb-2">Start Time</h2>
              <select
                onChange={(e) => setStartTime(e.target.value)}
                name=""
                id=""
                className="w-full border py-3 outline-none bg-[#f4f4f4] dark:bg-color-cardColor px-[15px] "
              >
                <option value="">Select End Time</option>
                {timeOptions.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            {/* End Time Selector */}
            <div className="mt-3">
              <h2 className="font-semibold mb-2">End Time</h2>
              <select
                onChange={(e) => setEndTime(e.target.value)}
                name=""
                id=""
                className="w-full border py-3 outline-none bg-[#f4f4f4] dark:bg-color-cardColor px-[15px] "
              >
                <option value="">Select End Time</option>
                {timeOptions.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="mt-3">
              {isLoading ? (
                <Button
                  disabled
                  className="w-full bg-color-baseColor text-white"
                >
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="w-full bg-color-baseColor text-white hover:bg-color-baseLightColor"
                >
                  Submit
                </Button>
              )}
            </div>
          </GlobalForm>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateSlotModal;
