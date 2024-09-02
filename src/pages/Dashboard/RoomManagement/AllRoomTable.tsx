import DeleteConfirmModal from "@/pages/Dashboard/RoomManagement/RoomDeleteConfirmModal";
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
import { useGetRoomsQuery } from "@/redux/features/rooms/roomApi";
import { TRoom } from "@/types";
import { useState } from "react";
import RoomUpdateModal from "./RoomUpdateModal";

export function AllRoomTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: roomData, isFetching } = useGetRoomsQuery({ searchTerm });

  if (isFetching) return <Loading />;

  return (
    <>
      <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />
      <Table>
        <TableCaption>A list of all room .</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[200px]">Name</TableHead>
            <TableHead>Room Number</TableHead>
            <TableHead>Floor No</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Capacity</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {roomData?.data?.map((item: TRoom) => (
            <TableRow key={item._id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.roomNo}</TableCell>
              <TableCell>{item.floorNo}</TableCell>
              <TableCell>${item.pricePerSlot}</TableCell>
              <TableCell>{item.capacity}</TableCell>
              <TableCell className="">
                <div className="flex items-center gap-4">
                  {/* update button */}
                  <RoomUpdateModal roomId={item?._id} />
                  {/* delete button  */}
                  <DeleteConfirmModal roomId={item?._id} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
