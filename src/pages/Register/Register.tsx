import GlobalForm from "@/components/form/GlobalForm";
import GlobalInput from "@/components/form/GlobalInput";
import Navbar from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";
import { FieldValues, SubmitHandler } from "react-hook-form";
import backgroundImage from "/register.png";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import registerSchema from "@/schema/regsiterSchema";

const Register = () => {
  const handleRegisterFormSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Navbar />
      <div
        className="w-full flex lg:mt-0 mt-10 items-center justify-center "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "calc(100vh - 85px)",
        }}
      >
        <div className="border flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-color-cardColor lg:max-w-5xl">
          <div
            className="hidden bg-cover lg:block lg:w-1/2"
            style={{
              backgroundImage: `url(${"https://img.freepik.com/free-vector/cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37328.jpg?t=st=1724693649~exp=1724697249~hmac=ad810c81b35f2719d7277f224c615af6b0fce789fcd69c6c3bd2bd75d0d4732f&w=740"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <div className="flex justify-center mx-auto">
              <h2 className="dark:text-white text-color-baseColor lg:text-[32px] text-[22px] font-bold font-mono">
                Sign Up
              </h2>
            </div>

            {/* <p className=" text-xl text-center text-gray-600 dark:text-gray-200">
              Welcome back!
            </p> */}

            {/* register form  */}
            <div className="mt-6 w-full">
              <GlobalForm
                onSubmit={handleRegisterFormSubmit}
                resolver={zodResolver(registerSchema)}
              >
                <GlobalInput
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  label="Name"
                  className="w-full"
                />
                <GlobalInput
                  name="email"
                  type="text"
                  placeholder="Enter your email address"
                  label="Email Address"
                />
                <GlobalInput
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  label="Password"
                />
                <GlobalInput
                  name="phoneNumber"
                  type="text"
                  placeholder="Enter your phone number"
                  label="Phone Number"
                />
                <GlobalInput
                  name="address"
                  type="text"
                  placeholder="Enter your address"
                  label="Address"
                  className="w-full"
                />
                <Button
                  type="submit"
                  className="w-full bg-color-baseColor text-white hover:bg-color-baseLightColor"
                >
                  Submit
                </Button>
              </GlobalForm>
            </div>
            <p className="dark:text-color-darkHeading text-color-textColor mt-4 text-center">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-color-baseLightColor hover:underline ml-2"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
