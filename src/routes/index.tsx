import MainLayout from "@/components/Layout/MainLayout";
import ProtectedRoute from "@/components/Layout/ProtectedRoute";
import AboutPage from "@/pages/About/AboutPage";
import ContactPage from "@/pages/Contact/ContactPage";
import HomePage from "@/pages/Home/HomePage";
import Login from "@/pages/Login/Login";
import MeetingRoomsPage from "@/pages/MeetingRooms/MeetingRoomsPage";
import NotFound from "@/pages/NotFound/NotFound";
import Register from "@/pages/Register/Register";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/meeting-rooms",
        element: (
          <ProtectedRoute>
            <MeetingRoomsPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
