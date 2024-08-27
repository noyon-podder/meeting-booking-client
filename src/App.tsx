import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeProvider } from "./context/ThemeProvider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </ThemeProvider>
  );
}

export default App;
