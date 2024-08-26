import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import { teamMembers } from "@/data/data";

const TeamCardEffectSlider = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        modules={[EffectCards]}
        className="mySwiper"
        loop={true}
      >
        {teamMembers.map((member) => (
          <SwiperSlide>
            <motion.div
              key={member.id}
              className="team-member bg-color-lightColor dark:bg-color-darkBaseColor text-center border border-color-darkHeading dark:border-color-baseColor shadow-lg rounded-lg p-6"
              variants={itemVariants}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-color-heading dark:text-color-darkHeading">
                {member.name}
              </h3>
              <p className="text-color-textColor dark:text-color-darkTextColor">
                {member.role}
              </p>
              <p className="mt-3 text-color-textColor dark:text-color-darkTextColor">
                {member.bio}
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TeamCardEffectSlider;
