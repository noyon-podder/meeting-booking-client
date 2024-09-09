import Loading from "@/components/Loading";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useGetAllBookingsQuery,
  useUpdateBookingStatusMutation,
} from "@/redux/features/booking/bookingApi";
import { TBooking } from "@/types";
import { ChangeEvent } from "react";
import toast from "react-hot-toast";
import DeleteBookingModal from "./DeleteBookingModal";

const AllBooking = () => {
  const { data: allBookingData, isFetching } =
    useGetAllBookingsQuery(undefined);

  const [updateBookingStatus] = useUpdateBookingStatusMutation();

  if (isFetching) return <Loading />;

  const handleBookingStatus = async (
    event: ChangeEvent<HTMLSelectElement>,
    id: string
  ) => {
    event.preventDefault();
    const statusValue = event.target.value;
    const bookingStatus = {
      id: id,
      isConfirmed: statusValue,
    };

    try {
      const res: any = await updateBookingStatus(bookingStatus);

      if (res.error) {
        // Revert status on error
        // setApproveOrReject("");
        toast.error(res.error.data.message);
      } else {
        toast.success("Booking status updated successfully");
      }
    } catch (err) {
      // Revert status on error
      // setApproveOrReject("");
      toast.error("Something went wrong");
      console.log(err);
    }
  };

  return (
    <>
      <Table>
        <TableCaption>A list of all booking .</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Room Name</TableHead>
            <TableHead>User Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="">Time</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Approve/Reject</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allBookingData?.data?.map((item: TBooking) => (
            <TableRow key={item._id}>
              <TableCell className="font-medium">{item?.room?.name}</TableCell>
              <TableCell>{item?.user?.name}</TableCell>
              <TableCell>{item?.date}</TableCell>
              <TableCell>
                {item.slots.map((slot, index) => (
                  <Badge
                    key={index}
                    className="dark:bg-color-baseColor bg-color-baseColor text-white m-1"
                  >
                    {slot?.startTime} - {slot?.endTime}
                  </Badge>
                ))}
              </TableCell>
              <TableCell>
                <span
                  className={`px-3 py-[4px]  text-white capitalize  rounded-[15px]
                    ${
                      item.isConfirmed === "reject" &&
                      "bg-red-400 dark:bg-red-700"
                    }
                    ${
                      item.isConfirmed === "unconfirmed" &&
                      "bg-indigo-400 dark:bg-indigo-700"
                    }
                    ${
                      item.isConfirmed === "approve" &&
                      "bg-green-400 dark:bg-green-700"
                    }
                    `}
                >
                  {(item.isConfirmed === "unconfirmed" && "pending") ||
                    item.isConfirmed}
                </span>
              </TableCell>
              <TableCell>
                <select
                  onChange={(e) => handleBookingStatus(e, item._id)}
                  disabled={item.isConfirmed === "reject"}
                  name=""
                  id=""
                  className="py-1 px-3 border w-[100px] outline-none dark:bg-color-baseColor"
                >
                  <option>Change Status</option>
                  <option value="approve">Approve</option>
                  <option value="reject">Reject</option>
                </select>
              </TableCell>
              <TableCell className="">
                <div className="flex items-center gap-4">
                  {/* update button */}
                  {/* <RoomUpdateModal roomId={item?._id} /> */}
                  {/* delete button  */}
                  <DeleteBookingModal bookingId={item?._id} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default AllBooking;
