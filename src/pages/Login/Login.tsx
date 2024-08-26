import GlobalForm from "@/components/form/GlobalForm";
import GlobalInput from "@/components/form/GlobalInput";
import Navbar from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";
import { FieldValues, SubmitHandler } from "react-hook-form";
import backgroundImage from "/register.png";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLoginForm: SubmitHandler<FieldValues> = (data) => {
    console.log("Login from : ", data);
  };

  return (
    <>
      <Navbar />
      <div
        className="w-full flex items-center justify-center "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "calc(100vh - 78px)",
        }}
      >
        <div className="max-w-[500px] w-full py-10 px-6 border bg-white dark:bg-color-cardColor rounded">
          <div className="mb-5">
            <h2 className="text-center text-xl dark:text-white text-color-darkBaseColor font-semibold">
              Login
            </h2>
          </div>
          <GlobalForm onSubmit={handleLoginForm}>
            <GlobalInput
              type="text"
              placeholder="Email"
              name="email"
              label="Email Address"
              className=""
            />

            <GlobalInput
              type="password"
              placeholder="Password"
              name="password"
              label="Password"
            />

            <Button
              type="submit"
              className="w-full bg-color-baseColor text-white hover:bg-color-baseLightColor"
            >
              Submit
            </Button>
          </GlobalForm>

          <p className="dark:text-color-darkHeading text-color-textColor mt-7 text-center">
            Already have an account?{" "}
            <Link
              to="/register"
              className="text-color-baseColor hover:underline ml-2"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
