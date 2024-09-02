import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeProvider } from "./context/ThemeProvider";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa6";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll
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
