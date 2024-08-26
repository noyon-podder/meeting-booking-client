import TeamCardEffectSlider from "./TeamCardEffectSlider";
import Container from "@/components/Container";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { fadeVariants } from "@/utils/variants";

import { motion } from "framer-motion";

const MeetTheTeam = () => {
  // ?parellax effect
  //   const { scrollY } = useViewportScroll();
  //   const y1 = useTransform(scrollY, [0, 500], [500, 0]); // Moves from 500px below to its original position
  //   const y2 = useTransform(scrollY, [0, 500], [500, 0]); // Same as y1, adjust if needed

  const [controls, ref] = useScrollAnimation();

  return (
    <>
      <motion.section
        ref={ref}
        className="lg:py-20 py-10  bg-gray-100 dark:bg-color-cardColor"
      >
        <Container>
          <div className="flex  flex-col-reverse md:flex-row items-center gap-10 lg:gap-20">
            {/* Left Column - Image with Overlay */}
            <div className="relative w-full md:w-1/2 mb-8 md:mb-0">
              <motion.div
                // style={{ y: y1 }}

                animate={controls}
                variants={fadeVariants}
                className="text-left"
              >
                <div className="relative">
                  <h2 className="lg:text-5xl text-3xl font-mono font-bold lg:mb-10 mb-5 text-gray-800 dark:text-gray-200">
                    Our Team Goal
                  </h2>
                </div>
                <p className="text-lg text-color-textColor dark:text-color-darkTextColor mb-4">
                  "Every member of our team is committed to ensuring the success
                  of our customers. Our goal is to provide unparalleled support,
                  guidance, and expertise to help users maximize the benefits of
                  our platform, making their scheduling process as smooth as
                  possible."
                  <br />
                  <br />
                  Collaboration is at the heart of our team’s success. We
                  believe in working together, learning from one another, and
                  continually growing both individually and collectively.
                </p>
              </motion.div>
            </div>

            {/* Right Column - Text */}
            <div className="w-full md:w-1/2  px-5 lg:px-20">
              <motion.div
                variants={fadeVariants}
                animate={controls}
                // style={{ y: y2 }}
              >
                <TeamCardEffectSlider />
              </motion.div>
            </div>
          </div>
        </Container>
      </motion.section>
    </>
  );
};

export default MeetTheTeam;
