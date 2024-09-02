import DashboardLayout from "@/components/Layout/DashboardLayout";
import MainLayout from "@/components/Layout/MainLayout";
import ProtectedRoute from "@/components/Layout/ProtectedRoute";
import AboutPage from "@/pages/About/AboutPage";
import BookingForm from "@/pages/Booking/BookingForm";
import CheckoutPage from "@/pages/Checkout/CheckoutPage";
import SuccessView from "@/pages/Checkout/SuccessView";
import ContactPage from "@/pages/Contact/ContactPage";
import BookingManagement from "@/pages/Dashboard/booking/BookingManagement";
import Dashboard from "@/pages/Dashboard/Dashboard";
import RoomManagement from "@/pages/Dashboard/RoomManagement/RoomManagement";
import SlotManagement from "@/pages/Dashboard/slotManagement/SlotManagement";
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
        path: "/meeting-rooms/:id/checkout",
        element: (
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/success-booking",
        element: <SuccessView />,
      },
      {
        path: "/my-bookings",
        element: (
          <ProtectedRoute role="user">
            <MyBookings />
          </ProtectedRoute>
        ),
      },
    ],
  },

  // dashboard
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute role="admin">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "room-management",
        element: <RoomManagement />,
      },
      {
        path: "booking-management",
        element: <BookingManagement />,
      },
      {
        path: "slot-management",
        element: <SlotManagement />,
      },
    ],
  },
]);
