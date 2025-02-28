import { Text } from "@/components/Text";
import { useColor } from "@/hooks/useColor";
import { Pressable } from "react-native";

export default function Home() {
  const { color, handleChange } = useColor();

  return (
    <Pressable
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color,
      }}
      onPress={handleChange}
    >
      <Text style={{ fontSize: 20 }}>Hello!</Text>
    </Pressable>
  );
}
