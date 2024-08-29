import MainLayout from "@/components/Layout/MainLayout";
import ProtectedRoute from "@/components/Layout/ProtectedRoute";
import AboutPage from "@/pages/About/AboutPage";
import BookingForm from "@/pages/Booking/BookingForm";
import ContactPage from "@/pages/Contact/ContactPage";
import Dashboard from "@/pages/Dashboard/Dashboard";
import HomePage from "@/pages/Home/HomePage";
import Login from "@/pages/Login/Login";
import MeetingRoomDetails from "@/pages/MeetingRoomDetails/MeetingRoomDetails";
import MeetingRoomsPage from "@/pages/MeetingRooms/MeetingRoomsPage";
import MyBookings from "@/pages/MyBookins/MyBookings";
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
        element: <MeetingRoomsPage />,
      },
      {
        path: "/meeting-rooms/:id",
        element: (
          <ProtectedRoute>
            <MeetingRoomDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "/meeting-rooms/:id/booking-slots",
        element: (
          <ProtectedRoute>
            <BookingForm />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-bookings",
        element: (
          <ProtectedRoute role="user">
            <MyBookings />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute role="admin">
            <Dashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
