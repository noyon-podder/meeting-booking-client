import AllBooking from "./AllBooking";

const BookingManagement = () => {
  return (
    <div className="lg:p-10 p-5">
      <div>
        <h2 className="text-3xl text-center text-color-darkBaseColor dark:text-color-darkHeading font-mono mb-10">
          Booking Management
        </h2>
      </div>

      <AllBooking />
    </div>
  );
};

export default BookingManagement;
