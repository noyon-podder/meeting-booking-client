/**
 * Title: Write a program using JavaScript on ImageSlider
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

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const ImageSlider = ({
  images,
  isHovered,
}: {
  images: string[];
  isHovered: boolean;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-48 overflow-hidden">
      {/* favorite button */}
      <button
        className={`${
          isHovered
            ? "absolute top-2 right-2 z-10 bg-white text-color-darkBaseColor p-1 rounded-full shadow-lg hover:shadow-none shadow-black transition-shadow"
            : "hidden"
        }`}
        onClick={() => setIsFavorite(!isFavorite)}
      >
        {isFavorite ? (
          <Heart size={18} className="fill-current text-color-baseLightColor" />
        ) : (
          <Heart size={18} className="" />
        )}
      </button>

      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div>
        <button
          onClick={handlePrev}
          className={`${
            currentIndex === 0
              ? "hidden"
              : "absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-color-darkBaseColor p-1 rounded-full z-10 shadow-lg hover:shadow-none shadow-black transition-shadow"
          } ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={handleNext}
          className={`${
            currentIndex === images.length - 1
              ? "hidden"
              : "absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-color-darkBaseColor p-1 rounded-full z-10 shadow-lg hover:shadow-none shadow-black transition-shadow"
          } ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
