import Container from "@/components/Container";
import { IoSearch } from "../../icons/ReactIcons";

const MeetingRoomHeader = () => {
  return (
    <div className="py-4 border-b">
      <Container>
        <div className="flex items-center justify-between gap-10">
          {/* total card show length */}
          <div className=" hidden lg:block xl:w-[250px] lg:w-[190px]">
            <h2 className="text-base font-medium text-color-heading dark:text-color-darkHeading">
              {" "}
              20 items
            </h2>
          </div>

          {/* search div */}
          <div className=" flex-1 w-full">
            <div className="w-full h-[50px] flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full  h-[50px] bg-color-lightColor dark:bg-color-darkBaseColor dark:border-color-baseColor  px-4 py-2 rounded-l-md focus:outline-none border border-gray-300 "
                required
              />
              <button
                type="submit"
                className=" bg-color-baseColor flex items-center justify-center w-[50px] h-[50px] text-white rounded-r-md hover:bg-color-baseLightColor transition duration-300 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                <IoSearch />
              </button>
            </div>
          </div>

          <div className=" lg:w-[150px] xl:w-[200px]">
            {/* sorting selection */}
            <div className="flex gap-1 justify-end">
              <select
                name=""
                id=""
                className="outline-none bg-[#f4f4f4] dark:bg-color-cardColor px-[15px] h-[30px] max-w-[145px] text-sm cursor-pointer border-none leading-[30px]"
              >
                <option>Sort By</option>
                <option value="price-descending">Price, low to high</option>
                <option value="price-ascending">Price, high to low</option>
                <option value="created-ascending">Newest</option>
                <option value="created-descending">Oldest</option>
              </select>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MeetingRoomHeader;
