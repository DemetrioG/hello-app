import Colors from "@/constants/colors";
import { useColorScheme } from "./useColorScheme";

export function useTheme(
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();

  return Colors[theme][colorName];
}
