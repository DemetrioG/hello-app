import { Theme } from "@/hooks/useColorScheme";

export function generateRandomColor(theme: Theme) {
  const lightLetters = "89ABCDEF"; // Code that are visible on a light background
  const darkLetters = "01234567"; // Code that are visible on a dark background

  let color = "#";

  for (let i = 0; i < 6; i++) {
    color +=
      theme === "light"
        ? lightLetters[Math.floor(Math.random() * lightLetters.length)]
        : darkLetters[Math.floor(Math.random() * darkLetters.length)];
  }

  return color;
}
