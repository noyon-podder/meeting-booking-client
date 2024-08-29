import GlobalForm from "@/components/form/GlobalForm";
import GlobalInput from "@/components/form/GlobalInput";
import Navbar from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";
import { FieldValues, SubmitHandler } from "react-hook-form";
import backgroundImage from "/register.png";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import loginValidationSchema from "@/schema/loginValidationSchema";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hook";
import { setUser } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";

const Login = () => {
  const [userLogin, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const defaultValues = {
    email: "web.programming12.6@gmail.com",
    password: "12345678",
  };

  const handleLoginForm: SubmitHandler<FieldValues> = async (data) => {
    console.log("Login from : ", data);

    const userData = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await userLogin(userData);

      const user = verifyToken(res.data.token);

      const currentUser = {
        user: user,
        token: res.data?.token,
        userInfo: res?.data?.data,
      };

      dispatch(setUser(currentUser));

      console.log(res);

      if (res.error) {
        toast.error(res.error.data.message);
      } else {
        toast.success("Login Successfully ☺");
        navigate("/");
      }
      console.log(res);
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="w-full flex items-center justify-center p-5"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "calc(100vh - 85px)",
        }}
      >
        <div className="max-w-[500px] w-full py-10 px-6 border bg-white dark:bg-color-cardColor rounded">
          <div className="mb-5">
            <h2 className="text-center text-xl dark:text-white text-color-darkBaseColor font-semibold">
              Login
            </h2>
          </div>
          <GlobalForm
            onSubmit={handleLoginForm}
            resolver={zodResolver(loginValidationSchema)}
            defaultValues={defaultValues}
          >
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

            {isLoading ? (
              <>
                <Button
                  disabled
                  className="w-full bg-color-baseColor text-white"
                >
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              </>
            ) : (
              <>
                <Button
                  type="submit"
                  className="w-full bg-color-baseColor text-white hover:bg-color-baseLightColor"
                >
                  Submit
                </Button>
              </>
            )}
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
