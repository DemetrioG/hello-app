import { View as DefaultView } from "react-native";
import { useTheme } from "@/hooks/useTheme";

type ViewProps = DefaultView["props"];

export function View(props: ViewProps) {
  const { style, ...otherProps } = props;

  const backgroundColor = useTheme("background");

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
