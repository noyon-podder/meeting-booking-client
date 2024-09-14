import Loading from "@/components/Loading";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { TSlot } from "@/types";
import SlotDeleteConfirmModal from "./SlotDeleteConfirmModal";
import { useGetAllSlotsQuery } from "@/redux/features/slot/slotApi";
import SlotUpdateModal from "./SlotUpdateModal";
// import RoomUpdateModal from "./RoomUpdateModal";

export function AllSlotTable() {
  const { data: slotData, isFetching } = useGetAllSlotsQuery({});

  console.log({ slotData });
  if (isFetching) return <Loading />;

  return (
    <>
      <Table>
        <TableCaption>A list of all room .</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[200px]">Room Name</TableHead>
            <TableHead>Room Number</TableHead>
            <TableHead>Floor No</TableHead>
            <TableHead className="min-w-[150px]">Price Per Slot</TableHead>
            <TableHead className="min-w-[150px]">Date</TableHead>
            <TableHead>Start Time</TableHead>
            <TableHead>End Time</TableHead>
            <TableHead>Booked</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {slotData?.data?.map((item: TSlot) => (
            <TableRow key={item._id}>
              <TableCell className="font-medium">{item?.room?.name}</TableCell>
              <TableCell>{item?.room?.roomNo}</TableCell>
              <TableCell>{item?.room?.floorNo}</TableCell>
              <TableCell>${item?.room?.pricePerSlot}</TableCell>
              <TableCell>{item?.date}</TableCell>
              <TableCell>{item?.startTime}</TableCell>
              <TableCell>{item?.endTime}</TableCell>
              <TableCell>
                <p
                  className={`text-white px-1 text-center py-[2px] rounded-2xl font-medium ${
                    item.isBooked
                      ? "dark:bg-green-700 bg-green-600 "
                      : "dark:bg-color-baseColor bg-indigo-600 "
                  }      
                  `}
                >
                  {item?.isBooked ? "Booked" : "Free"}
                </p>
              </TableCell>
              <TableCell className="">
                <div className="flex items-center gap-4">
                  {/* update button */}
                  <div className={`${item?.isBooked && "opacity-0 invisible"}`}>
                    <SlotUpdateModal slot={item} />
                  </div>
                  {/* delete button  */}
                  <SlotDeleteConfirmModal slotId={item?._id} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
