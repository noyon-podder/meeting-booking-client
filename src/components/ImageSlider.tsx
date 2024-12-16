import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = ({
  images,
  isHovered,
}: {
  images: string[];
  isHovered: boolean;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

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
