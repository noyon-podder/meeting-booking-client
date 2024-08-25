// import { Moon, Sun } from "lucide-react";
import Sun from "/sun.png";
import Moon from "/moon.png";

// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import { useTheme } from "@/context/ThemeProvider";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      {/* <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu> */}

      <div className="flex items-center justify-between w-[60px] h-[25px] border border-color-darkBaseColor rounded-[20px] p-1 bg-color-darkBaseColor dark:bg-white dark:border-white  cursor-pointer relative ">
        <img
          src={Moon}
          alt=""
          width={20}
          height={20}
          onClick={() => setTheme("dark")}
        />
        <div
          className={`w-5 h-5 bg-white dark:bg-color-darkBaseColor  rounded-full absolute  transition-transform duration-300 ease-out ${
            theme === "dark" ? "left-1" : "right-1"
          }`}
        ></div>
        <img
          src={Sun}
          alt=""
          width={20}
          height={20}
          onClick={() => setTheme("light")}
        />
      </div>
    </>
  );
}
