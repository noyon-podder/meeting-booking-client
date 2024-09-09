import Container from "@/components/Container";
import GlobalForm from "@/components/form/GlobalForm";
import GlobalInput from "@/components/form/GlobalInput";
import MultiImageUpload from "@/components/Shared/MultiImageUpload";
import { Button } from "@/components/ui/button";
import createRoomValidationSchema from "@/schema/createRoomValidationSchema";
import Select, { MultiValue, StylesConfig } from "react-select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

import { useRoomCreateMutation } from "@/redux/features/rooms/roomApi";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { OptionType } from "@/types";

const CreateRoom = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [imageError, setImageError] = useState("");
  const [selectedAminties, setSelectedAminties] = useState<
    { value: string; label: string }[]
  >([]);
  const navigate = useNavigate();

  const options = [
    { value: "tv", label: "TV" },
    { value: "mobile", label: "Mobile" }, // Fixed spelling here
    { value: "wifi", label: "Wifi" },
  ];

  const [roomCreate, { isLoading }] = useRoomCreateMutation();

  const handleSelectChange = (
    newValue: MultiValue<{ value: string; label: string }>
  ) => {
    setSelectedAminties(newValue as { value: string; label: string }[]);
  };

  const handleRoomCreate: SubmitHandler<FieldValues> = async (data) => {
    // Check if image file is required
    if (imageUrls.length === 0) {
      setImageError("Image is required");
      return;
    }

    const roomData = {
      name: data.name,
      roomNo: Number(data.roomNo),
      capacity: Number(data.capacity),
      pricePerSlot: Number(data.pricePerSlot),
      floorNo: Number(data.floorNo),
      images: imageUrls,
      amenities: selectedAminties.map((item) => item.value),
    };

    console.log(roomData); // Debugging to check roomData structure

    try {
      const res: any = await roomCreate(roomData);

      if (res.error) {
        toast.error(res.error.data.message);
      } else {
        toast.success("Room Created Successfully");

        // Resetting states
        setImageError("");
        setImageUrls([]);
        console.log("Image URLs after reset:", imageUrls); // Debugging
        navigate("/dashboard/room-management");

        setSelectedAminties([]);
        console.log("Selected Amenities after reset:", selectedAminties); // Debugging
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    }
  };

  // multi select dark mode style
  const isDarkMode = document.documentElement.classList.contains("dark");
  const customStyles: StylesConfig<OptionType, true> = {
    control: (provided) => ({
      ...provided,
      backgroundColor: isDarkMode ? "transparent" : "#ffffff",
      borderColor: isDarkMode ? "#444444" : "#d1d5db",
      color: isDarkMode ? "#ffffff" : "#000000",
      height: "45px",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: isDarkMode ? "#0e2353" : "#ffffff",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? isDarkMode
          ? "#0e2353"
          : "#e5e7eb"
        : isDarkMode
        ? "#0e2353"
        : "#ffffff",
      color: isDarkMode ? "#ffffff" : "#000000",
      "&:hover": {
        backgroundColor: isDarkMode ? "#0057B8" : "#f3f4f6",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: isDarkMode ? "#ffffff" : "#000000",
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: isDarkMode ? "#0e2353" : "#e5e7eb",
      color: isDarkMode ? "#ffffff" : "#000000",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: isDarkMode ? "#ffffff" : "#000000",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: isDarkMode ? "#ffffff" : "#000000",
      "&:hover": {
        backgroundColor: isDarkMode ? "#0057B8" : "#f3f4f6",
        color: isDarkMode ? "#ffffff" : "#000000",
      },
    }),
  };

  return (
    <div>
      <Container>
        <div className="xl:max-w-[600px] border p-10 pt-5 mx-auto bg-color-lightColor dark:bg-color-cardColor my-5">
          <h2 className="mb-10 text-center text-3xl  font-mono">
            Create Room{" "}
          </h2>
          <GlobalForm
            onSubmit={handleRoomCreate}
            resolver={zodResolver(createRoomValidationSchema)}
          >
            <GlobalInput
              type="text"
              name="name"
              label="Room Name"
              className=""
            />

            <GlobalInput type="text" name="roomNo" label="Room Number" />

            <GlobalInput type="text" name="capacity" label="Capacity" />

            <GlobalInput type="text" name="floorNo" label="Floor Number" />
            <GlobalInput
              type="text"
              name="pricePerSlot"
              label="Price Per Slot"
            />

            <div className="">
              <MultiImageUpload
                imageUrls={imageUrls}
                setImageUrls={setImageUrls}
              />
            </div>
            {imageError && (
              <p className="text-red-500 text-sm mt-1">{imageError}</p>
            )}
            <div className="mb-5">
              <h2 className="mb-2">Aminties</h2>
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
      </Container>
    </div>
  );
};

export default CreateRoom;
