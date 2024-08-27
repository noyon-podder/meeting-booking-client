import { currentToken, logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(currentToken);
  const dispatch = useAppDispatch();

  if (!token) {
    dispatch(logout());
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
