import { useState } from "react";
import { TRoom } from "@/types";
import { Link } from "react-router-dom";

type RoomCardProps = {
  room: TRoom;
};

const RoomCard = ({ room }: RoomCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="border bg-color-lightColor dark:bg-color-cardColor"
    >
      <img
        src={isHovered ? room.images[0] : room.images[1]}
        alt={room.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold dark:text-color-darkHeading text-color-heading">
          {room.name}
        </h3>

        <div className="flex items-center justify-between my-2">
          <div>
            <p className="text-gray-500 dark:text-color-darkHeading text-normal mb-1">
              <span className="text-gray-700 dark:text-color-darkHeading mr-1 font-medium">
                Capacity:
              </span>{" "}
              {room.capacity}
            </p>
            <p className="text-gray-500 text-normal dark:text-color-darkHeading">
              <span className="text-gray-700 dark:text-color-darkHeading mr-1 font-medium">
                Price:
              </span>{" "}
              ${room.pricePerSlot} per slot
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-extrabold opacity-30 text-color-textColor dark:text-color-darkHeading">
              201
            </h2>
            <span className="text-sm font-normal text-color-darkTextColor dark:text-color-textColor">
              Room No
            </span>
          </div>
        </div>

        <div className="flex justify-end mt-3">
          <Link
            to={room._id}
            className="text-color-baseColor font-medium hover:underline block dark:text-color-baseLightColor"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
