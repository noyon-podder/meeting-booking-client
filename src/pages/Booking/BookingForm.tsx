import Container from "@/components/Container";
import GlobalForm from "@/components/form/GlobalForm";
import GlobalInput from "@/components/form/GlobalInput";
import { SelectData } from "@/components/SelectData";
import { currentUserInfo } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import MultiSelect from "./MultiSelect";
import { Button } from "@/components/ui/button";
import moment from "moment";
import { useGetSlotAvailabilityQuery } from "@/redux/features/booking/bookingApi";
import { useParams } from "react-router-dom";

const BookingForm = () => {
  const params = useParams();
  console.log(params.id);
  const [date, setDate] = useState<Date>();
  const userInfo = useAppSelector(currentUserInfo);
  //   const slots = useAppSelector((state) => state.booking.slotValue);
  const formatDate = moment(date).format("YYYY-MM-DD");

  const { data: availabilitySlots } = useGetSlotAvailabilityQuery({
    date: formatDate,
    roomId: params.id,
  });

  const handleBookingFormSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log({ data, formatDate });
    const bookingInfo = {};

    console.log({ bookingInfo });
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

              <MultiSelect availabilitySlots={availabilitySlots} />
            </div>

            <Button className="mt-5">Submit</Button>
          </GlobalForm>
        </div>
      </Container>
    </div>
  );
};

export default BookingForm;
