import { View as DefaultView } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import { memo } from "react";

type ViewProps = DefaultView["props"];

const View = (props: ViewProps) => {
  const { style, ...otherProps } = props;

  const backgroundColor = useTheme("background");

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};

export default memo(View);
