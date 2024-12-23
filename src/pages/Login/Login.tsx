/**
 * Title: Write a program using TypeScript on Login
 * Author: Noyon Podder
 * Portfolio: https://dev-noyon.vercel.app/
 * Linkedin: https://linkedin.com/in/dev-noyon
 * GitHub: https://github.com/noyon-podder
 * Facebook: https://www.facebook.com/noyon.Podder7/
 * Instagram: https://www.instagram.com/noyon.podder7/
 * Twitter: https://x.com/noyon_podder7
 * WhatsApp: https://wa.me/8801752441505
 * Telegram: https://t.me/Noyonpodder7
 * Date: 19 December 2024
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import GlobalForm from "@/components/form/GlobalForm";
import GlobalInput from "@/components/form/GlobalInput";
import Navbar from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";
import { FieldValues, SubmitHandler } from "react-hook-form";
import backgroundImage from "/register.png";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import loginValidationSchema from "@/schema/loginValidationSchema";
import { Loader2, User, UserPlus } from "lucide-react";
import toast from "react-hot-toast";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hook";
import { setUser } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import { useState } from "react";
// import { TResponseRedux } from "@/types";

const userDefaultValue = {
  email: "user@gmail.com",
  password: "123456",
};

const adminDefaultValue = {
  email: "admin@gmail.com",
  password: "123456",
};

const Login = () => {
  const [userLogin, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const location = useLocation();
  // const form = location?.state?.from?.pathname || "/";
  const [role, setRole] = useState<"user" | "admin" | null>(null);

  const handleLoginForm: SubmitHandler<FieldValues> = async (data) => {
    const userData = {
      email: data.email,
      password: data.password,
    };

    try {
      const res: any = await userLogin(userData);

      const user: any = verifyToken(res?.data.token);

      const currentUser = {
        user: user,
        token: res.data?.token,
        userInfo: res?.data?.data,
      };

      dispatch(setUser(currentUser));

      if (res.error) {
        toast.error(res.error.data.message);
      } else {
        toast.success("Login Successfully ☺");
        if (user?.role === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      toast.error("Invalid Credentials");
      console.log(err);
    }
  };

  // Toggle between user and admin login
  const handleRoleToggle = (newRole: "user" | "admin") => {
    setRole(newRole);
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
            defaultValues={
              role === "admin"
                ? adminDefaultValue
                : role === "user"
                ? userDefaultValue
                : { email: "", password: "" }
            }
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

          <div className="w-full flex items-center gap-5 mt-5">
            <Button
              disabled={role === "admin"} // Disable if already selected
              onClick={() => handleRoleToggle("admin")}
              className={`w-full bg-transparent text-primary hover:bg-green-600 hover:text-white border border-primary font-medium flex items-center gap-2 ${
                role === "admin" ? "bg-green-600 text-white" : "bg-transparent"
              }`}
              variant="outline"
            >
              <UserPlus size={18} />
              Admin
            </Button>
            <Button
              disabled={role === "user"} // Disable if already selected
              onClick={() => handleRoleToggle("user")}
              className={`w-full bg-transparent text-primary hover:bg-green-600 hover:text-white border border-primary font-medium flex items-center gap-2 ${
                role === "user" ? "bg-green-600 text-white" : "bg-transparent"
              }`}
            >
              <User size={18} />
              User
            </Button>
          </div>

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
