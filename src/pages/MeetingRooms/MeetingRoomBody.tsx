import Container from "@/components/Container";
import ProductLoadingSkeleton from "@/components/ProductLoadingSkeleton";
import RoomCard from "@/components/RoomCard";
import { useGetAllRoomsQuery } from "@/redux/features/rooms/roomApi";
import {
  setCapacity,
  setLength,
  setMaxPrice,
  setMinPrice,
} from "@/redux/features/rooms/roomSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { TRoom } from "@/types";
import { useDebounce } from "use-debounce";

const MeetingRoomBody = () => {
  const dispatch = useAppDispatch();

  const searchTerm = useAppSelector((state) => state.room.searchTerm);
  const sort = useAppSelector((state) => state.room.sort);
  const capacity = useAppSelector((state) => state.room.capacity);
  const minPrice = useAppSelector((state) => state.room.minPrice);
  const maxPrice = useAppSelector((state) => state.room.maxPrice);

  const [debounceValue] = useDebounce(searchTerm, 1000);

  const {
    data: roomData,
    isFetching,
    error,
  } = useGetAllRoomsQuery({
    searchTerm: debounceValue,
    capacity,
    // minCapacity: 10,
    // maxCapacity: 50,
    minPrice,
    maxPrice,
    sort,
  });
  console.log(searchTerm, isFetching);

  dispatch(setLength(roomData?.data?.length));

  if (error) return <div>Error loading rooms</div>;

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
                value={capacity}
                defaultValue={0}
                onChange={(e) => dispatch(setCapacity(e.target.value))}
                className="w-full bg-color-lightColor dark:bg-color-cardColor py-1 px-3 outline-none border"
              />
            </div>
            <div className="mt-8">
              {/* <label className="mb-2 block">Filter By Price</label> */}
              <div className="flex items-center gap-4">
                <div>
                  <label className="mb-2 block">Min Price:</label>
                  <input
                    type="number"
                    placeholder="Min Price"
                    onChange={(e) => dispatch(setMinPrice(e.target.value))}
                    className="w-full bg-color-lightColor dark:bg-color-cardColor py-1 px-3 outline-none border"
                  />
                </div>
                <div>
                  <label className="mb-2 block">Max Price:</label>
                  <input
                    type="number"
                    placeholder="Max Price"
                    // value={filterCapacity || ""}
                    onChange={(e) => dispatch(setMaxPrice(e.target.value))}
                    className="w-full bg-color-lightColor dark:bg-color-cardColor py-1 px-3 outline-none border"
                  />
                </div>
              </div>
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
