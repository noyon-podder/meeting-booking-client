import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeProvider } from "./context/ThemeProvider";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import useServerStatus from "./hooks/useServerStatus";
// Import the hook

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const serverError = useServerStatus(import.meta.env.VITE_SERVER_URL);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // If the server is down, show an error message instead of the app content
  if (serverError) {
    return (
      <div className="flex items-center justify-center h-screen w-full flex-col">
        <h1 className="text-5xl font-mono mb-4">
          <span className="text-red-700">Oops! </span>Something went wrong.
        </h1>
        <p className="text-red-600 text-lg">
          Our servers are currently down. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
        <Toaster position="top-center" />
      </ThemeProvider>

      <div
        className={`scroll-top ${
          isScrolled ? "open" : ""
        } bg-color-baseColor flex items-center justify-center `}
        onClick={scrollToTop}
      >
        <FaChevronUp />
      </div>
    </>
  );
}

export default App;
