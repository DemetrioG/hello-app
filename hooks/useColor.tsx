import { useCallback, useMemo, useState } from "react";
import { generateRandomColor } from "@/helpers/colors";
import { useColorScheme } from "./useColorScheme";

export const useColor = () => {
  const theme = useColorScheme();

  const defaultColor = useMemo(() => generateRandomColor(theme), [theme]);

  const [color, setColor] = useState(defaultColor);

  const handleChange = useCallback(() => {
    setColor(generateRandomColor(theme));
  }, [theme, setColor]);

  return { color, handleChange };
};
