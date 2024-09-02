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
import { useRoomCreateMutation } from "@/redux/features/rooms/roomApi";
import { customStyles } from "@/styles/multiSelectStyle";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import Select, { MultiValue } from "react-select";

const options = [
  { value: "tv", label: "TV" },
  { value: "moboile", label: "Mobile" },
  { value: "wifi", label: "Wifi" },
];

const CreateRoomModal = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [roomCreate, { isLoading }] = useRoomCreateMutation();
  const [selectedAminties, setSelectedAminties] = useState<
    { value: string; label: string }[]
  >([]);
  const [isOpen, setIsOpen] = useState(false);

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
      amenities: selectedAminties.map((amenity) => amenity.value),
    };

    console.log(createNewRoomData);

    try {
      const res: any = await roomCreate(createNewRoomData);

      console.log(res);

      if (res.error) {
        toast.error(res.error.data.message);
      } else {
        toast.success("Room Create Successfully");
        setIsOpen(false);
        setImageUrls([]);
        setSelectedAminties([]);
      }
      console.log(res);
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    }
  };

  // Wrapper function for handling multi-select change
  const handleSelectChange = (
    newValue: MultiValue<{ value: string; label: string }>
  ) => {
    setSelectedAminties(newValue as { value: string; label: string }[]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
            <div className="">
              <MultiImageUpload
                imageUrls={imageUrls}
                setImageUrls={setImageUrls}
              />
            </div>

            {/* multi select */}
            <div className="mt-2">
              <Select
                isMulti
                onChange={handleSelectChange}
                options={options}
                styles={customStyles}
              />
            </div>

            {isLoading ? (
              <>
                <Button
                  disabled
                  className="w-full bg-color-baseColor text-white"
                >
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              </>
            ) : (
              <>
                {" "}
                <Button
                  type="submit"
                  className="w-full bg-color-baseColor text-white hover:bg-color-baseLightColor"
                >
                  Submit
                </Button>
              </>
            )}
          </GlobalForm>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateRoomModal;
