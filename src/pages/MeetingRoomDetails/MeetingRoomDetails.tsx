import Container from "@/components/Container";
import { useGetSingleRoomQuery } from "@/redux/features/rooms/roomApi";
import { useState } from "react";
import {
  BsBuilding,
  FaHeart,
  FaRegHeart,
  IoIosPricetags,
  IoShareSocial,
  MdReduceCapacity,
} from "../../icons/ReactIcons";
import { Link, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Loading from "@/components/Loading";

const MeetingRoomDetails = () => {
  const params = useParams();
  const [isFavorite, setIsFavorite] = useState(false);

  const {
    data: room,
    isLoading,
    isFetching,
  } = useGetSingleRoomQuery(params.id as string);

  console.log(room?.data);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }
  if (isFetching) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <section className="py-5">
      <Container>
        {/* room name and favorite icon */}
        <div className="lg:my-6 my-3">
          <div className="flex lg:items-center lg:justify-between gap-5 flex-col lg:flex-row">
            <h2 className="lg:text-3xl text-2xl text-color-darkBaseColor dark:text-color-darkHeading font-bold">
              {room?.data?.name}
            </h2>
            <div className="flex items-center justify-end gap-4 ">
              {isFavorite ? (
                <FaHeart
                  className="text-red-500 dark:text-red-600 cursor-pointer"
                  size={26}
                  onClick={() => setIsFavorite(!isFavorite)}
                />
              ) : (
                <FaRegHeart
                  className="text-color-baseColor dark:text-color-baseLightColor cursor-pointer"
                  size={26}
                  onClick={() => setIsFavorite(!isFavorite)}
                />
              )}
              <IoShareSocial
                className="text-color-baseColor dark:text-color-baseLightColor cursor-pointer"
                size={26}
              />
            </div>
          </div>
        </div>
        {/* image gallery */}
        <div className="flex flex-wrap lg:flex-nowrap gap-4 p-4">
          {/* Left Section  1st image card conditional rendering*/}
          <div className="flex flex-col gap-4 w-full lg:w-1/3">
            {room?.data?.images[1] && (
              <div className="h-64 lg:h-full relative">
                {/* watermark room number */}
                <div className="absolute bottom-0 right-0 p-5">
                  <h2 className="text-3xl font-extrabold opacity-60 text-white ">
                    {room?.data?.roomNo}
                  </h2>
                  <span className="text-sm font-normal text-color-darkTextColor dark:text-color-darkHeading">
                    Room No
                  </span>
                </div>
                <img
                  src={room?.data?.images[1]}
                  alt="First Image"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            )}
            {room?.data?.images[2] && (
              <div className="h-64 lg:h-full relative">
                {/* watermark room number */}
                <div className="absolute bottom-0 right-0 p-5">
                  <h2 className="text-3xl font-extrabold opacity-60 text-white ">
                    {room?.data?.roomNo}
                  </h2>
                  <span className="text-sm font-normal text-color-darkTextColor dark:text-color-darkHeading">
                    Room No
                  </span>
                </div>
                <img
                  src={room?.data?.images[2]}
                  alt="First Image"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            )}
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-2/3 relative">
            {/* watermark room number */}
            <div className="absolute bottom-0 right-0 p-5">
              <h2 className="text-3xl font-extrabold opacity-60 text-white ">
                {room?.data?.roomNo}
              </h2>
              <span className="text-sm font-normal text-color-darkTextColor dark:text-color-darkHeading">
                Room No
              </span>
            </div>
            <div className="h-128 lg:h-full">
              <img
                src={room?.data?.images[0]}
                alt="Main Image"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between py-5">
          <p className="text-gray-500 text-normal dark:text-color-darkHeading text-lg mb-3 flex items-center gap-3 flex-col lg:flex-row flex-wrap">
            <span className="text-gray-700 dark:text-color-darkHeading mr-1 font-medium">
              <MdReduceCapacity className="text-color-baseColor text-2xl" />
            </span>{" "}
            {room?.data?.capacity} persons
          </p>
          <p className="text-gray-500 text-normal dark:text-color-darkHeading text-lg mb-3 flex items-center gap-3 flex-col lg:flex-row flex-wrap">
            <span className="text-gray-700 dark:text-color-darkHeading mr-1 font-medium">
              <IoIosPricetags className="text-color-baseColor text-2xl" />
            </span>{" "}
            ${room?.data?.pricePerSlot} per slot
          </p>
          <p className="text-gray-500 text-normal dark:text-color-darkHeading text-lg mb-3 flex items-center gap-3 flex-col lg:flex-row flex-wrap">
            <span className="text-gray-700 dark:text-color-darkHeading mr-1 font-medium">
              <BsBuilding className="text-color-baseColor text-2xl" />
            </span>{" "}
            {room?.data?.floorNo} no floor
          </p>
        </div>

        <div className="flex items-center justify-between mt-5 lg:mt-10">
          <div>
            {room?.data?.amenities.map((item: string, index: number) => (
              <Badge key={index} variant="outline" className="ml-2">
                {item}
              </Badge>
            ))}
          </div>
          <div>
            <Link to="booking-slots">
              <Button className="bg-color-baseColor hover:bg-color-baseLightColor text-white">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MeetingRoomDetails;
