import Container from "@/components/Container";
import { currentUserInfo } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";
import { useState } from "react";
import CheckoutStep from "./CheckoutStep";
import UserInfoForm from "./UserInfoForm";
import { Button } from "@/components/ui/button";
import { useGetSingleRoomQuery } from "@/redux/features/rooms/roomApi";
import Loading from "@/components/Loading";
import { useNavigate, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import AmarPay from "/amarPay.png";
import COD from "/cod.png";
import { useCreateBookingMutation } from "@/redux/features/booking/bookingApi";
import toast from "react-hot-toast";

const CheckoutPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const userInfo = useAppSelector(currentUserInfo);
  const bookingInfo = useAppSelector((state) => state.booking);
  const [step, setStep] = useState(1);
  const { data: roomInfo, isLoading } = useGetSingleRoomQuery(
    params.id as string
  );
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const [createBooking] = useCreateBookingMutation();

  if (isLoading) return <Loading />;

  // image length
  const images = roomInfo?.data?.images || [];

  const handleAllBookingInformation = async () => {
    const bookingPaymentData = {
      user: bookingInfo?.userId,
      room: bookingInfo?.roomId,
      slots: bookingInfo?.slotValue,
      date: bookingInfo?.date,
    };
    console.log("booking info", bookingPaymentData);

    try {
      const res: any = await createBooking(bookingPaymentData);

      console.log(res);

      if (res.error) {
        toast.error(res.error.data.message);
      } else {
        navigate("/success-booking");
        toast.success("Booking Create Successfully");
      }
      console.log(res);
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    }
  };
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
                  {bookingInfo?.slotLabel?.map((item) => (
                    <Badge className="bg-color-baseColor text-white hover:bg-color-baseLightColor mr-3">
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
          {step === 3 && (
            <div className="max-w-3xl p-5 my-14 border mx-auto bg-color-lightColor dark:bg-color-cardColor rounded-md">
              <h2 className="text-2xl font-semibold ">Select Payment Method</h2>

              <div className=" mt-7">
                {/* {selectPaymentMethod.map((method) => (
                  <div
                    key={method.id}
                    className={`flex items-center gap-3 border py-3 px-3 rounded-lg  cursor-pointer ${
                      method.value === paymentMethod
                        ? "border-color-baseColor"
                        : "border-transparent"
                    }`}
                    onClick={() => setPaymentMethod(method.value)}
                  >
                    <img
                      src={method.image}
                      alt={method.value}
                      width={60}
                      className="shadow-md"
                    />
                    <h2 className="text-gray-500 dark:text-gray-300 text-base font-medium">
                      {method.name}
                    </h2>
                  </div>
                ))} */}
                <div
                  className={`flex items-center gap-3 border py-3 px-3 rounded-lg  cursor-pointer
                    
                      border-color-baseColor
                    
                  `}
                  // onClick={() => setPaymentMethod(method.value)}
                >
                  <img
                    src={AmarPay}
                    alt={"amar pay"}
                    width={60}
                    className="shadow-md"
                  />
                  <h2 className="text-gray-500 dark:text-gray-300 text-base font-medium">
                    Amar Pay
                  </h2>
                </div>
                <div
                  className={`flex items-center gap-3 border py-3 px-3 rounded-lg  cursor-default mt-2
                      border-transparent
                  `}
                  // onClick={() => setPaymentMethod(method.value)}
                >
                  <img src={COD} alt={"COD"} width={60} className="shadow-md" />
                  <h2 className="text-gray-500 dark:text-gray-300 text-base font-medium">
                    Cash On Delivery{" "}
                    <Badge className="ml-2" variant={"secondary"}>
                      beta
                    </Badge>
                  </h2>
                </div>
              </div>

              <div className="mt-10">
                <Button
                  onClick={handleAllBookingInformation}
                  className="bg-color-baseColor tex-white hover:bg-color-baseLightColor text-white"
                >
                  Confirm Booking
                </Button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default CheckoutPage;
