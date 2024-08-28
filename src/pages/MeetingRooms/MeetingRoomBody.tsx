import Container from "@/components/Container";
import ProductLoadingSkeleton from "@/components/ProductLoadingSkeleton";
import RoomCard from "@/components/RoomCard";
import { useGetAllRoomsQuery } from "@/redux/features/rooms/roomApi";
import { useAppSelector } from "@/redux/hook";
import { TRoom } from "@/types";
import { useDebounce } from "use-debounce";

const MeetingRoomBody = () => {
  const searchTerm = useAppSelector((state) => state.room.searchTerm);

  const [debounceValue] = useDebounce(searchTerm, 1000);

  const { data: roomData, isFetching } = useGetAllRoomsQuery({
    searchTerm: debounceValue,
    // minCapacity: 10,
    // maxCapacity: 50,
    // minPrice: 100,
    // maxPrice: 500,
    // sort: "priceAsc",
  });
  console.log(searchTerm, isFetching);

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
            {roomData?.data?.length <= 0 && (
              <h2 className="dark:text-white text-color-heading text-2xl text-center py-5">
                No Data Found
              </h2>
            )}
            {/* {isLoading ? <ProductLoadingSkeleton /> : null} */}
            {isFetching ? (
              <ProductLoadingSkeleton />
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {roomData?.data?.map((room: TRoom) => (
                  <RoomCard key={room._id} room={room} />
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MeetingRoomBody;
