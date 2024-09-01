import GlobalForm from "@/components/form/GlobalForm";
import GlobalInput from "@/components/form/GlobalInput";
import MultiImageUpload from "@/components/Shared/MultiImageUpload";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

import { FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

const CreateRoomModal = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const handleRoomCreate: SubmitHandler<FieldValues> = async (data) => {
    console.log({ imageUrls });
    console.log({ data });

    const createNewRoomData = {
      name: data?.name,
      roomNo: Number(data?.roomNo),
      floorNo: Number(data?.floorNo),
      capacity: Number(data?.capacity),
      pricePerSlot: Number(data?.pricePerSlot),
      images: imageUrls,
    };

    console.log(createNewRoomData);

    // try {
    //   const res: any = await roomUpdate(updateDataInfo);

    //   console.log(res);

    //   if (res.error) {
    //     toast.error(res.error.data.message);
    //   } else {
    //     toast.success("Room Update Successfully");
    //   }
    //   console.log(res);
    // } catch (err) {
    //   toast.error("Something went wrong");
    //   console.log(err);
    // }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-color-baseColor text-white hover:bg-color-baseLightColor">
          Create Room
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            Create New Room
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="">
          <GlobalForm onSubmit={handleRoomCreate}>
            <GlobalInput type="text" name="name" label="Room Name" />
            <GlobalInput type="number" name="roomNo" label="Room Number" />
            <GlobalInput type="number" name="floorNo" label="Floor No" />
            <GlobalInput type="number" name="capacity" label="Capacity" />
            <GlobalInput type="number" name="pricePerSlot" label="Price" />
            {/* multi image uploader */}
            <MultiImageUpload
              imageUrls={imageUrls}
              setImageUrls={setImageUrls}
            />
            <Button
              type="submit"
              className="mt-5 bg-color-baseColor hover:bg-color-baseLightColor text-white"
              disabled={imageUrls.length < 3}
            >
              Create Room
            </Button>
          </GlobalForm>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateRoomModal;
