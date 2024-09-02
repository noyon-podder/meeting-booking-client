import { currentToken, logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { verifyToken } from "@/utils/verifyToken";
import { ReactNode } from "react";
// import toast from "react-hot-toast";
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
  const token = useAppSelector(currentToken);
  const location = useLocation();

  let user: CustomJwtPayload | null = null;

  if (token) {
    user = verifyToken(token) as CustomJwtPayload;
  }

  const dispatch = useAppDispatch();
  if (!token) {
    dispatch(logout());
    // return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }

  if (role) {
    if (role !== user?.role) {
      toast("you are not allowed to access this route");
      dispatch(logout());
      return <Navigate to="/" replace={true} />;
    }
  }

  return children;
};

export default ProtectedRoute;
