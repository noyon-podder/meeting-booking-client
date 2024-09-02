import GlobalForm from "@/components/form/GlobalForm";
import GlobalInput from "@/components/form/GlobalInput";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  useGetSingleRoomQuery,
  useUpdateRoomMutation,
} from "@/redux/features/rooms/roomApi";
import { FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

import { GoPencil } from "react-icons/go";

const RoomUpdateModal = ({ roomId }: { roomId: string }) => {
  const { data: singleRoom } = useGetSingleRoomQuery(roomId);
  const [roomUpdate] = useUpdateRoomMutation();

  const handleRoomUpdate: SubmitHandler<FieldValues> = async (data) => {
    const updateDataInfo = {
      roomUpdateData: {
        name: data?.name,
        roomNo: Number(data?.roomNo),
        capacity: Number(data?.capacity),
        pricePerSlot: Number(data?.pricePerSlot),
        florNo: Number(data?.florNo),
      },
      roomId: roomId,
    };

    try {
      const res: any = await roomUpdate(updateDataInfo);

      if (res.error) {
        toast.error(res.error.data.message);
      } else {
        toast.success("Room Update Successfully");
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
            <GlobalInput
              type="text"
              name="Name"
              label="Room Name"
              defaultValue={singleRoom?.data?.name}
            />
            <GlobalInput
              type="number"
              name="roomNo"
              label="Room Number"
              defaultValue={singleRoom?.data?.roomNo}
            />
            <GlobalInput
              type="number"
              name="floorNo"
              label="Floor No"
              defaultValue={singleRoom?.data?.floorNo}
            />
            <GlobalInput
              type="number"
              name="capacity"
              label="Capacity"
              defaultValue={singleRoom?.data?.capacity}
            />
            <GlobalInput
              type="number"
              name="pricePerSlot"
              label="Price"
              defaultValue={singleRoom?.data?.pricePerSlot}
            />
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

export default RoomUpdateModal;
