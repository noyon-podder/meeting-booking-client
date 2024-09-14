import { currentToken, logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { verifyToken } from "@/utils/verifyToken";

import { ReactNode, useEffect } from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  children,
  role,
}: {
  children: ReactNode;
  role?: "user" | "admin";
}) => {
  const token = useAppSelector(currentToken);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   if (token) {
  //     try {
  //       const decodedToken: { exp: number } = jwtDecode(token);
  //       const currentTime = Date.now() / 1000;

  //       if (decodedToken.exp < currentTime) {
  //         dispatch(logout());
  //         toast.success("Logout");
  //       }
  //     } catch (error) {
  //       console.error("Token decoding error:", error);
  //       dispatch(logout());
  //       toast.error("Authentication error. Please log in again.");
  //     }
  //   }
  // }, [token, dispatch]);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  const user = verifyToken(token);
  if (!user) {
    toast.error("Invalid Token. Please Login Again");
    return <Navigate to="/login" replace={true} />;
  }

  // if (user?.role) {
  //   if (role !== user?.role) {
  //     toast.error("Access Denied. Insufficient Permissions.");
  //     return <Navigate to="/login" replace={true} />;
  //   }
  // }

  return children;
};

export default ProtectedRoute;
