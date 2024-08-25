import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/3191887/3191887-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="gradient-overlay opacity-60"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <motion.div
          className="text-center px-3"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <h1 className="text-3xl lg:text-5xl  font-bold text-color-lightColor ">
            Book Your Ideal Meeting Room with Ease
          </h1>
          <p className="mt-4 text-base text-color-[#f6f6f6] lg:text-lg xl:text-xl mb-10">
            Efficient, hassle-free room booking for all your meeting needs.
          </p>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              size="lg"
              className="bg-color-baseLightColor hover:bg-color-baseColor text-white text-[20px] font-medium py-6 "
            >
              Book Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
