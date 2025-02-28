import { useColorScheme as useNativeColorScheme } from "react-native";

export const DEFAULT_THEME = "light";

export type Theme = "light" | "dark";

export const useColorScheme = () => {
  const theme = useNativeColorScheme();

  return theme ?? DEFAULT_THEME;
};
