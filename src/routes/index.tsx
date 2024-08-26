import MainLayout from "@/components/Layout/MainLayout";
import AboutPage from "@/pages/About/AboutPage";
import ContactPage from "@/pages/Contact/ContactPage";
import HomePage from "@/pages/Home/HomePage";
import MeetingRoomsPage from "@/pages/MeetingRooms/MeetingRoomsPage";
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
        element: <MeetingRoomsPage />,
      },
    ],
  },
]);
