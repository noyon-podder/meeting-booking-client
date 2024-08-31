import Container from "@/components/Container";
import { currentUserInfo } from "@/redux/features/auth/authSlice";

import { useAppSelector } from "@/redux/hook";
import { useState } from "react";
import CheckoutStep from "./CheckoutStep";
import UserInfoForm from "./UserInfoForm";
import { Badge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGetSingleRoomQuery } from "@/redux/features/rooms/roomApi";
import Loading from "@/components/Loading";

const CheckoutPage = () => {
  const userInfo = useAppSelector(currentUserInfo);
  const bookingInfo = useAppSelector((state) => state.booking);
  const [step, setStep] = useState(1);
  const { data: roomInfo, isLoading } = useGetSingleRoomQuery(
    bookingInfo?.roomId as string
  );
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  if (isLoading) return <Loading />;

  // Ensure the images array is available and has the expected length
  const images = roomInfo?.data?.images || [];

  console.log(roomInfo?.data);

  return (
    <div className="py-10">
      <Container>
        <div className="mb-10">
          <h2 className="text-3xl dark:text-color-darkHeading text-color-heading font-semibold text-center">
            Lock in Your Booking
          </h2>
        </div>
        <CheckoutStep step={step} />

        <div>
          {step === 1 && (
            <UserInfoForm
              userInfo={userInfo}
              prevStep={prevStep}
              nextStep={nextStep}
              step={step}
            />
          )}
          {step === 2 && (
            <div className="max-w-3xl p-5 my-14 border mx-auto bg-color-lightColor dark:bg-color-cardColor rounded-md">
              <div className="mb-6">
                <h2 className="text-xl font-semibold dark:text-color-darkHeading text-color-darkBaseColor ">
                  Booking Information
                </h2>
              </div>

              <div className="flex flex-wrap lg:flex-nowrap gap-4 p-4">
                {/* Left Section */}
                <div className="flex flex-col gap-4 w-full lg:w-1/3">
                  {/* First Image */}
                  {images[1] && (
                    <div className="h-64 lg:h-full relative">
                      <div className="absolute bottom-0 right-0 p-5">
                        <h2 className="text-3xl font-extrabold opacity-60 text-white ">
                          {roomInfo?.data?.roomNo}
                        </h2>
                        <span className="text-sm font-normal text-color-darkTextColor dark:text-color-darkHeading">
                          Room No
                        </span>
                      </div>
                      <img
                        src={images[1]}
                        alt="Second Image"
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                  )}
                  {/* Second Image */}
                  {images[2] && (
                    <div className="h-64 lg:h-full relative">
                      <div className="absolute bottom-0 right-0 p-5">
                        <h2 className="text-3xl font-extrabold opacity-60 text-white ">
                          {roomInfo?.data?.roomNo}
                        </h2>
                        <span className="text-sm font-normal text-color-darkTextColor dark:text-color-darkHeading">
                          Room No
                        </span>
                      </div>
                      <img
                        src={images[2]}
                        alt="Third Image"
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                  )}
                </div>

                {/* Right Section */}
                <div className="w-full lg:w-2/3 relative">
                  <div className="absolute bottom-0 right-0 p-5">
                    <h2 className="text-3xl font-extrabold opacity-60 text-white ">
                      {roomInfo?.data?.roomNo}
                    </h2>
                    <span className="text-sm font-normal text-color-darkTextColor dark:text-color-darkHeading">
                      Room No
                    </span>
                  </div>
                  <div className="h-128 lg:h-full">
                    <img
                      src={images[0]}
                      alt="Main Image"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div>
                  <h2 className="text-xl text-color-darkBaseColor dark:text-color-darkHeading font-semibold">
                    {roomInfo?.data?.name}
                  </h2>
                </div>

                <div className="flex flex-wrap lg:flex-nowrap gap-4">
                  <div className="lg:w-1/2">
                    <p className="mt-3 text-color-heading dark:text-color-darkHeading font-medium">
                      Booking Date:{" "}
                      <span className="font-normal ml-1 text-color-textColor dark:text-color-darkTextColor">
                        {bookingInfo?.date}
                      </span>
                    </p>
                    <p className="mt-3 text-color-heading dark:text-color-darkHeading font-medium">
                      Price Per Slot:{" "}
                      <span className="font-normal ml-1 text-color-textColor dark:text-color-darkTextColor">
                        ${roomInfo?.data?.pricePerSlot}
                      </span>
                    </p>
                  </div>
                  <div className="lg:w-1/2">
                    <p className="mt-3 text-color-heading dark:text-color-darkHeading font-medium">
                      Capacity:{" "}
                      <span className="font-normal ml-1 text-color-textColor dark:text-color-darkTextColor">
                        {roomInfo?.data?.capacity} Person
                      </span>
                    </p>
                    <p className="mt-3 text-color-heading dark:text-color-darkHeading font-medium">
                      Floor:{" "}
                      <span className="font-normal ml-1 text-color-textColor dark:text-color-darkTextColor">
                        {roomInfo?.data?.floorNo} no floor
                      </span>
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  {bookingInfo?.slotLabel?.map((item, index) => (
                    <Badge
                      key={index}
                      className="mr-2 bg-color-baseColor hover:bg-color-bgLightColor text-white"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex items-center justify-between">
                <Button size={"sm"} onClick={prevStep}>
                  Previous
                </Button>
                {step < 3 ? (
                  <Button size={"sm"} onClick={nextStep}>
                    Next
                  </Button>
                ) : null}
              </div>
            </div>
          )}
          {step === 3 && <div>Payment</div>}
        </div>
      </Container>
    </div>
  );
};

export default CheckoutPage;
