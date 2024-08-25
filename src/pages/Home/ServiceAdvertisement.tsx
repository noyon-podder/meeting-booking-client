import { FaCalendarAlt, FaCheck } from "react-icons/fa";
import { FaClock } from "../../icons/ReactIcons";
import { FaHeadset } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ServiceAdvertisement = () => {
  // Set up animation controls
  const controls = useAnimation();

  // Hook to detect when the section is in view
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the section is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Define animation variants
  const serviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  return (
    <>
      <section
        ref={ref}
        className="service-advertisement py-10 lg:py-16 light:bg-gray-100"
      >
        <div className="container mx-auto text-center">
          <h2 className="lg:text-3xl text-2xl font-bold mb-10 text-color-heading dark:text-color-darkHeading">
            Service Advertisement?
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate={controls}
            exit="exit"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2, // Stagger the fade-in of each service item
                },
              },
            }}
          >
            {/* 1st card */}
            <motion.div
              className="py-10 px-4 bg-white dark:bg-[#111c33] shadow-lg duration-300 rounded-sm hover:shadow-none border border-[#f1f1f1] transition-shadow"
              variants={serviceVariants}
            >
              <div className="flex justify-center mb-5">
                <FaClock
                  className="text-color-darkBaseColor dark:text-color-baseColor"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold text-color-heading dark:text-color-darkHeading">
                Real-Time Availability
              </h3>
              <p className="dark:text-color-darkTextColor text-color-textColor mt-3">
                Book with confidence knowing that our availability is always
                up-to-date.
              </p>
            </motion.div>

            {/* 2nd card */}
            <motion.div
              className="py-10 px-4 bg-white dark:bg-[#111c33] shadow-lg duration-300 rounded-sm hover:shadow-none border border-[#f1f1f1] transition-shadow"
              variants={serviceVariants}
            >
              <div className="flex justify-center mb-5">
                <FaCheck
                  className="text-color-darkBaseColor dark:text-color-baseColor"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold text-color-heading dark:text-color-darkHeading">
                Instant Booking Confirmation
              </h3>
              <p className="dark:text-color-darkTextColor text-color-textColor mt-3">
                Get instant confirmation on all your bookings, with no waiting
                time.
              </p>
            </motion.div>

            {/* 3rd card */}
            <motion.div
              className="py-10 px-4 bg-white dark:bg-[#111c33] shadow-lg duration-300 rounded-sm hover:shadow-none border border-[#f1f1f1] transition-shadow"
              variants={serviceVariants}
            >
              <div className="flex justify-center mb-5">
                <FaCalendarAlt
                  className="text-color-darkBaseColor dark:text-color-baseColor"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold text-color-heading dark:text-color-darkHeading">
                Flexible Scheduling
              </h3>
              <p className="dark:text-color-darkTextColor text-color-textColor mt-3">
                Easily reschedule or cancel appointments at your convenience.
              </p>
            </motion.div>

            {/* 4th card */}
            <motion.div
              className="py-10 px-4 bg-white dark:bg-[#111c33] shadow-lg duration-300 rounded-sm hover:shadow-none border border-[#f1f1f1] transition-shadow"
              variants={serviceVariants}
            >
              <div className="flex justify-center mb-5">
                <FaHeadset
                  className="text-color-darkBaseColor dark:text-color-baseColor"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold text-color-heading dark:text-color-darkHeading">
                24/7 Support
              </h3>
              <p className="dark:text-color-darkTextColor text-color-textColor mt-3">
                We're here to help whenever you need it, day or night.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServiceAdvertisement;
