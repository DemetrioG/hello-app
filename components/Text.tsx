import { Text as DefaultText } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import { DEFAULT_FONT_FAMILY } from "@/constants/fonts";

type TextProps = DefaultText["props"];

export function Text(props: TextProps) {
  const { style, ...otherProps } = props;

  const color = useTheme("text");

  return (
    <DefaultText
      style={[{ color }, style, { fontFamily: DEFAULT_FONT_FAMILY }]}
      {...otherProps}
    />
  );
}
