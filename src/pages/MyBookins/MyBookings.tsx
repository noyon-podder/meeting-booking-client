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
import { TMyBooking } from "@/types";
import Container from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import Loading from "@/components/Loading";

const MyBookings = () => {
  const { data: myBooking, isFetching } = useMyBookingsQuery(undefined);

  if (isFetching) return <Loading />;

  return (
    <Container>
      <h2 className="text-center dark:text-color-lightColor py-5 mb-5 font-mono lg:py-10 text-2xl lg:text-4xl lg:mb-10">
        My Bookings
      </h2>
      <Table>
        <TableCaption>A list of all Booking .</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[150px]">Room Name</TableHead>
            <TableHead className="min-w-[120px]">Room Number</TableHead>
            <TableHead className="min-w-[120px]">Date</TableHead>
            <TableHead className="min-w-[200px]">Time</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {myBooking?.data?.map((item: TMyBooking) => (
            <TableRow key={item._id}>
              <TableCell className="font-medium">{item?.room?.name}</TableCell>
              <TableCell>{item?.room?.roomNo}</TableCell>
              <TableCell>{item?.date}</TableCell>
              <TableCell>
                {item.slots.map((slot, index) => (
                  <Badge key={index} className="mr-1 bg-blue-500">
                    {slot?.startTime} - {slot?.endTime}
                  </Badge>
                ))}
              </TableCell>
              <TableCell>${item.totalAmount}</TableCell>
              <TableCell>
                <span
                  className={`px-3 py-[4px]  text-white capitalize  rounded-[15px]
                    ${
                      item.isConfirmed === "reject" &&
                      "bg-red-400 dark:bg-red-700"
                    }
                    ${
                      item.isConfirmed === "unconfirmed" &&
                      "bg-yellow-400 dark:bg-yellow-700"
                    }
                    ${
                      item.isConfirmed === "approve" &&
                      "bg-green-400 dark:bg-green-700"
                    }
                    `}
                >
                  {item.isConfirmed === "approve" && "Approved"}
                  {item.isConfirmed === "unconfirmed" && "Pending"}
                  {item.isConfirmed === "reject" && "Reject"}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default MyBookings;
