/**
 * Title: Write a program using JavaScript on PopularRooms
 * Author: Noyon Podder
 * Portfolio: https://dev-noyon.vercel.app/
 * Linkedin: https://linkedin.com/in/dev-noyon
 * GitHub: https://github.com/noyon-podder
 * Facebook: https://www.facebook.com/noyon.Podder7/
 * Instagram: https://www.instagram.com/noyon.podder7/
 * Twitter: https://x.com/noyon_podder7
 * WhatsApp: https://wa.me/8801752441505
 * Telegram: https://t.me/Noyonpodder7
 * Date: 16 December 2024
 */

import RoomSliderCard from "@/components/card/RoomSliderCard";
import Container from "@/components/Container";
import { useGetAllRoomsQuery } from "@/redux/features/rooms/roomApi";
import { TRoom } from "@/types";

const PopularRooms = () => {
  const { data: popularRoomData, isLoading: popularRoomsLoading } =
    useGetAllRoomsQuery({});

  const slicePopularRoomData = popularRoomData?.data?.slice(0, 4);

  return (
    <Container>
      <div className="lg:pt-16 pt-10">
        <h2 className="lg:text-4xl font-mono text-2xl font-bold lg:mb-14 mb-10 text-color-heading dark:text-color-darkHeading text-center">
          Popular Rooms
        </h2>

        {popularRoomsLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Render popular rooms */}
            {slicePopularRoomData?.map((room: TRoom) => (
              <RoomSliderCard key={room?._id} room={room} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default PopularRooms;
