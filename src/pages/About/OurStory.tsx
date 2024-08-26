import Container from "@/components/Container";
import { fadeVariants } from "@/utils/variants";
import Story from "/story.jpg";
import { motion } from "framer-motion";

import useScrollAnimation from "@/hooks/useScrollAnimation";

const OurStory = () => {
  const [controls, ref] = useScrollAnimation();
  return (
    <section ref={ref} className="py-16 bg-white dark:bg-gray-900">
      <Container>
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column - Image */}
          <motion.div
            animate={controls}
            variants={fadeVariants}
            className="w-full md:w-1/2 mb-8 md:mb-0"
          >
            <img
              src={Story}
              alt="Our Story Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            animate={controls}
            variants={fadeVariants}
            className="w-full md:w-1/2 md:pl-10"
          >
            <h2 className="lg:text-4xl text-3xl  font-mono font-bold mb-6 text-gray-800 dark:text-gray-200">
              ScheduliFy Story
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Our journey began with a simple idea: to create a platform that
              would revolutionize the way people connect with services. Over the
              years, we have evolved from a small startup into a leading player
              in the industry, thanks to our relentless pursuit of innovation
              and commitment to excellence.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300">
              As we continue to grow and evolve, our mission remains the same:
              to deliver outstanding value and to make the world a better place
              through our innovative solutions.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default OurStory;
