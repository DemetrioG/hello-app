import { generateRandomColor } from "@/helpers/colors";
import { useCallback, useState } from "react";

const DEFAULT_COLOR = generateRandomColor();

export const useColor = () => {
  const [color, setColor] = useState(DEFAULT_COLOR);

  const handleChange = useCallback(() => {
    setColor(generateRandomColor());
  }, [setColor]);

  return { color, handleChange };
};
