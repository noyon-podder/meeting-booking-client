import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="mt-10 py-16 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/banner.jpg')",
      }}
    >
      <div className="container mx-auto text-center">
        <h2 className="lg:text-4xl text-2xl leading-relaxed font-bold  mb-14 text-color-lightColor dark:text-color-darkHeading text-center font-mono">
          Sign Up for Our Newsletter
        </h2>

        <motion.form
          className="flex justify-center items-center max-w-md mx-auto"
          onSubmit={handleSignup}
          initial="hidden"
          animate="visible"
          variants={formVariants}
        >
          <div className="w-full h-[50px] flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[50px] px-4 py-2 rounded-l-md focus:outline-none border border-gray-300 dark:border-gray-600"
              required
            />
            <button
              type="submit"
              className=" bg-color-baseColor w-[120px] h-[50px] text-white rounded-r-md hover:bg-color-baseLightColor transition duration-300 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Sign Up
            </button>
          </div>
        </motion.form>
        <p className="mt-4 text-color-lightColor text-sm dark:text-color-darkTextColor">
          Sign up today and get a 10% discount on your first booking!
        </p>
      </div>
    </section>
  );
};

export default NewsletterSignup;
