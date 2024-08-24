import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeProvider } from "./context/ThemeProvider";

function App() {
  {
    //TODO: after the deploy this code is deleted color code here
    /* <div className="mb-10">
        <h5 className="font-bold mb-6">Dark</h5>
        <h2 className="py-4 dark:bg-[#E5E7EB] bg-[#1F2937]"> Primary</h2>
        <h2 className="py-4 dark:bg-[#ADC1FF] bg-[#003B95]"> Secondary</h2>
        <h2 className="py-4 dark:bg-[#F9FAFB] bg-[#E5E7EB]"> Accent</h2>
        <h2 className="py-4 dark:bg-[#1F2937] bg-[#F9FAFB]"> Background</h2>
      </div> */
  }
  return (
    <ThemeProvider>
      <RouterProvider router={router} />;
    </ThemeProvider>
  );
}

export default App;
