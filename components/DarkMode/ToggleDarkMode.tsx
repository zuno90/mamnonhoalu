import { useEffect, useState } from "react";

export default function ToggleDarkMode() {
  const currentTheme =
    typeof window !== "undefined"
      ? localStorage.getItem("theme") ?? "light"
      : "light";
  const [theme, setTheme] = useState(currentTheme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [colorTheme, theme]);

  return [colorTheme, setTheme];
}
