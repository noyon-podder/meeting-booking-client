import MainLayout from "@/components/Layout/MainLayout";
import HomePage from "@/pages/Home/HomePage";
import NotFound from "@/pages/NotFound/NotFound";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
