import Container from "@/components/Container";
import ProductLoadingSkeleton from "@/components/ProductLoadingSkeleton";
import RoomCard from "@/components/RoomCard";
import { useGetAllProductQuery } from "@/redux/features/rooms/roomApi";
import { TRoom } from "@/types";

const MeetingRoomBody = () => {
  //   const roomData = [
  //     {
  //       id: "1",
  //       name: "Huddle Room",
  //       description:
  //         "A small, informal room for quick team meetings or brainstorming sessions.",
  //       capacity: 6,
  //       pricePerSlot: 30,

  //       imageUrl:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO_b-YTwImwx9xjkL6YE5MMK1rxqNgkC1_7Q&s",
  //       amenities: ["Whiteboard", "TV Screen"],
  //     },
  //     {
  //       id: "2",
  //       name: "Huddle Room",
  //       description:
  //         "A small, informal room for quick team meetings or brainstorming sessions.",
  //       capacity: 6,
  //       pricePerSlot: 30,

  //       imageUrl:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO_b-YTwImwx9xjkL6YE5MMK1rxqNgkC1_7Q&s",
  //       amenities: ["Whiteboard", "TV Screen"],
  //     },
  //     {
  //       id: "3",
  //       name: "Huddle Room",
  //       description:
  //         "A small, informal room for quick team meetings or brainstorming sessions.",
  //       capacity: 6,
  //       pricePerSlot: 30,

  //       imageUrl:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO_b-YTwImwx9xjkL6YE5MMK1rxqNgkC1_7Q&s",
  //       amenities: ["Whiteboard", "TV Screen"],
  //     },
  //     {
  //       id: "4",
  //       name: "Huddle Room",
  //       description:
  //         "A small, informal room for quick team meetings or brainstorming sessions.",
  //       capacity: 6,
  //       pricePerSlot: 30,

  //       imageUrl:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO_b-YTwImwx9xjkL6YE5MMK1rxqNgkC1_7Q&s",
  //       amenities: ["Whiteboard", "TV Screen"],
  //     },
  //   ];

  const { data: roomData, isLoading } = useGetAllProductQuery(undefined);

  console.log(roomData);

  return (
    <div className="">
      <Container>
        <div className="flex gap-5 py-5">
          <div className="lg:w-[274px] xl:w-[354px] hidden lg:block pr-5">
            <div className="mb-3">
              <label className="mb-2 block text-base text-color-heading dark:text-color-darkHeading font-medium">
                Capacity:
              </label>
              <input
                type="number"
                // value={filterCapacity || ""}
                defaultValue={0}
                // onChange={(e) => setFilterCapacity(Number(e.target.value))}
                className="w-full bg-color-lightColor dark:bg-color-cardColor py-1 px-3 outline-none border"
              />
            </div>
            <div>
              <label className="mb-2 block">Price:</label>
              <input
                type="number"
                defaultValue={0}
                // value={filterCapacity || ""}
                // onChange={(e) => setFilterCapacity(Number(e.target.value))}
                className="w-full bg-color-lightColor dark:bg-color-cardColor py-1 px-3 outline-none border"
              />
            </div>
          </div>
          <div className="w-full">
            {isLoading ? <ProductLoadingSkeleton /> : null}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {roomData?.data?.map((room: TRoom) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MeetingRoomBody;
