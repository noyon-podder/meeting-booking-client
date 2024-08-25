import { FaCalendarCheck, FaLock, FaThumbsUp } from "../../icons/ReactIcons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const WhyChooseUs = () => {
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
    <section
      ref={ref}
      className="why-choose-us py-10 lg:py-16 bg-color-lightColor dark:bg-color-cardColor"
    >
      <div className="container mx-auto text-center">
        <h2 className="lg:text-4xl text-2xl font-bold lg:mb-10 mb-5 text-color-heading dark:text-color-darkHeading text-center font-mono">
          Why Choose Us?
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate={controls}
          exit="exit"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* 1st card */}
          <motion.div
            className="py-10 px-6 bg-white dark:bg-color-cardColor shadow-lg duration-300 rounded-sm hover:shadow-none border border-[#f1f1f1] dark:border-color-darkBaseColor transition-shadow"
            variants={serviceVariants}
          >
            <div className="flex justify-center mb-5">
              <FaCalendarCheck
                size={36}
                className="text-color-darkBaseColor dark:text-color-baseColor mx-auto mb-4"
              />
            </div>
            <h3 className="text-xl font-semibold text-color-heading dark:text-color-darkHeading">
              Seamless Booking Experience
            </h3>
            <p className="dark:text-color-darkTextColor text-color-textColor mt-3">
              Enjoy a smooth and intuitive booking process that saves you time
              and effort.
            </p>
          </motion.div>

          {/* 2nd card */}
          <motion.div
            className="py-10 px-6 bg-white dark:bg-color-cardColor shadow-lg duration-300 rounded-sm hover:shadow-none border border-[#f1f1f1] dark:border-color-darkBaseColor transition-shadow"
            variants={serviceVariants}
          >
            <div className="flex justify-center mb-5">
              <FaLock
                size={36}
                className="text-color-darkBaseColor dark:text-color-baseColor mx-auto mb-4"
              />
            </div>
            <h3 className="text-xl font-semibold text-color-heading dark:text-color-darkHeading">
              Secure Transactions
            </h3>
            <p className="dark:text-color-darkTextColor text-color-textColor mt-3">
              Your payments are safe with our top-notch security measures.
            </p>
          </motion.div>

          {/* 3rd card */}
          <motion.div
            className="py-10 px-6 bg-white dark:bg-color-cardColor shadow-lg duration-300 rounded-sm hover:shadow-none border border-[#f1f1f1] dark:border-color-darkBaseColor transition-shadow"
            variants={serviceVariants}
          >
            <div className="flex justify-center mb-5">
              <FaThumbsUp
                size={36}
                className="text-color-darkBaseColor dark:text-color-baseColor mx-auto mb-4"
              />
            </div>
            <h3 className="text-xl font-semibold text-color-heading dark:text-color-darkHeading">
              Customer Satisfaction
            </h3>
            <p className="dark:text-color-darkTextColor text-color-textColor mt-3">
              We prioritize your experience with top-notch customer service.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
