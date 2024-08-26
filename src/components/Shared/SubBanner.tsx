import useScrollAnimation from "@/hooks/useScrollAnimation";
import { fadeVariants } from "@/utils/variants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface SubBannerProps {
  title: string;
  breadcrumb: { name: string; path: string }[];
  backgroundImage: string;
}

const SubBanner: React.FC<SubBannerProps> = ({
  title,
  breadcrumb,
  backgroundImage,
}) => {
  const [controls, ref] = useScrollAnimation();
  return (
    <div
      ref={ref}
      className="relative w-full h-64 md:h-72 flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="gradient-overlay opacity-60" />

      {/* Content */}
      <motion.div
        initial={"hidden"}
        animate={"visible"}
        variants={fadeVariants}
        className="relative text-center text-white z-10"
      >
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>

        {/* Breadcrumb */}
        <nav className="mt-4">
          <ul className="flex justify-center space-x-2 text-sm md:text-base">
            {breadcrumb.map((crumb, index) => (
              <li key={index} className="flex items-center">
                <Link to={crumb.path} className="hover:underline">
                  {crumb.name}
                </Link>
                {index < breadcrumb.length - 1 && (
                  <span className="mx-2">/</span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </div>
  );
};

export default SubBanner;
