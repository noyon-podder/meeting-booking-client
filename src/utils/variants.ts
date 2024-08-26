const fadeVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },

  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 1, ease: "easeIn" },
  },
};

export { fadeVariants };
