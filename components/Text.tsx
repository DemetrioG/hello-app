import { Text as DefaultText } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import { DEFAULT_FONT_FAMILY } from "@/constants/fonts";
import { memo } from "react";

type TextProps = DefaultText["props"];

const Text = (props: TextProps) => {
  const { style, ...otherProps } = props;

  const color = useTheme("text");

  return (
    <DefaultText
      style={[{ color }, style, { fontFamily: DEFAULT_FONT_FAMILY }]}
      {...otherProps}
    />
  );
};

export default memo(Text);
