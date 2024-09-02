import { useMyBookingsQuery } from "@/redux/features/booking/bookingApi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TBooking } from "@/types";
import Container from "@/components/Container";
import { Badge } from "@/components/ui/badge";

const MyBookings = () => {
  const { data: myBooking } = useMyBookingsQuery(undefined);

  console.log(myBooking);
  return (
    <Container>
      <h2 className="text-center dark:text-color-lightColor py-5 mb-5 font-mono lg:py-10 text-2xl lg:text-4xl lg:mb-10">
        My Bookings
      </h2>
      <Table>
        <TableCaption>A list of all room .</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[150px]">Room Name</TableHead>
            <TableHead>Room Number</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="min-w-[200px]"> Time</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {myBooking?.data?.map((item: TBooking) => (
            <TableRow key={item._id}>
              <TableCell className="font-medium">{item?.room?.name}</TableCell>
              <TableCell>{item?.room?.roomNo}</TableCell>
              <TableCell>{item?.date}</TableCell>
              <TableCell>
                {item.slots.map((slot, index) => (
                  <Badge key={index}>
                    {slot?.startTime} - {slot?.startTime}
                  </Badge>
                ))}
              </TableCell>
              <TableCell>${item.totalAmount}</TableCell>
              <TableCell>
                <div
                  className={`${
                    item?.isConfirmed === "unconfirmed"
                      ? "bg-red-500"
                      : "bg-green-500"
                  } py-[2px] px-2 w-[100px] rounded-xl flex items-center justify-center `}
                >
                  <span className="font-normal">{item?.isConfirmed}</span>
                </div>
              </TableCell>
              <TableCell className="">
                <div className="flex items-center gap-4">
                  {/* update button */}
                  {/* <RoomUpdateModal roomId={item?._id} /> */}
                  {/* delete button  */}
                  {/* <DeleteConfirmModal roomId={item?._id} /> */}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default MyBookings;
