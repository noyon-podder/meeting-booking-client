/**
 * Title: Write a program using JavaScript on ProtectedRoute
 * Author: Noyon Podder
 * Portfolio: https://dev-noyon.vercel.app/
 * Linkedin: https://linkedin.com/in/dev-noyon
 * GitHub: https://github.com/noyon-podder
 * Facebook: https://www.facebook.com/noyon.Podder7/
 * Instagram: https://www.instagram.com/noyon.podder7/
 * Twitter: https://x.com/noyon_podder7
 * WhatsApp: https://wa.me/8801752441505
 * Telegram: https://t.me/Noyonpodder7
 * Date: 16 December 2024
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { currentToken, logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { verifyToken } from "@/utils/verifyToken";
import { jwtDecode } from "jwt-decode";
import { ReactNode, useEffect } from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

// Define a custom type for the decoded JWT
interface DecodedToken {
  exp: number;
  role: "user" | "admin"; // Define available roles
}

interface ProtectedRouteProps {
  children: ReactNode;
  role?: "user" | "admin";
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, role }) => {
  const token = useAppSelector(currentToken);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      try {
        // Decode token with custom type
        const decodedToken: DecodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
          dispatch(logout());
          toast.success("Session expired. Logging out.");
        }
      } catch (error) {
        console.error("Token decoding error:", error);
        dispatch(logout());
        toast.error("Authentication error. Please log in again.");
      }
    }
  }, [token, dispatch]);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  const user: any = verifyToken(token);

  if (!user) {
    toast.error("Invalid token. Please log in again.");
    return <Navigate to="/login" replace={true} />;
  }

  // Check user role for route access
  if (role && role !== user.role) {
    dispatch(logout());
    return <Navigate to="/" replace={true} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
