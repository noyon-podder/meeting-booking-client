import { currentToken, logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { verifyToken } from "@/utils/verifyToken";
import { ReactNode, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { JwtPayload } from "jsonwebtoken";

interface CustomJwtPayload extends JwtPayload {
  role?: "user" | "admin";
}

const ProtectedRoute = ({
  children,
  role,
}: {
  children: ReactNode;
  role?: "user" | "admin";
}) => {
  const token = useAppSelector(currentToken); // Get the current token from the Redux store
  const location = useLocation();
  const dispatch = useAppDispatch();

  let user: CustomJwtPayload | null = null;

  // Decode the token if it exists
  if (token) {
    user = verifyToken(token) as CustomJwtPayload;
  }

  console.log({ user });

  // Automatically log out if the token is expired or not available
  useEffect(() => {
    if (!token || (user && user.exp && Date.now() >= user.exp * 1000)) {
      dispatch(logout());
      toast("Your session has expired. Please log in again.");
    }
  }, [token, user, dispatch]);

  // Redirect to login if the token is not available
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }

  // Check if the user's role matches the required role for the route
  if (role && role !== user?.role) {
    toast("You are not allowed to access this route.");
    return <Navigate to="/" replace={true} />;
  }

  // If everything is fine, render the children components
  return <>{children}</>;
};

export default ProtectedRoute;
