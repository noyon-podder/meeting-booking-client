/**
 * Title: Write a program using JavaScript on LatestRoom
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

import ProductLoadingSkeleton from "@/components/ProductLoadingSkeleton";
import { Button } from "@/components/ui/button";
import { useGetAllRoomsQuery } from "@/redux/features/rooms/roomApi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { fadeVariants } from "@/utils/variants";
import { TRoom } from "@/types";
import RoomCard from "@/components/card/RoomCard";
import Container from "@/components/Container";

const LatestRoom = () => {
  const { data: roomData, isFetching } = useGetAllRoomsQuery({});
  const [controls, ref] = useScrollAnimation();
  return (
    <Container>
      <div className="lg:py-16 py-10" ref={ref}>
        <h2 className="lg:text-4xl font-mono text-2xl font-bold lg:mb-14 mb-10 text-color-heading dark:text-color-darkHeading text-center">
          Latest Rooms
        </h2>

        <div className="my-10 ">
          {isFetching ? (
            <ProductLoadingSkeleton />
          ) : (
            <motion.div
              animate={controls}
              variants={fadeVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {roomData?.data?.slice(0, 4).map((room: TRoom) => (
                <RoomCard key={room._id} room={room} />
              ))}
            </motion.div>
          )}
        </div>

        <div>
          <Link to="/meeting-rooms" className="flex justify-center">
            <Button className="bg-gradient hover:bg-color-baseLightColor text-white  px-3 ">
              See All
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default LatestRoom;
