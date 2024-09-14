/* eslint-disable @typescript-eslint/no-explicit-any */
import GlobalForm from "@/components/form/GlobalForm";
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
import { useUpdateSlotMutation } from "@/redux/features/slot/slotApi";
import { TSlot } from "@/types";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

import { GoPencil } from "react-icons/go";

const SlotUpdateModal = ({ slot }: { slot: TSlot }) => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [slotUpdate] = useUpdateSlotMutation();

  const timeOptions = hours.map((item) => ({
    value: item,
    label: item,
  }));

  const handleRoomUpdate: SubmitHandler<FieldValues> = async () => {
    const updateSlotData = {
      slotId: slot?._id,
      startTime: startTime,
      endTime: endTime,
    };

    console.log(updateSlotData);
    try {
      const res: any = await slotUpdate(updateSlotData);

      if (res.error) {
        toast.error(res.error.data.message);
      } else {
        toast.success("Slot Update Successfully");
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-[30px] h-[30px] text-white dark:bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-400 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer">
          <GoPencil className="text-base " />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            Update your rooms
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="">
          <GlobalForm onSubmit={handleRoomUpdate}>
            {/* Start Time Selector */}
            <div className="mt-3">
              <h2 className="font-semibold mb-2">Start Time</h2>
              <select
                onChange={(e) => setStartTime(e.target.value)}
                name=""
                defaultValue={slot?.startTime}
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
                defaultValue={slot?.endTime}
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
            <Button
              type="submit"
              className="bg-color-baseColor text-white hover:bg-color-baseLightColor"
            >
              Update
            </Button>
          </GlobalForm>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SlotUpdateModal;
