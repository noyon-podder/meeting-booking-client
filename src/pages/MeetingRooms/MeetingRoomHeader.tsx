import Container from "@/components/Container";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setSearchTerm, setSort } from "@/redux/features/rooms/roomSlice";

const MeetingRoomHeader = () => {
  const searchTerm = useAppSelector((state) => state.room.searchTerm);
  const length = useAppSelector((state) => state.room.length);

  const dispatch = useAppDispatch();
  return (
    <div className="py-4 border-b">
      <Container>
        <div className="flex items-center justify-between gap-10">
          {/* total card show length */}
          <div className=" hidden lg:block xl:w-[250px] lg:w-[190px]">
            <h2 className="text-base font-medium text-color-heading dark:text-color-darkHeading">
              {" "}
              {length} items
            </h2>
          </div>

          {/* search div */}
          <div className=" flex-1 w-full">
            <div className="w-full h-[50px] flex items-center">
              <input
                type="email"
                placeholder="Search Room Name or Keyword"
                value={searchTerm}
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                className="w-full  h-[50px] bg-color-lightColor dark:bg-color-darkBaseColor dark:border-color-baseColor  px-4 py-2 rounded-l-md focus:outline-none border border-gray-300 "
                required
              />
            </div>
          </div>

          <div className=" lg:w-[150px] xl:w-[200px]">
            {/* sorting selection */}
            <div className="flex gap-1 justify-end">
              <select
                onChange={(e) => dispatch(setSort(e.target.value))}
                name=""
                id=""
                className="outline-none bg-[#f4f4f4] dark:bg-color-cardColor px-[15px] h-[30px] max-w-[145px] text-sm cursor-pointer border-none leading-[30px]"
              >
                <option>Sort By</option>
                <option value="priceAsc">Price, low to high</option>
                <option value="priceDesc">Price, high to low</option>
              </select>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MeetingRoomHeader;
