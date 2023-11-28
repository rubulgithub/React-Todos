import { useEffect } from "react";
import { useState } from "react";

const useDarkMode = () => {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    localStorage.setItem("darkMode", mode);
  }, [mode]);

  return [mode, toggleMode];
};

export default useDarkMode;
