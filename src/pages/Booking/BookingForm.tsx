import Container from "@/components/Container";
import GlobalForm from "@/components/form/GlobalForm";
import GlobalInput from "@/components/form/GlobalInput";
import { SelectData } from "@/components/SelectData";
import { currentUserInfo } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import MultiSelect from "./MultiSelect";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import { MultiValue } from "react-select";
import { OptionType } from "@/types";
import { setBookingInfo } from "@/redux/features/booking/bookingSlice";
import { useGetSlotAvailabilityQuery } from "@/redux/features/slot/slotApi";

const BookingForm = () => {
  const params = useParams();
  const [date, setDate] = useState<Date>();
  const userInfo = useAppSelector(currentUserInfo);
  const formatDate = moment(date).format("YYYY-MM-DD");
  const [selectedOption, setSelectedOption] =
    useState<MultiValue<OptionType> | null>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data: availabilitySlots } = useGetSlotAvailabilityQuery({
    date: formatDate,
    roomId: params.id,
  });

  const handleBookingFormSubmit = (data: FieldValues) => {
    const bookingInfo = {
      roomId: params.id || "",
      name: data.userName,
      email: data.userEmail,
      phoneNumber: data.userPhoneNumber,
      date: formatDate,
      userId: userInfo?._id || "",
      slots: selectedOption?.map((option) => option.value) || [],
      slotLabel: selectedOption?.map((option) => option.label) || [],
    };

    dispatch(setBookingInfo(bookingInfo));

    navigate(`/meeting-rooms/${params.id}/checkout`);
  };
  return (
    <div className="lg:py-20 py-10">
      <Container>
        <div className="max-w-[600px] w-full border p-5 mx-auto bg-color-lightColor dark:bg-color-cardColor">
          <h2 className="text-center font-semibold mb-5 text-xl">
            Booking Slots
          </h2>
          <GlobalForm onSubmit={handleBookingFormSubmit}>
            <GlobalInput
              type="text"
              label="Name"
              name="userName"
              value={userInfo?.name}
            />
            <GlobalInput
              type="text"
              label="Email Address"
              name="userEmail"
              value={userInfo?.email}
            />
            <GlobalInput
              type="text"
              label="Phone Number"
              name="userPhoneNumber"
              value={userInfo?.phone}
            />

            <div className="-mt-2">
              <h2 className="font-semibold mb-2 ">Date</h2>
              <SelectData date={date} setDate={setDate} />
            </div>

            <div className="mt-4">
              <h2 className="font-semibold mb-2 ">Select Slots</h2>

              <MultiSelect
                availabilitySlots={availabilitySlots}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
            </div>

            <Button
              type="submit"
              disabled={selectedOption?.length === 0}
              className="mt-5 bg-color-baseColor tex-white hover:bg-color-baseLightColor text-white"
            >
              Submit
            </Button>
          </GlobalForm>
        </div>
      </Container>
    </div>
  );
};

export default BookingForm;
