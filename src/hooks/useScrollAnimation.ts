import { useAnimation, AnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const useScrollAnimation = (): [
  AnimationControls,
  (node?: Element | null) => void
] => {
  // Set up animation controls
  const controls = useAnimation();

  // Hook to detect when the section is in view
  const { ref, inView } = useInView({
    threshold: 0.3, // Trigger animation when 40% of the section is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return [controls, ref];
};

export default useScrollAnimation;
