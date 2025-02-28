import { memo } from "react";
import { Text as DefaultText } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import { DEFAULT_FONT_FAMILY } from "@/constants/fonts";

type TextProps = DefaultText["props"];

const Text = (props: TextProps) => {
  const { style, ...otherProps } = props;

  const color = useTheme("text");

  return (
    <DefaultText
      testID="text-component"
      style={[{ color }, style, { fontFamily: DEFAULT_FONT_FAMILY }]}
      {...otherProps}
    />
  );
};

export default memo(Text);
