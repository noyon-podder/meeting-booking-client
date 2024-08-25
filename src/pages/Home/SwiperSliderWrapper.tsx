// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay, FreeMode } from "swiper/modules";
import { testimonials } from "@/data/data";

const SwiperSliderWrapper = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1000}
        modules={[FreeMode, Autoplay]}
        allowTouchMove={false}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        noSwiping={true}
        noSwipingClass="swiper-no-swiping"
        className="mySwiper"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            {/* slider cart code start  */}
            <div className="w-full max-w-md px-8 border dark:border-color-darkBaseColor border-color-darkHeading py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-color-cardColor">
              <div className="flex justify-center -mt-16 md:justify-end">
                <img
                  className="object-cover w-20 h-20 border-2 border-color-darkBaseColor rounded-full dark:border-color-darkBaseColor"
                  alt="Testimonial avatar"
                  src={item.profilePicture}
                />
              </div>

              {/* <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
                {item.name}
              </h2> */}

              <p className="dark:text-color-darkTextColor text-color-textColor mt-3 text-base">
                {item.testimonial}
              </p>

              <div className="flex flex-col items-end mt-4">
                <span className="text-color-baseLightColor text-lg font-medium">
                  {item.name}
                </span>
                <span className="text-sm text-center dark:text-color-darkTextColor text-color-textColor">
                  {item.role}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperSliderWrapper;
