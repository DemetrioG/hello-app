import Colors from "@/constants/colors";
import { useColorScheme } from "react-native";

const DEFAULT_THEME = "light";

export function useTheme(
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? DEFAULT_THEME;

  return Colors[theme][colorName];
}
