import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full flex-col">
      <h2 className="lg:text-[140px] xl:text-[180px] leading-[145px] xl:leading-[185px] mb-5 text-[80px] font-extrabold text-color-heading dark:text-color-darkHeading">
        404
      </h2>
      <p className="text-lg text-headingColor font-semibold">
        Oops! Page Not Found
      </p>

      <Link to={"/"} className="mt-10">
        {" "}
        <Button
          size="lg"
          className="bg-color-baseLightColor hover:bg-color-baseColor text-white text-[20px] font-medium py-6 "
        >
          Go Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
